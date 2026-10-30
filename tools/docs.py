"""Generate source-linked documentation without claiming unexecuted browser checks."""
import json,re,datetime
from pathlib import Path
es=json.loads(Path('docs/experiments.json').read_text(encoding='utf8'))
def cell(x):return str(x).replace('|','\\|').replace('\n','<br>')
gaps={
'library':'Materials are downloadable text, not arbitrary binary repositories. Fine rate is an example ₹5/day. Member records and profiles are demonstrations.',
'hotel':'Local availability only. Static information is editable as resource records; the shared About layout is fixed.',
'bus':'Sample route search is illustrative rather than an exhaustive timetable. Photo uploads are metadata only.',
'train':'PNR is local. Confirmed bookings are demonstrated; automatic RAC/wait-list allocation is not implemented. Refunds use illustrative 80%/50% rules, not a full rule engine.',
'flight':'No airline distribution-system connection or real inventory. Timetable is sample data.',
'cake':'Customization is attached to the complete order rather than individual cart lines. Uploads are metadata only.',
'salon':'Blocked-hour records work by date/time. Unpaid-reservation cancellation is a manual action, not a background job. Payment gateways are simulated.',
'hospital':'Check-ins and hospitals are sample records. Maps use an external map link rather than a live geolocation service. No clinical or regulatory compliance claims.',
'techsavvy':'Recommendations are a static sample selection. Promotion records are documented but automatic coupon pricing is not implemented.',
'stylehub':'Sizes/colours are order-level. Returns/exchanges are specialist records; no automatic reverse-logistics workflow.',
'home-finder':'Saved-search records, sample map and mortgage estimate are available. Actual virtual tours and valuation models are not implemented.',
'insureeasy':'Policies, agents and claims are local records. Side-by-side automated policy comparison and commission settlement are not implemented.',
'blossomgifts':'Delivery dates are local. Loyalty discount pricing is not automated.',
'renewmarket':'Price offers and categories are editable records; negotiation is not a live chat. Logistics uses activity status updates.',
'easytoll':'Wallet/pass/reference checks are functional locally. Actual QR generation and scanning are represented by explicitly simulated reference verification.',
'complainease':'Attachments and proof store metadata only. No GPS coordinates or real officer credential issuance. Feature-hiding controls are not implemented.',
'voteonline':'One-vote checks apply only to local browser state. OTP is displayed. No encryption/election-security claim. Imported voter roll works; generic voter specialist records are not automatically added to the voting roll.',
'agrimart':'Farmer inventory and shipping are local; no SMS OTP or external logistics. Purchases do not yet debit the sample wallet.',
'veterinary':'Consultations, subscriptions, cure education and attachments are non-clinical records. Disease prevalence analytics and actual multimedia uploads are not implemented.',
'rentride':'Booking and approval status are local. Vehicle check-ins are specialist records, not real fleet telemetry.',
'jobs':'Applications, privacy choice and directors are local records. Company-specific access restrictions are illustrative only.',
'waste':'Sample route is a deterministic illustrative route, not an optimized routing algorithm. No bin sensor data or real Google Maps routing.',
'blood-bank':'Donor/stock records are fictional. No compatibility/clinical decisions or national donor integration.',
'wanderlust':'Packages, food and route guides are local. No real travel supplier integration.',
'roadside':'Mechanic approvals are local records. No actual licence validation, dispatch or device geolocation.',
'challan':'Fictional cases and metadata only. No real FIR, police system or government identifiers. Fine enquiries do not perform an actual payment.',
'bus-pass':'QR scanning is explicitly simulated by reference lookup. Arrival information is a manually maintained record, not live tracking.',
'artistryhub':'Local vector illustrations replace actual artist photographs/media. Print orders, biography, catalogue and news work locally; no real social feed.',
'event':'Fictional speakers/venue. Registrations have local references and printable receipts.',
'ijsse':'No verified Scopus indexing. Article/copyright templates are plain text. Reviewer assignments and peer reviews are specialist records; editorial routing is manual.',
'ko-matha':'Stock reports sum manually entered entries. Sales do not automatically create stock-report entries. No A1 milk health-benefit claim.',
'ram-infotech':'Repairs and rental agreements are editable specialist records. Contract billing and service scheduling are not automatically linked to inventory.',
'kodaikanaleats':'Both restaurant and room listings are preserved. Seasonal rate records and room-staff records are maintained, but seasonal multipliers are not yet applied automatically.',
'learnwell':'Fees, announcements, maintenance, teacher records and course requests are local. Monthly/yearly reporting uses export rather than dedicated fee analytics.',
'bus-pass-management':'A separate state namespace and route set from EXP27. QR verification is simulated. ETA is manually maintained.',
'educonnect':'Live classes are explicitly simulated. Downloadable notes, quizzes, timetable, assignments and forum records work locally; no video conferencing or prerecorded video asset.',
'bookhaven':'Book catalog/cart/blog are functional. No automatic bestseller carousel or multi-attribute author/date filtering.',
'professional-showcase':'Sample resume is downloadable plain text. Project case studies are local detail dialogs; no external live project URLs or real professional social accounts.',
'gourmet-haven':'Local illustrations and fictional menu. External map link rather than an embedded Google Maps widget. No rotating photographic carousel.',
'online-store':'Local product/cart/order journey. Sizes and colours are not individually stocked variants. No real payment or email processing.',
'travel-blog':'Illustrative clickable destination map, stories and comments. Original vector illustration galleries; no actual travel photography slideshow or embedded video.',
'recipe-book':'Four detailed recipes, serving scaling and base shopping list. Meal plan and community recipes are records; custom recipes are not yet rendered by the cooking-detail engine. Advanced dietary/time filters are not implemented.',
'electricity':'Progressive PDF tariffs configurable locally. Billing periods are records; no unattended two-month bill generation or reminders.',
'placement':'Practice questions, marking, feedback and ranking work. Candidate blocked status is checked. Schedule entries are not enforced by the practice-start control; no secure exam access or published-results gate.',
'painting-rating':'Ratings, explicit star-band sentiment and package payment simulation work. Uploaded painting contents are not stored or displayed; filenames only. Scheduling is manual.',
'income-tax':'Dated PDF example rules only. Configurable deductions/threshold; percentages and slab boundaries are fixed to the PDF. Custom inputs have simplified income/deduction handling.',
'phone-bill':'Partial payments and late fine allocation are local. Period edits do not automatically issue a new balance. Reminders/autopay are saved preferences without background execution.'
}
header='''# Requirements matrix

## Source audit and numbering decision

The supplied **INTERNET PROGRAMMING LAB EXPERIMENTS.pdf** has 43 pages and **47 distinct experiment entries**. There are two printed 28s, no printed 29, and two printed 36s. Thus 46 printed as the final number does not mean 46 entries. Preserving order and every distinct entry requires EXP01–EXP47. The PDF was copied from the user's Downloads directory into this repository. No entry was merged or omitted.

EXP29 is the second printed 28 (event registration). EXP37 is the second printed 36 (BookHaven). EXP38–EXP47 cover printed 37–46. Several later entries have descriptions rather than formal headings; descriptive titles are assigned without inventing new requirements. EXP33 retains both the restaurant brief and the contradictory room/staff list. EXP27 and EXP35 remain independent bus-pass applications with separate data.

The source text is reproducible with `py tools/extract_pdf.py` using only Python's standard library. The extraction handles literal strings, embedded Unicode character maps and all 43 page content streams. `source-pages.json` retains page boundaries. `source-extract.txt` is the complete extracted text. The original PDF is retained for visual verification.

## Status definitions

- **Implemented demo**: corresponding local interaction or information view is present in source. This does not assert full PDF parity.
- **Partial**: an academic simplification or missing behavior is listed explicitly below.
- **SIMULATED**: authentication, OTP, email, SMS, payments, locations and QR scanning use local demonstrations; no external service is contacted.
- **Node PASS**: arithmetic tests and all-view render smoke checks were actually executed. Render checks use a small DOM stub and are not browser QA.
- **Browser BLOCKED**: Chrome and Edge terminated with Windows IPC `Access is denied` errors. Forms, accessibility, responsive appearance and console behavior have not been verified in a real browser here.

This is a functional implementation baseline, **not a claim that all PDF requirements are complete**. See every experiment's limitations. Each extracted source line appears in the traceability section, including prose requirements split by PDF line wrapping.

## Shared implementation

`scripts/experiment.js`: mandatory university header, landing/nav/footer, catalog search and category/sort filters, favorites, profile simulation, listing CRUD, typed specialist-record CRUD, activity statuses/responses, cart/checkout, bookings/seat selection, library loans, contact forms, JSON exports, print and per-experiment reset. `scripts/domains.js`: domain-specific form schemas. `scripts/seed.js`: fictional operational sample records. `scripts/special.js`: domain calculations and workflows. `scripts/core.js`: storage, escaping, downloads, arithmetic. Each experiment has its own HTML, CSS and ES module with its source brief, theme and configuration.

The role selector intentionally offers no security boundary. Data is saved under `ipl-EXPxx-v1`. Attachments store filename/size metadata only. Local original SVG illustrations have no network dependency. Reset restores the experiment seed without clearing other experiments.

## Inventory

| Stable ID | Title | Printed no. | PDF pages | Primary implementation | Implementation | Executed tests |
|---|---|---|---|---|---|---|
'''
matrix=[header]
for e in es:
 matrix.append(f'| {e["id"]} | [{e["title"]}](../experiments/{e["folder"]}/index.html) | {e["printed"]} | {", ".join(map(str,e["pages"]))} | `{e["mode"]}` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |\n')
matrix.append('\n## Per-experiment functionality and open work\n\n')
for e in es:
 matrix.append(f'### {e["id"]} — {e["title"]}\n\nPrinted {e["printed"]}, PDF pages {", ".join(map(str,e["pages"]))}. Entry: `experiments/{e["folder"]}/script.js`.\n\nImplemented demo focus: {"; ".join(e["features"])}. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.\n\n**Partial / limitations:** {gaps[e["slug"]]}\n\n**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.\n\n')
matrix.append('## Full source-line traceability\n\nEvery extracted line is included below; line wrapping may divide one requirement across rows. Mappings identify the code area, not a verified assertion that every clause is fully implemented. Consult the explicit limitations above.\n\n')
for e in es:
 matrix.append(f'### {e["id"]} source features\n\n| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |\n|---|---|---|---|---|\n')
 for i,line in enumerate(e['source'].splitlines(),1):
  norm=line.lower().replace(' ','')
  if any(x in norm for x in ['login','register','password','authentication','otp']):mapping='experiment.js → account / rolebar; special.js → voting';status='SIMULATED; see limitations'
  elif any(x in norm for x in ['stripe','paypal','gateway','sms','email','secure','compliance','real-time','realtime','google','qr','scan','location']):mapping='Local status/notification/reference/map demonstrations';status='SIMULATED / partial'
  elif any(x in norm for x in ['tax','deduction','units','slab','bill','fine','wallet','pension']):mapping='core.js calculations; special.js finance forms; experiment.js loans';status='Implemented demo; see limitations'
  elif any(x in norm for x in ['cart','order','checkout','price','quantity','stock','inventory']):mapping='experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms';status='Implemented demo; see limitations'
  elif any(x in norm for x in ['reservation','appointment','booking','ticket','seat','pnr']):mapping='experiment.js booking/recordsTable/cancel; special.js pass/PNR forms';status='Implemented demo; see limitations'
  elif any(x in norm for x in ['report','download','print','template']):mapping='core.js download; experiment.js export/print; special.js reports/templates';status='Implemented demo; see limitations'
  elif any(x in norm for x in ['search','filter','categor']):mapping='experiment.js listItems/home toolbar';status='Implemented demo; see limitations'
  elif any(x in norm for x in ['review','rating','feedback','comment']):mapping='experiment.js reviewPanel/admin responses; special.js painting summary';status='Implemented demo; see limitations'
  elif any(x in norm for x in ['home','about','contact','privacy','responsive','navigation','page','image','photo','gallery']):mapping='experiment.js home/about/details/art; per-site HTML/CSS';status='Partial presentation; see limitations'
  else:mapping=f'experiment.js {e["mode"]} workflow; domains.js {e["slug"]} resource forms; source view';status='Mapped context; parity review OPEN'
  matrix.append(f'| {e["id"]}-L{i:03} | {cell(line)} | {cell(mapping)} | {status} | Node render PASS; browser BLOCKED |\n')
 matrix.append('\n')
Path('docs/requirements-matrix.md').write_text(''.join(matrix),encoding='utf8')
guide=['''# Experiment demonstration guide

Run `npm start` from the repository root and open http://127.0.0.1:4173/. There is no installation or build dependency. Do not double-click HTML files: ES modules need an HTTP server.

Use fictional details only. The portal searches titles, IDs and features, and filters eight categories. Launch a website; Discover contains its catalog and main workflow. My workspace contains history and references. Manage demo contains listing CRUD, typed specialist records, and admin activity status. About & contact provides information and a working local enquiry form. Source brief shows the exact extracted PDF entry and page references.

Each experiment has a distinct brand, palette, local state and entry files. Shared code avoids duplicating validation and storage logic. The source has 47 entries; see the requirements matrix for the complete numbering explanation. The short descriptions below are demonstration routes, not a claim of full requirement parity.

To demonstrate to faculty: (1) show the PDF brief, (2) search a listing, (3) complete its primary workflow, (4) show the generated record/reference, (5) refresh to demonstrate persistence, (6) switch the demo role and update a status or listing, (7) export/print, (8) reset. Mark completed to update the central portal; this is a learner-controlled flag, not an automatic QA certification.

''']
actions={'library':'Issue a book, inspect the due date, return it and inspect the sample fine. Download a year/semester material.', 'shop':'Filter a product, add it to the bag, adjust quantity, then submit a fictional checkout. Update shipping status in Manage demo.', 'booking':'Choose a listing and future dates, submit a reservation, then reschedule or cancel from history.', 'transport':'Search a fictional route, select a listing and seat, book, print the receipt and look up its PNR.', 'cases':'Submit the domain form, inspect the reference, then assign a demo staff member and post a status/response in Manage demo.', 'pass':'Apply for a pass, inspect its wallet charge, approve the activity in Manage demo, then look up the reference and renew.', 'vote':'Use DEMO-N1 with a North Ward candidate and on-screen OTP 246810. Vote, try a second vote, and inspect the results.', 'property':'Use the mortgage estimator, save a property, arrange a viewing and add a saved-search record.', 'content':'Open a story or project, read its case study, save it and leave a review. Use the biography, download or map feature.', 'recipe':'Open a recipe, change servings, inspect scaled ingredients, print the recipe and generate a shopping list.', 'electricity':'Calculate 350 domestic units (₹950 before fines), change the due/payment dates, simulate payment and edit rates in Manage demo.', 'tax':'Calculate the prefilled academic example, inspect annual taxable income and tax, then configure the deductions in Manage demo.', 'phone':'Pay a custom portion of the sample bill, inspect the remaining balance and receipt, and save reminder preferences.', 'exam':'Start the three-question practice test, submit answers, inspect feedback and scorecard, then view rankings and the question-bank form.', 'painting':'Rate a painting, inspect positive/neutral/negative counts, reply as admin, then submit a fictional owner display package.'}
for e in es:guide.append(f'## {e["id"]} — {e["title"]}\n\n[Launch](../experiments/{e["folder"]}/index.html) · Printed {e["printed"]} · PDF pages {", ".join(map(str,e["pages"]))}.\n\n{actions[e["mode"]]}\n\nDomain focus: {"; ".join(e["features"])}.\n\n')
Path('docs/experiment-guide.md').write_text(''.join(guide),encoding='utf8')
Path('docs/progress.md').write_text('''# Progress and resumption

Source: 43 pages, 47 distinct entries. Sequential EXP01–EXP47, both duplicate printed numbers preserved. All experiment entry files and source-linked metadata generated. Portal and shared workflow modules implemented. Specialist record schemas cover all domains. Academic limitations are listed per experiment in requirements-matrix.md.

Phase 1: source inventory complete (corrected count 47).
Phase 2: portal/shared utilities implemented.
Phases 3–7: all 47 websites have implemented local workflows; complete PDF parity remains partial as listed in the requirements matrix.
Phase 8: Node calculation/render checks pass; HTTP/file checks recorded in test-report.md. Browser QA blocked by Windows IPC access-denied failures in Chrome and Edge. The browser suite is included for a normal local terminal.
Phase 9: check Git status/log for current local commit. GitHub remote verification/push blocked by network proxy; no force push attempted.
Phase 10: Vercel not deployed. CLI not installed, package downloads blocked, no local Vercel auth. Dashboard instructions in deployment-guide.md.

Resume with browser QA first, then close the explicit parity gaps per experiment; rerun tests after changes. Do not mark every source feature complete based only on successful page rendering. Then push and deploy after verification. No production URL has been verified.
''',encoding='utf8')
print('Generated requirements matrix and 47 demonstration routes')
