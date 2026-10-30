"""Dependency-free extractor for this PDF's literal-text content streams."""
import re, zlib, json
from pathlib import Path
d=Path('INTERNET PROGRAMMING LAB EXPERIMENTS.pdf').read_bytes()
objects={int(m[1]):m[2] for m in re.finditer(rb'(\d+) 0 obj\s*(.*?)\s*endobj',d,re.S)}
def literal(b):
    return re.sub(rb'\\([0-7]{1,3}|.)',lambda m: bytes([int(m[1],8)]) if m[1][:1].isdigit() else {b'n':b'\n',b'r':b'\r',b't':b'\t'}.get(m[1],m[1]),b).decode('cp1252',errors='replace')
maps={}
for oid,obj in objects.items():
    ref=re.search(rb'/ToUnicode (\d+) 0 R',obj)
    if not ref: continue
    raw=zlib.decompress(re.search(rb'stream\r?\n(.*?)\r?\nendstream',objects[int(ref[1])],re.S)[1])
    cmap={}
    for body in re.findall(rb'beginbfchar(.*?)endbfchar',raw,re.S):
        for a,b in re.findall(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>',body): cmap[int(a,16)]=bytes.fromhex(b.decode()).decode('utf-16-be')
    for body in re.findall(rb'beginbfrange(.*?)endbfrange',raw,re.S):
        for a,b,c in re.findall(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>',body):
            for n in range(int(a,16),int(b,16)+1): cmap[n]=chr(int(c,16)+n-int(a,16))
    maps[oid]=cmap
pages=[]
for oid,obj in objects.items():
    if not re.search(rb'/Type\s*/Page\b',obj): continue
    ref=re.search(rb'/Contents\s+(\d+) 0 R',obj)
    if not ref: raise ValueError('Unsupported page contents')
    stream=re.search(rb'stream\r?\n(.*?)\r?\nendstream',objects[int(ref[1])],re.S)[1]
    raw=zlib.decompress(stream)
    lines=[]
    fonts={name:int(num) for name,num in re.findall(rb'/(F\d+) (\d+) 0 R',obj)}
    for block in re.findall(rb'BT\b(.*?)\bET',raw,re.S):
        pos=re.search(rb'1 0 0 1 ([\d.]+) ([\d.]+) Tm',block)
        if not pos: continue
        x,y=map(float,pos.groups())
        font=re.search(rb'/(F\d+) [\d.]+ Tf',block)
        cmap=maps.get(fonts.get(font[1] if font else b''),{})
        txt=''
        for token in re.finditer(rb'\(((?:\\.|[^\\)])*)\)|<([0-9a-fA-F]+)>',block):
            if token[1] is not None: txt+=literal(token[1])
            else: txt+=''.join(cmap.get(int(token[2][i:i+4],16),'?') for i in range(0,len(token[2]),4))
        if 0<y<770 and txt.strip():
            if lines and abs(lines[-1][0]-y)<2: lines[-1][1]+=txt
            else: lines.append([y,txt])
    pages.append({'page':len(pages)+1,'text':'\n'.join(t for _,t in lines)})
Path('docs').mkdir(exist_ok=True)
Path('docs/source-pages.json').write_text(json.dumps(pages,ensure_ascii=False,indent=2),encoding='utf8')
Path('docs/source-extract.txt').write_text('\n\n'.join(f'=== PAGE {p["page"]} ===\n{p["text"]}' for p in pages),encoding='utf8')
print(f'Extracted {len(pages)} pages')
