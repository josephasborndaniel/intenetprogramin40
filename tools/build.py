"""Generate static entry points and source-linked experiment metadata. No dependencies."""
import json,re,html
from pathlib import Path
rows='''
Library Management System|library|Learning|library|The reading room|Find your next chapter.|📚|Books|The Silent River;Algorithms Illustrated;A Brief History of Stars;Designing the Web|Fiction;Academic;Science;Academic|Search books;Issue and return;Overdue fines;Study materials
Hotel Room Booking|hotel|Travel|booking|The Fern House|A little escape. A better stay.|🛎|Rooms|Garden Single;Courtyard Double;Hillview Deluxe;Heritage Suite|Single;Double;Deluxe;Suite|Date availability;Room reservations;Three-day changes;Room inventory
Bus Ticket Booking|bus|Travel|transport|Miles & More|Good journeys start here.|🚌|Buses|Coastal Volvo;Night Sleeper;City Express;Sunrise Coach|Volvo;Sleeper;AC;Seater|Route search;Seat selection;Ticket printing;Bus management
Train Reservation|train|Travel|transport|Rail & Roam|Take the scenic route.|🚆|Trains|Southern Express;Blue Mountain Rail;Coromandel Express;Valley Passenger|Sleeper;AC;Chair;General|PNR lookup;Class and route;Seat selection;Cancellation refunds
Flight Reservation|flight|Travel|transport|Cloudline|Your next horizon awaits.|✈|Flights|Chennai to Delhi;Chennai to Mumbai;Bengaluru to Kochi;Chennai to Hyderabad|Economy;Business;Economy;Premium|Flight search;Seat inventory;E-tickets;Feedback and reports
Cake Ordering|cake|Shopping|shop|Butter & Bloom|Small moments. Sweeter memories.|🎂|Cakes|Belgian Chocolate;Strawberry Cloud;Vanilla Celebration;Mango Sunshine|Chocolate;Fruit;Birthday;Fruit|Custom messages;Cake cart;Delivery scheduling;Order tracking
Beauty Parlour Appointments|salon|Health|booking|Petal Studio|Make a little time for you.|✂|Services|Signature Haircut;Botanical Facial;Bridal Styling;Classic Manicure|Hair;Skin;Bridal;Nails|Stylist selection;Slot calendar;Rescheduling;Deposit simulation
Hospital Appointment Booking|hospital|Health|booking|MedCare|A simpler way to plan your visit.|✚|Doctors|Dr Ananya Rao;Dr Kavin Shah;Dr Meera Iyer;Dr Dev Menon|General;Cardiology;Dermatology;Orthopaedics|Specialty search;Appointments;Check-in history;Doctor reviews
Electronics Shopping — TechSavvy|techsavvy|Shopping|shop|TechSavvy|Thoughtful tech. Everyday possibilities.|⌘|Products|Nova Smartphone;Atlas Laptop;Echo Headphones;Orbit Tablet|Phones;Laptops;Accessories;Tablets|Catalog filters;Cart and checkout;Wish lists;Admin inventory
Fashion Shopping — StyleHub|stylehub|Shopping|shop|StyleHub|Wear your own story.|✦|Collections|Linen Everyday Shirt;Terracotta Dress;City Sneakers;Canvas Weekender|Men;Women;Footwear;Accessories|Sizes and colours;Style filters;Returns and exchanges;Order history
Real Estate — Home Finder|home-finder|Services|property|Home Finder|Find a place that feels like you.|⌂|Properties|Adyar Garden Apartment;Velachery Family Home;OMR Studio;Anna Nagar Office|Apartment;House;Studio;Commercial|Saved searches;Property viewings;Mortgage calculator;Agent enquiries
Insurance Management — InsureEasy|insureeasy|Finance|cases|InsureEasy|A clearer view of your cover.|☂|Policies|Everyday Health;Drive Protect;Home Essentials;Family Shield|Health;Auto;Home;Life|Policy comparison;Premium payments;Claims;Agent approval
Flowers and Gifts — BlossomGifts|blossomgifts|Shopping|shop|BlossomGifts|Say it beautifully.|❀|Gifts|Peach Rose Bouquet;Celebration Hamper;Orchid Arrangement;Personalised Keepsake|Flowers;Hampers;Flowers;Gifts|Occasion filters;Scheduled delivery;Cart;Inventory management
Second-Hand Marketplace — ReNewMarket|renewmarket|Shopping|shop|ReNewMarket|Good things deserve another chapter.|♻|Listings|Preloved City Bicycle;Oak Study Desk;Vintage Camera;Denim Jacket|Outdoors;Furniture;Electronics;Clothing|Seller listings;Price offers;Logistics status;Category management
Online Toll Payment — EasyToll|easytoll|Finance|pass|EasyToll|Less waiting. More moving.|↗|Toll gates|Coastal Toll Gate;Garden Toll Plaza;Valley Toll Gate;Ring Road Plaza|Car;Bus;Truck;Car|Wallet;Advance tickets;Pass approval;Pass verification
Complaint Management — ComplainEase|complainease|Services|cases|ComplainEase|Your voice. A visible resolution.|☏|Common issues|Streetlight repair;Water supply;Road maintenance;Sanitation request|Utilities;Water;Roads;Sanitation|Submit complaint;Officer assignment;Proof of work;Status tracking
Online Voting — VoteOnline|voteonline|Community|vote|VoteOnline|A voice in our fictional campus.|✓|Candidates|Ananya Rao;Rohan Dev;Meera Shah;Kavin Iyer|North Ward;North Ward;South Ward;South Ward|Fictional voter list;Demo OTP;One vote per voter;Results
Agriculture Marketplace — AgriMart|agrimart|Shopping|shop|AgriMart|Growing better, together.|❧|Supplies|Heritage Tomato Seeds;Organic Compost;Garden Tool Kit;Drip Irrigation Set|Seeds;Fertilizers;Tools;Equipment|Farmer inventory;Wallet;Orders;Shipping status
Veterinary Consultation|veterinary|Health|cases|Kindred Vet|Care starts with a conversation.|♧|Clinics|Government CVH North;Kindred Private Clinic;Government CVH South;Greenfield Vet|Free;Private;Free;Private|Farmer requests;Attachment metadata;Doctor responses;Subscriptions
Vehicle Rental — RentRide|rentride|Travel|booking|RentRide|The right ride for every plan.|🚗|Vehicles|Swift City Hatchback;Terrain SUV;Cargo Mini Truck;Family Sedan|Car;SUV;Truck;Car|Date availability;Vehicle filters;Booking approval;Rental history
Online Job Recruitment|jobs|Services|cases|Next Chapter|Good work starts with a connection.|↗|Vacancies|Frontend Developer;Data Analyst;UI Designer;QA Engineer|Chennai;Bengaluru;Remote;Chennai|Job filters;Saved vacancies;Applications;Director approval
Solid Waste Management|waste|Community|cases|Clean Circle|A cleaner neighbourhood, together.|♻|Collection bins|Adyar Collection Point;Velachery Green Bin;OMR Recycling;Marina Collection Point|Organic;Recyclable;Recyclable;Mixed|Bin management;Driver route;Load updates;Public complaints
Blood Bank Management|blood-bank|Health|cases|LifeLink|A small act. A lasting difference.|♥|Blood inventory|Adyar Sample Bank;North Sample Bank;Central Sample Bank;Coastal Sample Bank|A+;B+;O+;AB+|Fictional donors;Blood group search;Bank inventory;Donation reports
Travel Agency — Wanderlust Travels|wanderlust|Travel|booking|Wanderlust Travels|Collect moments, not miles.|☀|Trips|Kodaikanal Escape;Coorg Coffee Trail;Mysore Heritage;Pondicherry Weekend|Mountains;Nature;Heritage;Coast|Trip search;Accommodation;Food and routes;Booking management
Roadside Breakdown Assistance|roadside|Services|cases|Roadside Buddy|A helping hand, down the road.|⚒|Mechanics|Arun Auto Care;Coastal Motor Works;Greenway Garage;City Wheel Service|Adyar;OMR;Velachery;Anna Nagar|Mechanic search;Business approval;Assistance requests;Feedback
Traffic Police Challan Management|challan|Community|cases|Traffic Desk|Clear records. Safer streets.|⚑|Rules|Helmet violation;Signal violation;Parking violation;Speed violation|Safety;Signals;Parking;Speed|Fictional cases;Proof metadata;Fine receipts;Daily reports
Online Bus Pass|bus-pass|Travel|pass|Campus Commute|Your everyday journey, simplified.|▣|Routes|Adyar to SIMATS;Tambaram to SIMATS;Velachery to SIMATS;Central to SIMATS|Student;Route;Student;Route|Pass applications;Monthly renewal;Wallet;Conductor verification
Artist Portfolio — ArtistryHub|artistryhub|Creative|content|ArtistryHub|The world, through Emily's eyes.|◈|Artworks|Quiet Horizons;Terracotta Morning;Monsoon Study;The Blue Hour|Landscape;Abstract;Study;Portrait|Artwork gallery;Biography;Print store;Newsletter
Event Registration Website|event|Community|booking|Confluence 2026|Ideas meet. Possibilities begin.|✳|Sessions|Building for the Web;Design That Includes;The Future of Learning;Creative Coding Lab|Keynote;Design;Panel;Workshop|Speaker profiles;Event schedule;Venue;Registration
Journal Publication — IJSSE|ijsse|Learning|cases|IJSSE Academic Demo|A space for ideas that move us forward.|¶|Articles|Accessible Campus Interfaces;Solar Microgrids;Learning with Visualisation;Circular Cities|Current issue;Archive;Most viewed;About to print|Manuscripts;Peer review;Editorial decisions;Author resources
Dairy Farm — Ko-Matha|ko-matha|Shopping|shop|Ko-Matha|Fresh from our fictional farm.|❧|Dairy products|Fresh Milk;Farm Curd;Golden Ghee;Sweet Cova;Cultured Butter|Milk;Curd;Ghee;Sweets;Butter|Online orders;Stock reports;Vendor records;Cow maintenance
Laptop Sales and Service — Ram Infotech|ram-infotech|Shopping|shop|Ram Infotech|Better tools. Dependable support.|▱|Laptops|Atlas Pro 14;Nova Student 15;Studio Creator 16;Everyday Air 13|Professional;Student;Creator;Everyday|Laptop store;Service requests;Rental agreements;Stock maintenance
KodaikanalEats / Restaurant and Room Booking|kodaikanaleats|Travel|booking|KodaikanalEats|Good food. Misty views. Stay awhile.|♨|Dining and stays|Pinewood Table;Lakeview Kitchen;Single Hill Room;Double Valley Room;Deluxe Mist Suite|Restaurant;Restaurant;Single room;Double room;Deluxe room|Dining reservations;Room availability;Seasonal stays;Room staff
Tuition Centre — LearnWell|learnwell|Learning|cases|LearnWell|A little guidance. A world of growth.|✎|Subjects|Mathematics;Physics;Computer Science;English|Online;Offline;Online;Offline|Course enrolment;Fees;Announcements;Maintenance requests
Bus Pass Management|bus-pass-management|Travel|pass|Route & Ready|Make the everyday journey easier.|▣|Routes|North Campus Route;South Campus Route;City Loop;Station Connector|Student;Route;Student;Route|Student and route passes;Renewals;QR simulation;Arrival estimate
Online Teaching — EduConnect|educonnect|Learning|cases|EduConnect|Learn something that opens doors.|▤|Courses|Web Foundations;Python Essentials;Visual Design;Data Fundamentals|Technology;Programming;Design;Data|Course enrolment;Assignments;Quizzes;Teacher dashboard
Online Bookstore — BookHaven|bookhaven|Shopping|shop|BookHaven|A good day begins with a good book.|▥|Books|The Quiet Atlas;Practical JavaScript;Wild Garden;Stories of Chennai|Fiction;Academic;Non-fiction;Fiction|Book filters;Cart;Reviews;Book recommendations
MyProfessionalShowcase|professional-showcase|Creative|content|MyProfessionalShowcase|Curious mind. Thoughtful work.|◇|Projects|Accessible Campus Portal;Local Food Finder;Library Analytics;Sustainable Design System|Web;Mobile;Data;Design|Project case studies;Resume download;Career timeline;Contact
Gourmet Haven|gourmet-haven|Creative|booking|Gourmet Haven|An evening worth savouring.|♨|Menu|Roasted Pumpkin Soup;Garden Risotto;Dark Chocolate Delice;Citrus Salad|Appetizers;Main courses;Desserts;Appetizers|Interactive menu;Table reservations;Chef story;Offers and reviews
Online Store|online-store|Shopping|shop|Everyday Objects|Simple things, thoughtfully chosen.|◒|Products|Desk Lamp;Cotton Overshirt;Wireless Speaker;Everyday Tote|Home;Clothing;Electronics;Accessories|Product catalog;Cart quantities;Checkout;Order tracking
Travel Blog|travel-blog|Creative|content|Elsewhere Journal|Stories from the road less hurried.|☀|Stories|A Morning in Kodaikanal;Chennai Through Its Food;Coorg in the Rain;Walking Old Mysore|Kodaikanal;Chennai;Coorg;Mysore|Destination filters;Interactive map;Photo stories;Comments and sharing
Digital Recipe Book|recipe-book|Creative|recipe|The Recipe Notebook|Something wonderful is cooking.|♨|Recipes|Garden Tomato Pasta;Coconut Breakfast Bowl;Lemon Rice;Chocolate Oat Cookies|Italian;Breakfast;Indian;Dessert|Ingredient search;Serving scaler;Meal planner;Shopping list
Electricity Bill Payment|electricity|Finance|electricity|Current & Clear|A brighter way to manage bills.|ϟ|Connections|Domestic Connection;Commercial Connection|Domestic;Commercial|Progressive tariffs;Late fines;Bill payments;Configurable rates
Placement Examination|placement|Learning|exam|Launchpad Assessments|Your next opportunity starts here.|✎|Exams|Web Foundations Assessment;Quantitative Aptitude;Logical Reasoning;Communication Skills|Technical;Aptitude;Reasoning;Language|Scheduled tests;Automatic marking;Rankings;Re-evaluation
Painting Rating and Review|painting-rating|Creative|painting|The Open Gallery|Every perspective adds something.|◈|Paintings|Evening at the Lake;Ochre and Indigo;A Study in Green;City After Rain|Landscape;Abstract;Botanical;Urban|Painting submissions;Display packages;Ratings;Review sentiment
Income Tax Calculation|income-tax|Finance|tax|Tax Notebook|Understand the numbers behind your income.|₹|Examples|Academic PDF tax rules;Configurable deductions|Example;Configuration|PDF slab calculation;Deductions;Admin rules;Summary export
Phone Bill Payment|phone-bill|Finance|phone|Hello Account|Keep your connections simple.|☎|Plans|Everyday Mobile;Family Connect;Home Broadband;Talk More|Mobile;Family;Broadband;Voice|Partial payments;Late fines;Billing periods;Receipt history
'''.strip().splitlines()
starts=[(1,'1.'),(1,'2.'),(2,'3.'),(4,'4.'),(4,'5.'),(5,'6.'),(7,'7.'),(7,'8.'),(8,'9.'),(9,'10.'),(10,'11.'),(11,'12.'),(12,'13.'),(13,'14.'),(13,'15.'),(14,'16.'),(15,'17.'),(16,'18.'),(18,'19.'),(18,'20.'),(19,'21.'),(21,'22.'),(21,'23.'),(22,'24.'),(24,'25.'),(24,'26.'),(25,'27.'),(26,'28.'),(27,'28.'),(28,'30.'),(29,'31.'),(30,'32.'),(31,'33.'),(31,'34.'),(32,'35.'),(33,'36.'),(34,'36.'),(35,'37.'),(36,'38.'),(37,'39.'),(37,'40.'),(38,'41.'),(39,'42.'),(40,'43.'),(41,'44.'),(42,'45.'),(42,'46.')]
# The PDF contains 47 distinct entries: duplicate 28 and 36, with no printed 29.
pages=json.loads(Path('docs/source-pages.json').read_text(encoding='utf8'))
assert len(rows)==47, len(rows)
assert len(starts)==47, len(starts)
alllines=[(p['page'],line) for p in pages for line in p['text'].splitlines()]
positions=[]
cursor=0
for page,prefix in starts:
    pos=next(i for i in range(cursor,len(alllines)) if alllines[i][0]==page and alllines[i][1].startswith(prefix))
    positions.append(pos); cursor=pos+1
experiments=[]
for i,row in enumerate(rows):
    title,slug,category,mode,brand,tagline,icon,label,names,categories,features=row.split('|')
    source=alllines[positions[i]:positions[i+1] if i+1<len(positions) else len(alllines)]
    n=i+1; eid=f'EXP{n:02}'; folder=f'exp{n:02}-{slug}'
    items=[]
    for j,name in enumerate(names.split(';')):
        cat=categories.split(';')[j%len(categories.split(';'))]
        price=([1200,2400,3800,6500][j%4] if mode in ['booking','transport'] else [499,899,1499,2499][j%4])
        if n==1: price=0
        if n==11: price=[5800000,9200000,3400000,12500000][j%4]
        if n==31: price=[60,45,680,220,180][j%5]
        if n in [9,32]: price=[24999,58999,3499,18999][j%4]
        if n==39: price=[260,580,320,280][j%4]
        items.append(dict(id=f'item-{j+1}',name=name,category=cat,price=price,stock=8+j,location=['Adyar','Velachery','OMR','Anna Nagar'][j%4],description=f'{name} — a fictional {cat.lower()} listing for the {brand} academic demonstration.',rating=round(4.3+j*.1,1)))
    e=dict(id=eid,number=n,title=title,slug=slug,folder=folder,category=category,mode=mode,brand=brand,tagline=tagline,icon=icon,label=label,features=features.split(';'),items=items,printed=starts[i][1][:-1],page=source[0][0],pages=sorted(set(p for p,_ in source)),source='\n'.join(t for _,t in source),hue=(155+i*37)%360)
    experiments.append(e)
    target=Path('experiments')/folder;target.mkdir(parents=True,exist_ok=True)
    (target/'index.html').write_text(f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{html.escape(title)} — fictional academic demonstration"><title>{html.escape(brand)} · {eid}</title><link rel="icon" href="../../assets/mark.svg" type="image/svg+xml"><link rel="stylesheet" href="style.css"></head><body><a class="skip" href="#main">Skip to content</a><div id="app"><p>Loading {html.escape(brand)}…</p></div><noscript>This experiment requires JavaScript for local demo interactions.</noscript><script type="module" src="script.js"></script></body></html>',encoding='utf8')
    (target/'style.css').write_text(f'@import url("../../styles/experiment.css");\n:root{{--accent:hsl({e["hue"]} 48% 30%);--tint:hsl({e["hue"]} 45% 94%);--warm:hsl({(e["hue"]+45)%360} 60% 84%);}}\n'+ ('h1,.brand{font-family:Georgia,serif} .hero{border-radius:2px} ' if mode in ['content','recipe','painting','booking'] else '')+ (' .catalog{grid-template-columns:repeat(auto-fit,minmax(230px,1fr))} ' if mode=='shop' else ''),encoding='utf8')
    (target/'script.js').write_text('import { mount } from "../../scripts/experiment.js";\nconst experiment = '+json.dumps(e,ensure_ascii=False,indent=2)+';\nmount(experiment);\n',encoding='utf8')
Path('scripts').mkdir(exist_ok=True)
Path('scripts/catalog.js').write_text('export const experiments = '+json.dumps([{k:v for k,v in e.items() if k not in ['source','items']} for e in experiments],ensure_ascii=False,indent=2)+';\n',encoding='utf8')
Path('docs/experiments.json').write_text(json.dumps(experiments,ensure_ascii=False,indent=2),encoding='utf8')
print('Generated',len(experiments),'independent entry points')
