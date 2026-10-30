# Requirements matrix

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
| EXP01 | [Library Management System](../experiments/exp01-library/index.html) | 1 | 1 | `library` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP02 | [Hotel Room Booking](../experiments/exp02-hotel/index.html) | 2 | 1, 2 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP03 | [Bus Ticket Booking](../experiments/exp03-bus/index.html) | 3 | 2, 3 | `transport` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP04 | [Train Reservation](../experiments/exp04-train/index.html) | 4 | 4 | `transport` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP05 | [Flight Reservation](../experiments/exp05-flight/index.html) | 5 | 4, 5 | `transport` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP06 | [Cake Ordering](../experiments/exp06-cake/index.html) | 6 | 5, 6 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP07 | [Beauty Parlour Appointments](../experiments/exp07-salon/index.html) | 7 | 7 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP08 | [Hospital Appointment Booking](../experiments/exp08-hospital/index.html) | 8 | 7, 8 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP09 | [Electronics Shopping — TechSavvy](../experiments/exp09-techsavvy/index.html) | 9 | 8, 9 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP10 | [Fashion Shopping — StyleHub](../experiments/exp10-stylehub/index.html) | 10 | 9, 10 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP11 | [Real Estate — Home Finder](../experiments/exp11-home-finder/index.html) | 11 | 10 | `property` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP12 | [Insurance Management — InsureEasy](../experiments/exp12-insureeasy/index.html) | 12 | 11 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP13 | [Flowers and Gifts — BlossomGifts](../experiments/exp13-blossomgifts/index.html) | 13 | 12 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP14 | [Second-Hand Marketplace — ReNewMarket](../experiments/exp14-renewmarket/index.html) | 14 | 13 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP15 | [Online Toll Payment — EasyToll](../experiments/exp15-easytoll/index.html) | 15 | 13, 14 | `pass` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP16 | [Complaint Management — ComplainEase](../experiments/exp16-complainease/index.html) | 16 | 14, 15 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP17 | [Online Voting — VoteOnline](../experiments/exp17-voteonline/index.html) | 17 | 15, 16 | `vote` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP18 | [Agriculture Marketplace — AgriMart](../experiments/exp18-agrimart/index.html) | 18 | 16, 17 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP19 | [Veterinary Consultation](../experiments/exp19-veterinary/index.html) | 19 | 18 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP20 | [Vehicle Rental — RentRide](../experiments/exp20-rentride/index.html) | 20 | 18, 19 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP21 | [Online Job Recruitment](../experiments/exp21-jobs/index.html) | 21 | 19, 20 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP22 | [Solid Waste Management](../experiments/exp22-waste/index.html) | 22 | 21 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP23 | [Blood Bank Management](../experiments/exp23-blood-bank/index.html) | 23 | 21, 22 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP24 | [Travel Agency — Wanderlust Travels](../experiments/exp24-wanderlust/index.html) | 24 | 22, 23 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP25 | [Roadside Breakdown Assistance](../experiments/exp25-roadside/index.html) | 25 | 24 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP26 | [Traffic Police Challan Management](../experiments/exp26-challan/index.html) | 26 | 24, 25 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP27 | [Online Bus Pass](../experiments/exp27-bus-pass/index.html) | 27 | 25, 26 | `pass` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP28 | [Artist Portfolio — ArtistryHub](../experiments/exp28-artistryhub/index.html) | 28 | 26, 27 | `content` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP29 | [Event Registration Website](../experiments/exp29-event/index.html) | 28 | 27 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP30 | [Journal Publication — IJSSE](../experiments/exp30-ijsse/index.html) | 30 | 28, 29 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP31 | [Dairy Farm — Ko-Matha](../experiments/exp31-ko-matha/index.html) | 31 | 29 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP32 | [Laptop Sales and Service — Ram Infotech](../experiments/exp32-ram-infotech/index.html) | 32 | 30 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP33 | [KodaikanalEats / Restaurant and Room Booking](../experiments/exp33-kodaikanaleats/index.html) | 33 | 31 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP34 | [Tuition Centre — LearnWell](../experiments/exp34-learnwell/index.html) | 34 | 31, 32 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP35 | [Bus Pass Management](../experiments/exp35-bus-pass-management/index.html) | 35 | 32, 33 | `pass` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP36 | [Online Teaching — EduConnect](../experiments/exp36-educonnect/index.html) | 36 | 33 | `cases` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP37 | [Online Bookstore — BookHaven](../experiments/exp37-bookhaven/index.html) | 36 | 34 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP38 | [MyProfessionalShowcase](../experiments/exp38-professional-showcase/index.html) | 37 | 35 | `content` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP39 | [Gourmet Haven](../experiments/exp39-gourmet-haven/index.html) | 38 | 36 | `booking` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP40 | [Online Store](../experiments/exp40-online-store/index.html) | 39 | 37 | `shop` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP41 | [Travel Blog](../experiments/exp41-travel-blog/index.html) | 40 | 37, 38 | `content` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP42 | [Digital Recipe Book](../experiments/exp42-recipe-book/index.html) | 41 | 38, 39 | `recipe` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP43 | [Electricity Bill Payment](../experiments/exp43-electricity/index.html) | 42 | 39, 40 | `electricity` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP44 | [Placement Examination](../experiments/exp44-placement/index.html) | 43 | 40 | `exam` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP45 | [Painting Rating and Review](../experiments/exp45-painting-rating/index.html) | 44 | 41 | `painting` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP46 | [Income Tax Calculation](../experiments/exp46-income-tax/index.html) | 45 | 42 | `tax` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |
| EXP47 | [Phone Bill Payment](../experiments/exp47-phone-bill/index.html) | 46 | 42, 43 | `phone` + domain forms | Implemented demo; partial parity | Node PASS; browser BLOCKED |

## Per-experiment functionality and open work

### EXP01 — Library Management System

Printed 1, PDF pages 1. Entry: `experiments/exp01-library/script.js`.

Implemented demo focus: Search books; Issue and return; Overdue fines; Study materials. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Materials are downloadable text, not arbitrary binary repositories. Fine rate is an example ₹5/day. Member records and profiles are demonstrations.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP02 — Hotel Room Booking

Printed 2, PDF pages 1, 2. Entry: `experiments/exp02-hotel/script.js`.

Implemented demo focus: Date availability; Room reservations; Three-day changes; Room inventory. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Local availability only. Static information is editable as resource records; the shared About layout is fixed.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP03 — Bus Ticket Booking

Printed 3, PDF pages 2, 3. Entry: `experiments/exp03-bus/script.js`.

Implemented demo focus: Route search; Seat selection; Ticket printing; Bus management. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Sample route search is illustrative rather than an exhaustive timetable. Photo uploads are metadata only.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP04 — Train Reservation

Printed 4, PDF pages 4. Entry: `experiments/exp04-train/script.js`.

Implemented demo focus: PNR lookup; Class and route; Seat selection; Cancellation refunds. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** PNR is local. Confirmed bookings are demonstrated; automatic RAC/wait-list allocation is not implemented. Refunds use illustrative 80%/50% rules, not a full rule engine.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP05 — Flight Reservation

Printed 5, PDF pages 4, 5. Entry: `experiments/exp05-flight/script.js`.

Implemented demo focus: Flight search; Seat inventory; E-tickets; Feedback and reports. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** No airline distribution-system connection or real inventory. Timetable is sample data.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP06 — Cake Ordering

Printed 6, PDF pages 5, 6. Entry: `experiments/exp06-cake/script.js`.

Implemented demo focus: Custom messages; Cake cart; Delivery scheduling; Order tracking. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Customization is attached to the complete order rather than individual cart lines. Uploads are metadata only.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP07 — Beauty Parlour Appointments

Printed 7, PDF pages 7. Entry: `experiments/exp07-salon/script.js`.

Implemented demo focus: Stylist selection; Slot calendar; Rescheduling; Deposit simulation. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Blocked-hour records work by date/time. Unpaid-reservation cancellation is a manual action, not a background job. Payment gateways are simulated.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP08 — Hospital Appointment Booking

Printed 8, PDF pages 7, 8. Entry: `experiments/exp08-hospital/script.js`.

Implemented demo focus: Specialty search; Appointments; Check-in history; Doctor reviews. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Check-ins and hospitals are sample records. Maps use an external map link rather than a live geolocation service. No clinical or regulatory compliance claims.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP09 — Electronics Shopping — TechSavvy

Printed 9, PDF pages 8, 9. Entry: `experiments/exp09-techsavvy/script.js`.

Implemented demo focus: Catalog filters; Cart and checkout; Wish lists; Admin inventory. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Recommendations are a static sample selection. Promotion records are documented but automatic coupon pricing is not implemented.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP10 — Fashion Shopping — StyleHub

Printed 10, PDF pages 9, 10. Entry: `experiments/exp10-stylehub/script.js`.

Implemented demo focus: Sizes and colours; Style filters; Returns and exchanges; Order history. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Sizes/colours are order-level. Returns/exchanges are specialist records; no automatic reverse-logistics workflow.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP11 — Real Estate — Home Finder

Printed 11, PDF pages 10. Entry: `experiments/exp11-home-finder/script.js`.

Implemented demo focus: Saved searches; Property viewings; Mortgage calculator; Agent enquiries. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Saved-search records, sample map and mortgage estimate are available. Actual virtual tours and valuation models are not implemented.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP12 — Insurance Management — InsureEasy

Printed 12, PDF pages 11. Entry: `experiments/exp12-insureeasy/script.js`.

Implemented demo focus: Policy comparison; Premium payments; Claims; Agent approval. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Policies, agents and claims are local records. Side-by-side automated policy comparison and commission settlement are not implemented.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP13 — Flowers and Gifts — BlossomGifts

Printed 13, PDF pages 12. Entry: `experiments/exp13-blossomgifts/script.js`.

Implemented demo focus: Occasion filters; Scheduled delivery; Cart; Inventory management. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Delivery dates are local. Loyalty discount pricing is not automated.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP14 — Second-Hand Marketplace — ReNewMarket

Printed 14, PDF pages 13. Entry: `experiments/exp14-renewmarket/script.js`.

Implemented demo focus: Seller listings; Price offers; Logistics status; Category management. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Price offers and categories are editable records; negotiation is not a live chat. Logistics uses activity status updates.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP15 — Online Toll Payment — EasyToll

Printed 15, PDF pages 13, 14. Entry: `experiments/exp15-easytoll/script.js`.

Implemented demo focus: Wallet; Advance tickets; Pass approval; Pass verification. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Wallet/pass/reference checks are functional locally. Actual QR generation and scanning are represented by explicitly simulated reference verification.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP16 — Complaint Management — ComplainEase

Printed 16, PDF pages 14, 15. Entry: `experiments/exp16-complainease/script.js`.

Implemented demo focus: Submit complaint; Officer assignment; Proof of work; Status tracking. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Attachments and proof store metadata only. No GPS coordinates or real officer credential issuance. Feature-hiding controls are not implemented.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP17 — Online Voting — VoteOnline

Printed 17, PDF pages 15, 16. Entry: `experiments/exp17-voteonline/script.js`.

Implemented demo focus: Fictional voter list; Demo OTP; One vote per voter; Results. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** One-vote checks apply only to local browser state. OTP is displayed. No encryption/election-security claim. Imported voter roll works; generic voter specialist records are not automatically added to the voting roll.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP18 — Agriculture Marketplace — AgriMart

Printed 18, PDF pages 16, 17. Entry: `experiments/exp18-agrimart/script.js`.

Implemented demo focus: Farmer inventory; Wallet; Orders; Shipping status. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Farmer inventory and shipping are local; no SMS OTP or external logistics. Purchases do not yet debit the sample wallet.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP19 — Veterinary Consultation

Printed 19, PDF pages 18. Entry: `experiments/exp19-veterinary/script.js`.

Implemented demo focus: Farmer requests; Attachment metadata; Doctor responses; Subscriptions. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Consultations, subscriptions, cure education and attachments are non-clinical records. Disease prevalence analytics and actual multimedia uploads are not implemented.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP20 — Vehicle Rental — RentRide

Printed 20, PDF pages 18, 19. Entry: `experiments/exp20-rentride/script.js`.

Implemented demo focus: Date availability; Vehicle filters; Booking approval; Rental history. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Booking and approval status are local. Vehicle check-ins are specialist records, not real fleet telemetry.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP21 — Online Job Recruitment

Printed 21, PDF pages 19, 20. Entry: `experiments/exp21-jobs/script.js`.

Implemented demo focus: Job filters; Saved vacancies; Applications; Director approval. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Applications, privacy choice and directors are local records. Company-specific access restrictions are illustrative only.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP22 — Solid Waste Management

Printed 22, PDF pages 21. Entry: `experiments/exp22-waste/script.js`.

Implemented demo focus: Bin management; Driver route; Load updates; Public complaints. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Sample route is a deterministic illustrative route, not an optimized routing algorithm. No bin sensor data or real Google Maps routing.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP23 — Blood Bank Management

Printed 23, PDF pages 21, 22. Entry: `experiments/exp23-blood-bank/script.js`.

Implemented demo focus: Fictional donors; Blood group search; Bank inventory; Donation reports. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Donor/stock records are fictional. No compatibility/clinical decisions or national donor integration.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP24 — Travel Agency — Wanderlust Travels

Printed 24, PDF pages 22, 23. Entry: `experiments/exp24-wanderlust/script.js`.

Implemented demo focus: Trip search; Accommodation; Food and routes; Booking management. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Packages, food and route guides are local. No real travel supplier integration.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP25 — Roadside Breakdown Assistance

Printed 25, PDF pages 24. Entry: `experiments/exp25-roadside/script.js`.

Implemented demo focus: Mechanic search; Business approval; Assistance requests; Feedback. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Mechanic approvals are local records. No actual licence validation, dispatch or device geolocation.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP26 — Traffic Police Challan Management

Printed 26, PDF pages 24, 25. Entry: `experiments/exp26-challan/script.js`.

Implemented demo focus: Fictional cases; Proof metadata; Fine receipts; Daily reports. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Fictional cases and metadata only. No real FIR, police system or government identifiers. Fine enquiries do not perform an actual payment.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP27 — Online Bus Pass

Printed 27, PDF pages 25, 26. Entry: `experiments/exp27-bus-pass/script.js`.

Implemented demo focus: Pass applications; Monthly renewal; Wallet; Conductor verification. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** QR scanning is explicitly simulated by reference lookup. Arrival information is a manually maintained record, not live tracking.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP28 — Artist Portfolio — ArtistryHub

Printed 28, PDF pages 26, 27. Entry: `experiments/exp28-artistryhub/script.js`.

Implemented demo focus: Artwork gallery; Biography; Print store; Newsletter. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Local vector illustrations replace actual artist photographs/media. Print orders, biography, catalogue and news work locally; no real social feed.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP29 — Event Registration Website

Printed 28, PDF pages 27. Entry: `experiments/exp29-event/script.js`.

Implemented demo focus: Speaker profiles; Event schedule; Venue; Registration. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Fictional speakers/venue. Registrations have local references and printable receipts.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP30 — Journal Publication — IJSSE

Printed 30, PDF pages 28, 29. Entry: `experiments/exp30-ijsse/script.js`.

Implemented demo focus: Manuscripts; Peer review; Editorial decisions; Author resources. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** No verified Scopus indexing. Article/copyright templates are plain text. Reviewer assignments and peer reviews are specialist records; editorial routing is manual.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP31 — Dairy Farm — Ko-Matha

Printed 31, PDF pages 29. Entry: `experiments/exp31-ko-matha/script.js`.

Implemented demo focus: Online orders; Stock reports; Vendor records; Cow maintenance. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Stock reports sum manually entered entries. Sales do not automatically create stock-report entries. No A1 milk health-benefit claim.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP32 — Laptop Sales and Service — Ram Infotech

Printed 32, PDF pages 30. Entry: `experiments/exp32-ram-infotech/script.js`.

Implemented demo focus: Laptop store; Service requests; Rental agreements; Stock maintenance. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Repairs and rental agreements are editable specialist records. Contract billing and service scheduling are not automatically linked to inventory.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP33 — KodaikanalEats / Restaurant and Room Booking

Printed 33, PDF pages 31. Entry: `experiments/exp33-kodaikanaleats/script.js`.

Implemented demo focus: Dining reservations; Room availability; Seasonal stays; Room staff. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Both restaurant and room listings are preserved. Seasonal rate records and room-staff records are maintained, but seasonal multipliers are not yet applied automatically.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP34 — Tuition Centre — LearnWell

Printed 34, PDF pages 31, 32. Entry: `experiments/exp34-learnwell/script.js`.

Implemented demo focus: Course enrolment; Fees; Announcements; Maintenance requests. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Fees, announcements, maintenance, teacher records and course requests are local. Monthly/yearly reporting uses export rather than dedicated fee analytics.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP35 — Bus Pass Management

Printed 35, PDF pages 32, 33. Entry: `experiments/exp35-bus-pass-management/script.js`.

Implemented demo focus: Student and route passes; Renewals; QR simulation; Arrival estimate. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** A separate state namespace and route set from EXP27. QR verification is simulated. ETA is manually maintained.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP36 — Online Teaching — EduConnect

Printed 36, PDF pages 33. Entry: `experiments/exp36-educonnect/script.js`.

Implemented demo focus: Course enrolment; Assignments; Quizzes; Teacher dashboard. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Live classes are explicitly simulated. Downloadable notes, quizzes, timetable, assignments and forum records work locally; no video conferencing or prerecorded video asset.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP37 — Online Bookstore — BookHaven

Printed 36, PDF pages 34. Entry: `experiments/exp37-bookhaven/script.js`.

Implemented demo focus: Book filters; Cart; Reviews; Book recommendations. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Book catalog/cart/blog are functional. No automatic bestseller carousel or multi-attribute author/date filtering.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP38 — MyProfessionalShowcase

Printed 37, PDF pages 35. Entry: `experiments/exp38-professional-showcase/script.js`.

Implemented demo focus: Project case studies; Resume download; Career timeline; Contact. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Sample resume is downloadable plain text. Project case studies are local detail dialogs; no external live project URLs or real professional social accounts.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP39 — Gourmet Haven

Printed 38, PDF pages 36. Entry: `experiments/exp39-gourmet-haven/script.js`.

Implemented demo focus: Interactive menu; Table reservations; Chef story; Offers and reviews. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Local illustrations and fictional menu. External map link rather than an embedded Google Maps widget. No rotating photographic carousel.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP40 — Online Store

Printed 39, PDF pages 37. Entry: `experiments/exp40-online-store/script.js`.

Implemented demo focus: Product catalog; Cart quantities; Checkout; Order tracking. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Local product/cart/order journey. Sizes and colours are not individually stocked variants. No real payment or email processing.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP41 — Travel Blog

Printed 40, PDF pages 37, 38. Entry: `experiments/exp41-travel-blog/script.js`.

Implemented demo focus: Destination filters; Interactive map; Photo stories; Comments and sharing. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Illustrative clickable destination map, stories and comments. Original vector illustration galleries; no actual travel photography slideshow or embedded video.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP42 — Digital Recipe Book

Printed 41, PDF pages 38, 39. Entry: `experiments/exp42-recipe-book/script.js`.

Implemented demo focus: Ingredient search; Serving scaler; Meal planner; Shopping list. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Four detailed recipes, serving scaling and base shopping list. Meal plan and community recipes are records; custom recipes are not yet rendered by the cooking-detail engine. Advanced dietary/time filters are not implemented.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP43 — Electricity Bill Payment

Printed 42, PDF pages 39, 40. Entry: `experiments/exp43-electricity/script.js`.

Implemented demo focus: Progressive tariffs; Late fines; Bill payments; Configurable rates. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Progressive PDF tariffs configurable locally. Billing periods are records; no unattended two-month bill generation or reminders.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP44 — Placement Examination

Printed 43, PDF pages 40. Entry: `experiments/exp44-placement/script.js`.

Implemented demo focus: Scheduled tests; Automatic marking; Rankings; Re-evaluation. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Practice questions, marking, feedback and ranking work. Candidate blocked status is checked. Schedule entries are not enforced by the practice-start control; no secure exam access or published-results gate.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP45 — Painting Rating and Review

Printed 44, PDF pages 41. Entry: `experiments/exp45-painting-rating/script.js`.

Implemented demo focus: Painting submissions; Display packages; Ratings; Review sentiment. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Ratings, explicit star-band sentiment and package payment simulation work. Uploaded painting contents are not stored or displayed; filenames only. Scheduling is manual.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP46 — Income Tax Calculation

Printed 45, PDF pages 42. Entry: `experiments/exp46-income-tax/script.js`.

Implemented demo focus: PDF slab calculation; Deductions; Admin rules; Summary export. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Dated PDF example rules only. Configurable deductions/threshold; percentages and slab boundaries are fixed to the PDF. Custom inputs have simplified income/deduction handling.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

### EXP47 — Phone Bill Payment

Printed 46, PDF pages 42, 43. Entry: `experiments/exp47-phone-bill/script.js`.

Implemented demo focus: Partial payments; Late fines; Billing periods; Receipt history. Shared catalog, account, CRUD, review, contact, export, print and reset interfaces are included.

**Partial / limitations:** Partial payments and late fine allocation are local. Period edits do not automatically issue a new balance. Reminders/autopay are saved preferences without background execution.

**Tests:** Node view rendering PASS; browser workflow tests BLOCKED. Full source parity remains open.

## Full source-line traceability

Every extracted line is included below; line wrapping may divide one requirement across rows. Mappings identify the code area, not a verified assertion that every clause is fully implemented. Consult the explicit limitations above.

### EXP01 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP01-L001 | 1.A local library needs a website to streamline operations and enhance user  | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L002 | experience. The site will include a catalog for searching and viewing books, user  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L003 | accounts for borrowing and managing books, and an admin dashboard for  | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L004 | managing inventory and user data. Essential features include a search function,  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L005 | book details page, user login system, and contact form,Thesystem helps both  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L006 | students and library managers to keep constant track of all the books available in  | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L007 | the library. It allows both the admin and the student to search for the desired book.  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L008 | It becomes necessary for colleges to keep a continuous check on the books issued  | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L009 | and returned and even calculate fines. | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L010 | Librarian Admin: | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L011 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L012 | Add Book | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L013 | Update/DeleteBook | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L014 | IssueBookforstudent | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L015 | ReturnBook Status | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L016 | MakeFine | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L017 | Updatematerial(year,semesterwise ) | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L018 | Viewmaterial | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L019 | User | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L020 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L021 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L022 | SearchBook | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L023 | MyBorrowHistoryBook | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L024 | oIssueDate,ExpDate | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP01-L025 | CheckFine | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L026 | Searchmaterial(year,semesterwise) | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L027 | Downloadmaterial | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP01-L028 | Myprofile | experiment.js library workflow; domains.js library resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP02 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP02-L001 | 2.The online hotel room booking website allows users to search for hotels based on destination,  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP02-L002 | dates, and number of guests, offering detailed listings with room options, prices, amenities, and  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP02-L003 | reviews. Users can create accounts, log in, and manage their bookings through a user-friendly  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP02-L004 | dashboard. The booking process includes checking room availability, filling out a booking form,  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP02-L005 | and completing secure payments via an integrated payment gateway. Post-booking, users  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP02-L006 | receive confirmation emails and can leave reviews and ratings. Admins manage hotel listings,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP02-L007 | room availability, and user accounts through a dedicated admin panel. The website is fully  | experiment.js booking workflow; domains.js hotel resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP02-L008 | responsive, ensuring seamless access on all devices. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP02-L009 | Functionalities: | experiment.js booking workflow; domains.js hotel resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP02-L010 | Users. | experiment.js booking workflow; domains.js hotel resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP02-L011 | 1.Userscanregister at thehotel andthentheycanviewormodifytheir profile. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP02-L012 | 2.Userscanbook aroomonany specificdate. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |

### EXP03 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP03-L001 | 3.Userscan viewall their bookinghistory atthehotel. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L002 | 4.Userscanchangethebookingat anytime3 daysbeforethearrivaldate. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L003 | 5.Userscancancelthe bookingatany time3daysbeforethe arrivaldate. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L004 | 6.Userscancheck theroomavailability atthehotel beforetheybook aroom. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L005 | Administrator | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L006 | 7.Administratorscanchangethe quantityandpriceofallfour typesofrooms. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L007 | 8.Administratorscan changeany specificbooking details. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L008 | 9.Administratorscan cancel anyspecificbooking. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L009 | 10.Administratorscanmodifythedetailsofstatic pagesincludingroominformation,aboutus | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L010 | information, contact us information, customer service Q&A details, local travel and shipping | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L011 | guide,and privacy policyafter login. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L012 | 11.Itshouldalsocontainabasicroomtypeintroduction,contactinformation,customerservice | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L013 | Q&A,local traveland shipping guide, andaprivacypolicy | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L014 | 3.The online bus ticket booking system enables users to search for buses by route, date, and time,  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L015 | and view available seats. Users can create an account, log in, and manage their bookings  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L016 | through a personal dashboard. The booking process includes selecting seats, filling out  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L017 | passenger details, and making secure payments via an integrated payment gateway. Admins  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L018 | can manage bus schedules, seat availability, and user accounts through an admin panel. Users  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L019 | receive booking confirmation emails and can view their booking history. The website is mobile- | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L020 | responsive, ensuring easy access on all devices. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L021 | Admin | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L022 | Inthissystem,theadmincanmaintainalltheBusinformationandmaintainBuscategory, | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L023 | commentsetc. | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L024 | Inthissystem,theadmincanmaintaintheregisteredusers,managenews,andtheadmincangenerate | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L025 | reports and managethe wholesystem. | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L026 | Login: | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L027 | LoginModuleincludesvariousutilitieslikeUserAuthentication,Change PasswordandForgot | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L028 | Password. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L029 | Registration: | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L030 | This website providessomefacilities users canbeRegistered in thiswebsite.user canusethisfacility | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L031 | so user can make aregistration | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L032 | . | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L033 | BooktheTicket: | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L034 | Inthismodule,theadmincanaddanewbuscategoryusingthismodule.BusCategorycontains | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L035 | likeVolvo, Slipper coach, coachetc. | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L036 | UpdateBusInformation: | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L037 | Inthismodule,theadmincanaddorUpdateBususing thismodule.Itcontainsinformation | experiment.js transport workflow; domains.js bus resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP03-L038 | abouttheBustype, photo, description,Locationofthetour,AvailableSeats inBus etc. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L039 | CanceltheBookingTicket: | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L040 | InthisModule,theUser cancancelthebooking Ticket. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L041 | Comments: | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L042 | InthisModule,Users canPostCommentson aparticularBus. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP03-L043 | ReportGeneration: | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP03-L044 | Thismodule is usedto generateareport. | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP04 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP04-L001 | 4.The online train reservation system allows users to search for trains by route, date, and time,  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L002 | and view available seats and classes. Users can register, log in, and manage their reservations  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L003 | through a personal dashboard. The booking process involves selecting seats, entering passenger  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L004 | details, and making secure payments via an integrated payment gateway. Admins can manage  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP04-L005 | train schedules, seat availability, and user accounts through a comprehensive admin panel.  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L006 | Users receive booking confirmation emails andcan view their booking history and print tickets  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP04-L007 | from their dashboard. The website features real-time seat availability updates and is fully  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP04-L008 | responsive for seamless use on all devices. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L009 | TheReservationsystemshouldcontainthefollowingfeatures: | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L010 | 1.If a passenger wants to reserve ticket(s), firstly, he/she has to log in to the Railway | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L011 | system with valid credentials. Then, the passenger has to provide his/her detailswith  | experiment.js transport workflow; domains.js train resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP04-L012 | the date of the journey, names of the passengers and their details, originstation | experiment.js transport workflow; domains.js train resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP04-L013 | details,destinationstationdetails,andtheclasstypeoftherequiredticket(s). | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L014 | 2.The Railway Reservation System will provide the available Train-list, and Seat- | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L015 | availability,via-details. | experiment.js transport workflow; domains.js train resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP04-L016 | 3.To book a ticket passengers can pay through online/offline mode. After successful | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP04-L017 | payment of the ticket fare the System will generate the ticket and PNR no. will be | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L018 | given to the passenger. The System also keeps the payment details and sends them | experiment.js transport workflow; domains.js train resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP04-L019 | tothesystemAdmin. | experiment.js transport workflow; domains.js train resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP04-L020 | 4.The Passenger can check PNR status (confirmed, RAC, waiting list) by enteringthe | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP04-L021 | PNRno.intotheReservationsystem. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP05 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP05-L001 | 5.The Reservation system should store all train details, fare details (by zone, class, | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L002 | and date wise), PNR no, date of trains, etc. This maintenance should be controlled | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L003 | bytheAdmin. | experiment.js transport workflow; domains.js flight resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP05-L004 | 6.The System also has refund rules which have a date of reservation, ticket fare, and | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L005 | refundable percentage. The passenger can simply cancel the ticket(s) by entering | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L006 | the PNR no and a cancel ticket request. After cancellation, the admin will pass the | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L007 | refundable amount to the System and the System will give the refundable amount | experiment.js transport workflow; domains.js flight resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP05-L008 | tothepassenger. | experiment.js transport workflow; domains.js flight resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP05-L009 | 5.The online flight reservation system enables users to search for flights by  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L010 | destination, date, and class, displaying available options with real-time seat availability.  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP05-L011 | Users can register, log in, and manage their reservations via a personal dashboard. The | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L012 | booking process includes selecting flights, choosing seats, entering passenger details, and  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L013 | making secure payments through an integrated payment gateway. Admins can manage  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP05-L014 | flight schedules, seat inventory, and user accounts using an advanced admin panel. Users  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L015 | receive booking confirmation emails with e-tickets and can view their booking history and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP05-L016 | travel itineraries. The website is fully responsive, ensuring an optimal experience on all  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L017 | devices.The airline reservation system is a web-based system that helps in consolidating  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L018 | flight data -flight schedules, seat availability, flight fares and reservations from all  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L019 | airlines with the help of global distribution systems and provides real-time inventory and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP05-L020 | rates for customers and travel agents to book flight tickets online. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L021 | AdministratorUserLoginPage | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L022 | ForgotPasswordPage | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L023 | SearchFlightPage | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L024 | BookTicketPage | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L025 | TicketPaymentPage | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L026 | MyTicketPage | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L027 | CancelTicketPage | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L028 | CustomerFeedback | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L029 | AdminReport | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L030 | Search FlightPage | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L031 | ViewBooking Status Page | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP05-L032 | PrintTicketPage | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP06 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP06-L001 | 6.The online cake ordering system allows users to browse a variety of cakes by  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L002 | category, flavor, and occasion, complete with detailed descriptions and images. Users can  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP06-L003 | register, log in, and manage their orders through a personal dashboard. The ordering  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L004 | process includes selecting a cake, customizing options like size and message, entering  | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L005 | delivery details, and making secure payments via an integrated payment gateway. Admins  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP06-L006 | can manage cake inventory, track orders, and handle user accounts through an admin  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L007 | panel. Users receive order confirmation emails and can track delivery status. The website  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP06-L008 | is fully responsive, providing a seamless shopping experience on all devices.Buya Cake  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L009 | is a portal which allows admin in developing counters to advertise and sell their cake. This  | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L010 | would permit rural communities to make their wares available to the rest of the world.  | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L011 | Theproposed system is to develop the website for cake store. User can buy the nearby  | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L012 | cake available in app. An E Com App is a portal which allows admin in developing  | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L013 | productsto promote and sell their goods. This would permit rural communities to make  | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L014 | their wares available to the rest of the world. | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L015 | Student | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L016 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L017 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L018 | SearchCake | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L019 | Filter | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L020 | Category | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L021 | Subcategory | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L022 | PriceRange | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L023 | ViewCakelist | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L024 | Viewcakedescription | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L025 | AddtoCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L026 | Placeorder | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L027 | AddShippingAddress | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L028 | UpdateShippingAddress | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L029 | MyOrder | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L030 | ViewShippingStatus | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L031 | Admin | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L032 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L033 | ManageProducts | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L034 | PostCakedetails | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L035 | Uploadimages | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L036 | Product | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L037 | Description | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP06-L038 | ManageOrders | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L039 | UpdateorderStatus | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP06-L040 | ShippingLocation | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP06-L041 | Logout | experiment.js shop workflow; domains.js cake resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP07 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP07-L001 | 7.The online beauty parlour appointment booking system allows users to browse  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L002 | available services, view stylist profiles, and check appointment slots in real-time. Users  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP07-L003 | can register, log in, and manage their appointments through a personal dashboard.  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L004 | The booking process includes selecting services, choosing a stylist, selecting a date and  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L005 | time, and making secure payments via an integrated payment gateway. Admins can  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP07-L006 | manage service offerings, stylist schedules, and user accounts through a comprehensive  | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L007 | admin panel. Users receive appointment confirmation emails and reminders, with the  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP07-L008 | option to reschedule or cancel appointments through their dashboard. The website is  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L009 | fully responsive, ensuring an optimal experience on all devices. Thiswebsite helps  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L010 | customers to search for any beauty parlour and book appointments as they preferable  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L011 | date and time. | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L012 | Havereservationscalendar | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L013 | ➢Create,edit,and cancelreservations | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L014 | ➢Lockoutunavailablehours | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L015 | ➢Get the crucial information for each date on the calendar | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L016 | Customers’personal account page | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L017 | ➢Upcomingreservations | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L018 | ➢Reservationshistory | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L019 | ➢Personaldata | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L020 | Salonmanagerandstaffmemberinordertocontrolandmanagereservations. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L021 | ➢Upcomingreservations | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L022 | ➢Reservationscalendar | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L023 | ➢Addreservation | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L024 | ➢Editreservations | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L025 | ➢SendanSMSor calltothecustomer | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP07-L026 | ➢customersleave feedbackabouttheir experiences andlearnfromtheirsuggestions. | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L027 | Accept online payments as a whole payment or as a partial deposit with Stripe or PayPal or | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP07-L028 | withone ofthe availablepayments | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L029 | ➢Requirefull paymentoradeposit | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP07-L030 | ➢AcceptPayPalorStripe | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP07-L031 | ➢Automaticcancellationofunpaidreservations | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP07-L032 | ➢Wehavemorethan twentydifferent payments platforms integration add-ons | experiment.js booking workflow; domains.js salon resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP08 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP08-L001 | 8.In an effort to streamline the appointment process and enhance patient experience,  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L002 | MedCare Hospital has developed an online appointment booking system. This platform  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L003 | allows patients to book appointments with doctors from various specialties at their  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L004 | convenience. Key functionalities include user registration and login, browsing available  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L005 | doctors and appointment slots, booking and canceling appointments, and receiving  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L006 | appointment reminders via email or SMS. Patients can also view their appointment  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP08-L007 | history and update their personal details. The system ensures data security and  | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L008 | compliance with healthcare regulations to protect patient information. This online service  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP08-L009 | aims to reduce wait times, minimize paperwork, and provide a seamless experience for  | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L010 | patients and healthcare providers alike.This website helps the patient to search any  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L011 | hospital and book appointments as they prefer. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L012 | SearchModule | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L013 | AppointmentBooking | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L014 | Check-informSubmitting | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L015 | Appointmentmanagement | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L016 | Scheduleatiming | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L017 | PastappointmentManagement | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L018 | AdminFeatures | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L019 | Manageappointments | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L020 | Managedoctors | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L021 | ViewAppointmentsstatistics | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L022 | RatingDetails | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L023 | PatientFeatures | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L024 | Signup/Login. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L025 | Canchooseandbookanappointmentattheflexibletimeanddate. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L026 | Cansearchfordoctoraccordingtospecialtyandlocation. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP08-L027 | Can write reviews about the doctor and can select doctors according to otheruser | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L028 | feedback. | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L029 | Canaccessallpreviouscheck-indetailsandmedicalpastappointment | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L030 | User | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L031 | UserRegistration | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L032 | UserLogin | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L033 | SearchLocationwise | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP08-L034 | ViewHosptiallist | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L035 | BookAppointment | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L036 | Viewstatus | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L037 | Viewgooglemapforsinglehospital | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP08-L038 | Hospital | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L039 | HospitalRegistration | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L040 | Hosptiallogin | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP08-L041 | Createhostpitaldetails | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L042 | Updatedetails | experiment.js booking workflow; domains.js hospital resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP08-L043 | Updatelocation | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |

### EXP09 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP09-L001 | 9.TechSavvy, a leading retailer of electronic gadgets, has launched an online shopping  | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L002 | platform to provide customers with a seamless and convenient shopping experience. The  | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L003 | website features a wide range of products, including smartphones, laptops, tablets, and  | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L004 | accessories, all categorized for easy browsing. Key functionalities include user  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L005 | registration and login, product search and filtering, detailed product descriptions and  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L006 | reviews, secure payment options, and order tracking. Customers can add items to their  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP09-L007 | cart, create wish lists, and receive personalized recommendations based on their browsing  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L008 | and purchase history. The platform also offers exclusive online discounts and promotions,  | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L009 | ensuring customers get the best deals on the latest gadgets.The core of an online shop is  | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L010 | the product catalogue and the cart. The users browse productswhich are grouped in  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L011 | categories and add the desired ones to the cart. Next, there is transactionhandling,which | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L012 | initssimplestformconsistsintheorderbeingsentviae-mailtotheseller,butmostoften  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L013 | it takesthe whole buying processthrough separateorder statuses. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L014 | Productsshouldbelogicallycategorized,withthemostpopularcategorieslisted | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L015 | first.Displayalltheavailable categoriesfor shoppingonthehomepage. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L016 | Displayallthesubcategoriesonthehomepage,thatareassociatedwithanyparticular | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L017 | item. | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L018 | Adminhastheauthorityto addnewparticularstotheitemslistwheneverneeded. | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L019 | Permissiontotheadministratortoremoveitems,anytime. | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L020 | Allowstheadmin tomodify thepriceofeachitem, wheneverrequiredorfeltlike. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L021 | Adminhastheauthority toupdatethe descriptionofeachitem. | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L022 | Permissiontotheadmintoviewinformationabouteachcustomerwhocheckoutsthe | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L023 | items list. | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L024 | UseCases | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L025 | 1.Visita site | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L026 | 2.Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L027 | 3.SearchforItems | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L028 | 4.CheckAvailabilityofItems | experiment.js shop workflow; domains.js techsavvy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP09-L029 | 5.AddItemstoShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L030 | 6.EditItemsintheShopping Cart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L031 | 7.remove ItemsfromtheShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L032 | 8.CheckouttheShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP09-L033 | 9.CheckOrderStatus | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP10 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP10-L001 | 10.BrowseOrderHistory | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L002 | 11.DisplayItemDetails | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L003 | 12.Logout | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L004 | 13.Leave asite | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L005 | 10.StyleHub, a premier online fashion retailer, introduces its comprehensive e-commerce  | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L006 | platform designed to cater to fashion enthusiasts. The website offers an extensive  | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L007 | collection of clothing, footwear, and accessories for men, women, and children, with  | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L008 | categories such as casual wear, formal attire, and seasonal collections. Key functionalities  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L009 | include user registration and login, advanced search and filtering options, detailed  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L010 | product descriptions with high-resolution images, customer reviews, and size guides. The  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L011 | platform supports secure payment methods, order tracking, and an easy return and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP10-L012 | exchange policy. Customers can create wish lists, receive personalized style  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP10-L013 | recommendations, and enjoy exclusive online discounts and flash sales. StyleHub aims to  | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L014 | provide a seamless and enjoyable shopping experience, keeping users up-to-date with the  | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L015 | latest fashion trends.The core of an online shop is the product catalogue and the cart. The  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L016 | users browse products which are grouped in categories and add the desired ones to the  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L017 | cart. Next, there is transaction handling, which in its simplest form consists in the order  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L018 | being sent via e-mail to the seller, but most often it takes the whole buying process through  | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L019 | separate order statuses. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L020 | ➢The key to helping customers find the products they need quickly is to offer a user- | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L021 | friendlynavigationsystem. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L022 | ➢Productsshouldbelogicallycategorized,withthe mostpopularcategories listed first. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L023 | ➢Displayalltheavailable categories forshoppingonthehomepage. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L024 | ➢Displayallthesubcategoriesonthehomepage,thatareassociatedwithanyparticular | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L025 | item. | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L026 | ➢Adminhastheauthorityto addnewparticularstotheitemslistwheneverneeded. | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L027 | ➢Permissiontotheadministratortoremoveitems,anytime. | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L028 | ➢Allowstheadminto modifythepriceofeachitem,whenever requiredor feltlike. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L029 | ➢Adminhastheauthority toupdatethe descriptionofeachitem. | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L030 | ➢Permissiontotheadmintoviewinformationabouteachcustomerwhocheckoutsthe | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L031 | items list. | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L032 | UseCases | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L033 | 2.Visita site | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L034 | 2.Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L035 | 3.SearchforItems | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L036 | 4.CheckAvailabilityofItems | experiment.js shop workflow; domains.js stylehub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP10-L037 | 5.AddItemstoShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L038 | 6.EditItemsintheShopping Cart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L039 | 7.remove ItemsfromtheShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L040 | 8.CheckouttheShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L041 | 9.CheckOrderStatus | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP10-L042 | 10.BrowseOrderHistory | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP11 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP11-L001 | 11.DisplayItemDetails | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L002 | 12.Logout | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L003 | 13.Leave asite | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L004 | 11.Home Finder, an innovative online real estate platform, is designed to simplify the  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L005 | property search and transaction process for buyers, sellers, and renters. The website  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L006 | features a comprehensive database of residential and commercial properties, with  | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L007 | advanced search filters for location, price, type, and amenities. Key functionalities include  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP11-L008 | user registration and login, detailed property listings with high-quality images and virtual  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L009 | tours, and interactive maps to explore neighborhood features. Users can schedule  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP11-L010 | property viewings, save favorite listings, and receive notifications for new or updated  | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L011 | properties matching their criteria. The platform also offers tools for property valuation,  | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L012 | mortgage calculators, and direct communication with real estate agents. Home Finder  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L013 | aims to make the property search process efficient and transparent, providing users with  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L014 | valuable.Thiswebsite helps the user to search and book lands/houses in their required  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L015 | area in their budget. | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L016 | ➢Providealoginpageforbuyersandstoretheir usernameandpasswordinthedatabase | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L017 | andcan savethe searchcriteriaforthebuyers. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L018 | ➢Helpsthebuyerstousethesamesearchcriteriaratherthancreatinganewcriterion | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L019 | everytimethe buyer performs the search. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L020 | ➢Addmoreadvertisements onthewebsiteor linksto anotherwebsite. | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L021 | ➢Addagentandcompany search functionality. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP11-L022 | ➢Displayingthesearch resultsonGoogleMaps andlocatingtheareawheretheproperty | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP11-L023 | listingis located. | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L024 | ➢Itshouldbefriendlyand pretty | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L025 | ➢Storeandgivedetailsof properties | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP11-L026 | ➢Maintainrecordofcustomersvisitedthewebsite | experiment.js property workflow; domains.js home-finder resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP12 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP12-L001 | 12.InsureEasy, a cutting-edge online insurance management platform, is designed to  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L002 | streamline the insurance process for users. The website allows customers to easily  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L003 | compare and purchase various insurance policies, including health, auto, and home  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L004 | insurance. Key functionalities include user registration and login, a policy comparison  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L005 | tool, detailed policy descriptions, and secure online applications. Users can view and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP12-L006 | manage their existing policies, make premium payments, and file claims through an  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L007 | intuitive dashboard. The platform also provides personalized recommendations based on  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L008 | user profiles and needs, and sends automated reminders for policy renewals and  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L009 | upcoming payments. InsureEasy aims to enhance user convenience and provide  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L010 | comprehensive support for all insurance-related needs.This system maintains  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L011 | information of managers who can deal with agents and customers. In existing system, the  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L012 | manual procedure is followed where records are used to maintain data which is a time  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L013 | taking process and requires manpower and calculating commissions dues. Etc are done  | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L014 | manually. This system is where agents send SMS alerts to the policyholder to remind them  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP12-L015 | before and exceed the data of due. | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L016 | Admin | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L017 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L018 | ApproveAgentlogin | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L019 | Viewallagentdetails | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L020 | Agents | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L021 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L022 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L023 | CreateCustomer | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L024 | ManagerCustomerDetails | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L025 | ManagePolicyDetails | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L026 | SendSMSAlert | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP12-L027 | User | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L028 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP12-L029 | Managepolicydetails | experiment.js cases workflow; domains.js insureeasy resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP12-L030 | Getsmsalert | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |

### EXP13 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP13-L001 | 13.BlossomGifts, a user-friendly online platform, offers a seamless experience for ordering  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L002 | flowers and gifts for any occasion. The website features a diverse selection of floral  | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L003 | arrangements, gift baskets, and personalized gifts, all organized by occasion, recipient,  | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L004 | and price range. Key functionalities include user registration and login, a customizable  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L005 | order system with options for delivery dates and times, and detailed product descriptions  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L006 | with high-quality images. Customers can track their orders in real-time, schedule future  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP13-L007 | deliveries, and receive order confirmations via email or SMS. The platform also supports  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP13-L008 | secure payment methods and provides special promotions and discounts for loyal  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP13-L009 | customers. BlossomGifts aims to make sending thoughtful gifts and flowers easy and  | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L010 | convenient, ensuring timely delivery and customer satisfaction. | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L011 | ➢Thekeytohelpingcustomersfindtheproductstheyneedquicklyistoofferauser- | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L012 | friendlynavigationsystem. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L013 | ➢Productsshouldbelogicallycategorized,withthe mostpopularcategories listedfirst. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L014 | ➢Displayalltheavailable categories forshoppingonthehomepage. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L015 | ➢Displayallthesubcategoriesonthehomepage,thatareassociatedwithanyparticular | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L016 | item. | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L017 | ➢Adminhastheauthority toaddnew particularstotheitems listwheneverneeded. | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L018 | ➢Permissiontotheadministratortoremoveitems,anytime. | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L019 | ➢Allowstheadminto modifythepriceofeachitem,whenever requiredor feltlike. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L020 | ➢Permissiontotheadmintoviewinformationabouteachcustomerwhocheckoutsthe | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L021 | items list. | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L022 | UseCases | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L023 | Edit(Change,Delete)CustomerInfo | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L024 | Inquireabout ... viaemail | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP13-L025 | Maintain(add,change,delete)Inventory | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L026 | ViewOrder Summary | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L027 | Visita site | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L028 | Login Search for Items | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L029 | Check Availability of Items | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L030 | AddItemstoShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L031 | Edit Items in the Shopping Cart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L032 | removeItemsfromtheShoppingCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L033 | Checkout theShopping Cart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L034 | Check Order Status | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L035 | BrowseOrderHistory | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP13-L036 | Display Item Details | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L037 | Logout | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP13-L038 | Leave asite | experiment.js shop workflow; domains.js blossomgifts resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP14 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP14-L001 | 14.ReNewMarket, a dynamic online marketplace, connects buyers and sellers of second- | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L002 | hand goods with ease. The website features a broad range of categories, including  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L003 | electronics, furniture, clothing, and collectibles. Key functionalities include user  | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L004 | registration and login, a user-friendly listing creation tool for sellers, and advanced search  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L005 | and filtering options for buyers. Listings include detailed descriptions, photos, and pricing  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L006 | information, with the option to negotiate prices directly with sellers. Users can track their  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP14-L007 | transactions, leave feedback, and manage their favorite items and notifications. The  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L008 | platform also provides secure payment options and a simple process for arranging item  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP14-L009 | pick-ups or deliveries. ReNewMarket aims to provide a reliable andconvenient space for  | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L010 | exchanging pre-loved items while promoting sustainability | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L011 | ➢UserManagement | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L012 | Thesystemloginsuccessfullyand thenetwork connectionisworking. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L013 | ✓Theadministratorsetloginaccountandpassword. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L014 | ✓EditingUser | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L015 | ✓DeletingUser | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L016 | ➢CategoryManagement | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L017 | ✓Addcategoryinformation. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L018 | ✓Deletecategoryinformation | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L019 | ➢CommodityManagement | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L020 | ✓EditingCommodity | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L021 | ✓deletingCommodity | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L022 | ➢OrderManagement | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP14-L023 | ✓Changelogisticsstatus:(Shipped/Received) | experiment.js shop workflow; domains.js renewmarket resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP14-L024 | ✓DeleteOrder | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP15 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP15-L001 | 15.EasyToll, an advanced online toll payment system, simplifies the process of managing  | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L002 | toll fees for drivers. The website allows users to register and log in to access their toll  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L003 | account, where they can view and pay outstanding toll charges from various toll gates.  | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L004 | Key functionalities include real-time toll balance updates, automatic payment options,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP15-L005 | and the ability to add or update vehicle details. Users can view detailed transaction  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP15-L006 | history, set up recurring payments for frequent routes, and receive notifications for  | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L007 | upcoming toll charges. The platform also supports secure payment methods and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP15-L008 | provides a user-friendly interface for managing toll accounts and reviewing payment  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L009 | summaries. EasyToll aims to enhance the convenience of toll payments and reduce wait  | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L010 | times at toll booths,Thiswebsite should help the user to pay toll in advance therefore  | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L011 | not to wait in queue while travelling. | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L012 | Admin: | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L013 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L014 | ManageUser & Toll pass | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L015 | ManageTolllogin | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L016 | Approvetollpass | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L017 | GenerateQRCode | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP15-L018 | CreateTolldetails | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L019 | User: | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L020 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L021 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L022 | AddMoney–eWallet | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L023 | BuyTolleTicket | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L024 | ApplyNewtollpass | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L025 | Renewaltollpass | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L026 | ApplyToll pass | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L027 | GetQR CodeforToll pass | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP15-L028 | TollGateUser: | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L029 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L030 | ScanQR | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP15-L031 | VerifytollpassID | experiment.js pass workflow; domains.js easytoll resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP15-L032 | VerifyTollticket | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP15-L033 | Updatetolllocation | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |

### EXP16 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP16-L001 | 16.ComplainEase is a robust online platform designed to streamline the process of  | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L002 | registering and managing complaints. The website allows users to easily submit  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L003 | complaints by filling out a detailed form that includes categories, descriptions, and  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L004 | supporting documents. Key functionalities include user registration and login,  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L005 | real-time complaint tracking, and status updates via email or SMS. Users can view  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP16-L006 | their complaint history, receive feedback from resolution teams, and provide  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L007 | additional information or evidence if needed. The platform also includes a search  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L008 | feature for browsing common issues and solutions, and a dashboard for managing  | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L009 | and resolving complaints efficiently. ComplainEase aims to improve  | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L010 | responsiveness and transparency in handling user grievances, ensuring a smooth  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L011 | and effective resolution process. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L012 | USER | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L013 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L014 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L015 | PostComplaint | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L016 | LocationMarkinGoogle Map | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP16-L017 | Viewcomplaintstatus | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L018 | Feedback | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L019 | GetAdminContactdetails | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L020 | OFFICER | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L021 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L022 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L023 | ViewComplaint | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L024 | Updatestatus | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L025 | Updateproofofwork | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L026 | ADMIN | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L027 | Generateid&passwordforofficer | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L028 | Theadministrator hasfull-fledged rightsoverthe OES. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L029 | Cancreate/delete anaccount. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L030 | Canviewtheaccounts. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L031 | Canchangethepassword. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP16-L032 | Canhideany kindof featuresfromboth ofusers. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L033 | Insert the information of available on OES. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP16-L034 | Canaccess alltheaccountsof the officer. | experiment.js cases workflow; domains.js complainease resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP17 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP17-L001 | 17.VoteOnline is a secure and user-friendly e-voting platform designed to facilitate and streamline  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP17-L002 | the voting process for elections. The website allows registered voters to log in and cast their  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP17-L003 | votes remotely, ensuring a seamless voting experience. Key functionalities include user  | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L004 | authentication with multi-factor verification, a list of candidates or referendum options with  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP17-L005 | detailed information, and a simple, intuitive voting interface. Voters can view their voting  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP17-L006 | history, receive confirmation of their submitted votes, and track the progress of the election in  | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L007 | real-time. The platform also provides secure data encryption to protect voter information and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP17-L008 | ensures compliance with electoral regulations. VoteOnline aims to make the voting process  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP17-L009 | more accessible, efficient, and transparent, reducing barriers to participation and enhancing  | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L010 | election integrity | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L011 | Admin | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L012 | CreateElectionCandidate | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L013 | AllocateelectionDatawithCandidate | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L014 | Allocateusertoelectionwards | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L015 | CreateVoterList | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L016 | ImportVoterList | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L017 | View&update VoterList | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L018 | GetElectionResults | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L019 | USER | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L020 | LoginusingVoter ID | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP17-L021 | OTPLoginVerification | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP17-L022 | GetOTP forVoting | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP17-L023 | SelectCandidate | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP17-L024 | SubmitVote | experiment.js vote workflow; domains.js voteonline resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP18 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP18-L001 | 18.AgriMart is a comprehensive online platform catering to farmers and agricultural enthusiasts  | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L002 | with a wide range of products and services. The website features categories such as seeds,  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L003 | fertilizers, pesticides, farming equipment, and tools. Key functionalities include user  | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L004 | registration and login, product search and filtering, detailed product descriptions, and high- | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L005 | resolution images. Customers can place orders directly, track their shipments, and access  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP18-L006 | personalized recommendations based on their purchase history. The platform also offers secure  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP18-L007 | payment options and customer support for product inquiries and order issues. AgriMart aims  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L008 | to provide a convenient and efficient shopping experience, helping users access essential  | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L009 | agricultural supplies and resources with ease.’ | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L010 | FARMER | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L011 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L012 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L013 | OTPVerification | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L014 | ManageOrders | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L015 | UpdateorderStatus | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L016 | AddProduct | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L017 | Update/Deleteproduct | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L018 | Uploadimages | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L019 | MySales | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L020 | UpdateShipping Status | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L021 | Logout | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L022 | PUBLIC | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L023 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L024 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L025 | OTPVerification | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L026 | MyAccount | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L027 | ManageWalletBalance | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L028 | Viewproductdetails | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L029 | Searchproduct | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L030 | Addtocart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L031 | Edit/DeleteCart | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L032 | Add/EditShippingAddress | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP18-L033 | OrderProduct | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L034 | MyOrderstatus | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP18-L035 | ViewShipping Status | experiment.js shop workflow; domains.js agrimart resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP19 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP19-L001 | 19.The farmer must send his animal’s signs and symptoms to doctor in video, audio, images  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L002 | ortext form. The doctor will receive the farmer’s requests and respond. The user’s data  | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L003 | will beautomatically added to the database. The farmer has to register first and has to  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L004 | subscribe. AfarmerwillfreelysubscribetoGovt.CVHs.Hemustpayafeeifhewill | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L005 | subscribetotheprivateclinic’sdoctor.Therewillbetwopaymentgatewaysforthe | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP19-L006 | farmers,banktransfer(Doctorwillprovide his bank information while creating his  | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L007 | profile) and easy paisa. Doctors will providetheir bank details for payments. He can also  | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L008 | provide easy paisa account details. There will beimages of influenced animals with basic  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L009 | diseases and their prescriptions. Based on recordeddata,thesystemcanperforman | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L010 | analysisthatwhichdiseaseattacksonpetsmostlyinaspecificarea. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L011 | USER | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L012 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L013 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L014 | PostComplaint | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L015 | MyComplaintStatus | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L016 | ViewVetcuredetails | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L017 | ViewNews | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L018 | ViewDoctor | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L019 | ViewReport | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L020 | PostFeedback | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L021 | MakePayment | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L022 | MyProfile | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L023 | Doctor | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L024 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L025 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP19-L026 | ViewComplaint | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L027 | PostSolution | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L028 | ManageCure | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L029 | Managenews | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L030 | ViewuserDetails | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L031 | ViewPaymentDetails | experiment.js cases workflow; domains.js veterinary resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP19-L032 | FeedbackDetails | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP20 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP20-L001 | 20.RentRide is a modern online platform designed for convenient vehicle rentals. The website  | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L002 | allows users to browse a diverse fleet of vehicles, including cars, trucks, and SUVs, based on  | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L003 | their needs and preferences. Key functionalities include user registration and login, a search  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L004 | feature with filters for vehicle type, rental duration, and location, and detailed vehicle  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP20-L005 | descriptions with photos and pricing. Customers can book vehicles, manage their reservations,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP20-L006 | and view rental history through a personalized dashboard. The platform supports secure  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP20-L007 | payment methods, provides real-time booking confirmations, and offers 24/7 customer support  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP20-L008 | for any rental issues. RentRide aims to simplify the vehicle rental process, ensuring a seamless  | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L009 | and efficient experience for users.KeyFeatures | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L010 | SearchModule | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L011 | AppointmentBooking | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L012 | Check-informSubmitting | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L013 | Appointmentmanagement | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L014 | Scheduleatiming | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L015 | PastappointmentManagement | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L016 | Reviews | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L017 | Admin | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L018 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L019 | AddVehicle | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L020 | ManageVehicledetails | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L021 | Type,Price,Etc | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L022 | ManageBookingdetails | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L023 | ApproveUserBooking | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L024 | My profile | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L025 | User | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L026 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L027 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L028 | SearchVehicledetails | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L029 | SelectVehicle& Make Booking | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L030 | Name,CustomerNo, Address,Type | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP20-L031 | ViewBooking Status | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP20-L032 | Myprofile | experiment.js booking workflow; domains.js rentride resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP21 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP21-L001 | 21.Applicants can browse through the vacancy details that are posted and can apply for the  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP21-L002 | jobsonline. Director can browse through the posted resumes and select suitable  | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L003 | candidates. Filter,SearchfacilityforUseraccordingtotheirrequiredvacancy.Daily | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L004 | updatesvianotificationsandother communication media. Sending resume saves effort,  | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L005 | time and cost of user All vacanciesare available on a single interface user can set privacy  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L006 | level for different companies’ user cansavejobs according to their needs. | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L007 | Admin | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L008 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L009 | Approvedirector | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L010 | ViewUser | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L011 | View Report | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L012 | Director | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L013 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L014 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L015 | PostVacancy | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L016 | oImage,description,contact, etc | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L017 | ViewVacancy | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L018 | Viewappliedusers | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L019 | Logout | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L020 | User | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L021 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L022 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L023 | Searchvacancy | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP21-L024 | Filterbylocationwise, category. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP21-L025 | Applyforvacancy | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP21-L026 | Logout | experiment.js cases workflow; domains.js jobs resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP22 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP22-L001 | 22.Solid waste management can be broadly categorized as segregation, collection, and | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L002 | transportation. Theserver will collect the data and store them only a database. This data  | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L003 | will beanalyzedanddisplayedontwodifferentdashboardsthatcanbeaccessedby | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L004 | theworkforceandclients. Usingdata analytics, reports will be generated which can be  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L005 | monitored by the adminsthroughthe admin dashboard. Basedon the data collected,  | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L006 | garbage trucks can be given routes generated throughvarious algorithms and google  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP22-L007 | maps API to efficiently route through all necessarygarbagebinsandfinally reach the | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L008 | dumping siteEffectiveusageof dustbins. | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L009 | Administrator | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L010 | ➢Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L011 | ➢CreateGarbagebin | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L012 | ➢Update/Deletegarbagebin | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L013 | ➢Assignbest routefordrivers | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L014 | ➢Managedriver | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L015 | ➢ViewGarbageReport | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L016 | ➢Viewcomplaintsfrompublic | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L017 | GeneralPublic | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L018 | ➢Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L019 | ➢Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L020 | ➢Registercomplaint | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L021 | ➢Mycomplaint&status | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L022 | Driver | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L023 | ➢Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP22-L024 | ➢Checkdailywork updates | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L025 | ➢Choosebest route | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP22-L026 | ➢Updategarbageload | experiment.js cases workflow; domains.js waste resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP23 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP23-L001 | 23.Thebloodmanagementinformationsystemoffers functionality toquickaccesstodonor | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L002 | records collected from various parts of the country. It enables monitoring of the results  | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L003 | andperformanceoftheblooddonationactivitysuchthatrelevantandmeasurable  | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L004 | objectivesoftheorganizationcanbe checked.Itprovidestomanagementtimely, | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L005 | confidentialandsecuremedical reports that facilitates planning and decision making and  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP23-L006 | hence improved medicalservice delivery. The reports generated by the system give  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L007 | answers to most of the challengesmanagementfacesas farasblood donorrecords are | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L008 | concerned. | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L009 | DONOR/USER | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L010 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L011 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L012 | PostDonarinformation | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L013 | Mydonarinfo | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L014 | Searchdonardetails | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L015 | SearchBloodbankdetails | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L016 | Logout | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L017 | HOSPITAL | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L018 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L019 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP23-L020 | PostBloodbank info | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L021 | Updateblood groupstatus | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L022 | ViewBloodbankdetails | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP23-L023 | Logout | experiment.js cases workflow; domains.js blood-bank resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP24 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP24-L001 | 24.Wanderlust Travels is a comprehensive online travel agency platform designed to make trip  | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L002 | planning and booking effortless. The website features a wide range of travel options, including  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L003 | flights, hotels, car rentals, and vacation packages. Key functionalities include user registration  | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L004 | and login, a powerful search engine for finding travel deals, and detailed descriptions of  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L005 | destinations, accommodations, and itineraries. Customers can book and manage their travel  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP24-L006 | arrangements, receive booking confirmations, and access travel guides and recommendations.  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L007 | The platform also offers secure payment options, customer support for pre-and post-booking  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP24-L008 | queries, and personalized travel suggestions based on user preferences. Wanderlust Travels  | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L009 | aims to provide a seamless, one-stop solution for all travel needs, ensuring an enjoyable and  | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L010 | hassle-free experience. Thesystem allows one to easily access the relevant information and  | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L011 | make necessary travelarrangements. Users can decide about places they want to visit and make  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP24-L012 | bookings online fortraveland accommodation. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L013 | User | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L014 | Admin | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L015 | USER | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L016 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L017 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L018 | ViewFoodDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L019 | ViewHostelDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L020 | ViewRouteDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L021 | MyBookAccommodation | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L022 | ADMIN | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L023 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP24-L024 | PostTourismDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L025 | ManageFoodDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L026 | ManageHotelDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L027 | ManageRouteDetails | experiment.js booking workflow; domains.js wanderlust resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP24-L028 | ViewBookingDetails | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP25 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP25-L001 | 25.OnRoadVehicleBreakdownAssistancesystemcansearchforlistofmechanicsatany | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L002 | locationor the nearby locationswhichwillhelptheminanunexpected situationraised | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP25-L003 | bythemechanical issues of their vehicles. Only the licensed mechanics can get listed  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP25-L004 | here while thesearch. Road assistance for car and there isavailable mechanic who can  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L005 | come and repair themechanicalissues in theuser’svehicle. | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L006 | Usermodules: | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L007 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L008 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L009 | SearchMechanicDetails | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L010 | ViewGoogle geolocation | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP25-L011 | Postfeedback | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L012 | Myprofile | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L013 | Adminmodules: | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L014 | ProvideApproval | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L015 | Mechanicmodules: | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L016 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L017 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP25-L018 | Post Business | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L019 | ManageBusiness | experiment.js cases workflow; domains.js roadside resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP25-L020 | Viewfeedback | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP26 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP26-L001 | 26.This web site provides traffic police to create online FIR with the vehicle owner and  | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L002 | vehiclephoto as proof, user side receives the fir receipt with fine details. In this  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L003 | application, user canto see the penalty imposed on the owner of the vehicle. By doing  | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L004 | this the tendency of gettingawaywithoutbeingpenalizedwillreduce andsubsequently | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L005 | the traffic violationwillbemitigated without industrious use of human resources.  | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L006 | Traffic Squad: Penalty Collection &management-basedwebApplication | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L007 | User | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L008 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L009 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L010 | ViewChallan | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L011 | ViewCaseFiled | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L012 | Police | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L013 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L014 | Rules | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L015 | CreateCase | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L016 | Uploadproofphoto | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L017 | Manage | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L018 | Liveinformation oftrafficreport–Newupdates | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L019 | Googlemap traffic–Link | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP26-L020 | Admin | experiment.js cases workflow; domains.js challan resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP26-L021 | ManagePoliceLogin | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP26-L022 | ViewDailyReport | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP27 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP27-L001 | 27.The bus pass will differ for different types of users. In this bus pass, all the required  | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L002 | detailssuch as candidate’s name, address, date of birth, mail id, name of the school,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP27-L003 | validity period,the amount paid (free for government school students) and photocopy  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L004 | of the candidate areprovided. Instead of school details, working organization details  | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L005 | will be provided in route buspass.Therenewalprocesscanbedonemonthlyasperuser | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP27-L006 | wish.Basedonthatrenewalperiodamountwill bededucted. | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L007 | Admin: | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L008 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L009 | Managestudent& routepass | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L010 | Manageconductorlogin | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L011 | Approvebuspass | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L012 | GenerateQRCode | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP27-L013 | CreateBusdetails | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L014 | CreateRouteInformation | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L015 | oFrom to, Time, RouteStopping | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L016 | User: | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L017 | Register | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L018 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L019 | AddMoney–eWallet | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L020 | BuyBuseTicket | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L021 | ApplyNewbuspass | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L022 | Renewalbuspass | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L023 | ApplyStudent&Routepass | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L024 | GetQR CodeforBus pass | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP27-L025 | Calculateexpectedtimetoreach | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L026 | Conductor: | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L027 | Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L028 | ScanQR | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP27-L029 | VerifybuspassID | experiment.js pass workflow; domains.js bus-pass resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP27-L030 | VerifyBusticket | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP27-L031 | Updatebuslocation | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |

### EXP28 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP28-L001 | 28.ArtistryHub is a beautifully designed portfolio website dedicated to showcasing the work and  | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L002 | achievements of renowned artist Emily Harris. The website serves as a digital tribute and a  | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L003 | comprehensive resource for fans and admirers. Key components include a visually stunning  | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L004 | homepage featuring a gallery of Emily's most notable artworks, a detailed biography section  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L005 | highlighting her career milestones and exhibitions, and an interactive portfolio where users can view  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP28-L006 | high-resolution images and descriptions of her artworks. The site also includes a blog for updates  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L007 | on recent projects and upcoming events, a store for purchasing prints and merchandise, and a  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L008 | contact page for booking inquiries and fan messages. ArtistryHub aims to celebrate Emily's artistic  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L009 | journey and provide an engaging experience for her audience. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L010 | 1.Homepage: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L011 | •Create an engaging homepage that introduces visitors to the artist and sets the tone for the website. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L012 | •Include an attractive banner image or artwork representative of the artist's work. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L013 | 2. About the Artist: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L014 | •Develop a page that offers a detailed biography or profile of the artist, including background information,  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L015 | influences, and artistic journey. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L016 | •Include a high-quality photo or portrait of the artist. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L017 | 3. Portfolio: | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L018 | •Organize and present the artist's work, such as artworks, music albums, or written pieces. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L019 | •For visual artists, provide galleries with high-resolution images and descriptions of individual pieces. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L020 | •For musicians, feature audio clips or embed music players for sample tracks. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L021 | •For writers, display excerpts from books, articles, or poems. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L022 | 4.Discography or Bibliography: | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L023 | •Create a comprehensive list of the artist's works, including albums, songs, books, articles, or any other  | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L024 | significant creations. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L025 | •Include publication or release dates and ISBN/UPC details, if applicable. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L026 | 5.Media Gallery: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L027 | •Incorporate a media section with photos, videos, interviews, or media coverage related to the artist. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP28-L028 | •If available, embed YouTube or Vimeo videos of live performances or interviews. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L029 | 6.News and Updates (Optional): | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L030 | •Include a section for the latest news, updates, or events related to the artist, with announcements of  | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L031 | upcoming exhibitions, concerts, or book releases. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L032 | 7.Interactive Features (Optional): | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L033 | •Integrate social media feeds, allowing visitors to follow the artist's official profiles. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP28-L034 | •Enable users to subscribe to newsletters for artist updates. | experiment.js content workflow; domains.js artistryhub resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP29 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP29-L001 | 28.The layout of the event page will be simple. The header section will contain the names and  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP29-L002 | images of the different speakers with links, the event venue, and the schedule. You must also  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP29-L003 | include a section that describes the purpose of the event –what the event is for and which  | experiment.js booking workflow; domains.js event resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP29-L004 | category of audience it aims to target. Section the page into smaller chunks to make it look  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP29-L005 | neat. Choose the right font style, font color, and background color for individual sections on  | experiment.js booking workflow; domains.js event resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP29-L006 | the page. Also, make sure to add a registrationbutton so that interested people can register  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP29-L007 | for the event. | experiment.js booking workflow; domains.js event resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP30 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP30-L001 | 30.The International Journal of Scientific and Social Excellence (IJSSE) has launched a  | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L002 | professional and user-friendly website to facilitate its operations as a Scopus-indexed journal  | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L003 | publisher. The website features an "About Journal" section detailing its mission, scope, and the  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L004 | significance of its print ISSN 2395-1443 and online ISSN 2395-1451. Key menus include "For  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L005 | Authors," where contributors can submit manuscripts, track submission status, and access  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP30-L006 | guidelines; "For Reviewers," which provides tools for reviewing submissions and accessing  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L007 | reviewer resources; and "For Editors," offering a dashboard for managing submissions,  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L008 | coordinating peer reviews, and overseeing publication processes. The site also includes registration  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L009 | options for authors, reviewers, and editors, ensuring seamless communication and workflow. The  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L010 | IJSSE website aims to support a streamlined submission and review process, enhancing the  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L011 | efficiency and transparency of academic publishing. | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L012 | 1) Home page  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L013 | 2) About Journal  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L014 | 3) Publication ethics  | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L015 | 4) Editorial board  | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L016 | i) Editor registration | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L017 | ii) Editor Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L018 | iii) Editorial committee | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L019 | iv) Editor responsibility | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L020 | 5) Reviewers  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L021 | i) Reviewer registration | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L022 | ii) Reviewers login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L023 | iii) List of reviewers for specific article. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L024 | 6) Author | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L025 | i) Author registration | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L026 | ii) Author login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L027 | iii) List of papers under an author  | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L028 | iv) Author Instructions | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L029 | v) Publication charge | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L030 | vi) Article Template | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L031 | vii) Copyrights form Template | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L032 | viii) Author guidelines | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L033 | 7)Articles | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L034 | i) Current issue | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L035 | ii) Archive | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L036 | iii) Most viewed articles | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L037 | iv) Most cited articles | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L038 | v) About to print articles | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L039 | 8) Call for paper | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L040 | i) Submit Manuscript | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L041 | ii) Indexed List | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L042 | iii) Subscribe Newsletters | experiment.js cases workflow; domains.js ijsse resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP30-L043 | iv) View feedback | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP30-L044 | 9) Contact Us. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |

### EXP31 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP31-L001 | 31.Ko-Matha Dairy Farm, a pioneering smart dairy operation, has launched an innovative website  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L002 | to enhance customer engagement and streamline its services. The website showcases the farm’s  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L003 | commitment to high-quality products sourced from Indian A1 cow holders,known for their  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L004 | superior milk. Key features include a "Products" section where customers can purchase fresh milk,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP31-L005 | curd, cova-sweet, butter, and ghee, with detailed descriptions and pricing. The "Farm" section  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L006 | provides insights into the farm’s practices, the benefits of A1 cow milk, and the technology used to  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L007 | ensure quality. Additional menus include "Order Online" for convenient delivery scheduling,  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L008 | "About Us" for farm history and values, and "Contact" for customer inquiries and support. Ko- | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L009 | Matha Dairy Farm’s website aims to connect customers with wholesome dairy products while  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L010 | promoting transparency and convenience.The website should contain home page, about us, contact  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L011 | us and so on with following data maintenance:  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L012 | They are | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L013 | 1)The administrator detail | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L014 | Registration form | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L015 | Login form | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L016 | 2)Stock detail | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L017 | Stock entry form | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L018 | Daily report | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L019 | Monthly report | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L020 | Yearly report | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L021 | 3)Customer detail | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L022 | Purchase detail | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L023 | Customer online purchase order | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP31-L024 | 4)Milk vender detail | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L025 | Vendors information  | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP31-L026 | Cow detail maintenance | experiment.js shop workflow; domains.js ko-matha resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP32 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP32-L001 | 32. Ram Infotech has launched a comprehensive website to cater to both laptop sales and service  | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L002 | needs. The website features a user-friendly interface for browsing and purchasing a wide range of  | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L003 | laptops, including detailed specifications, customer reviews, and competitive pricing. Key  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP32-L004 | functionalities include an "Online Store" section for selecting and buying laptops, a "Service  | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L005 | Center" section where customers can schedule repairs, track service status, and access  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP32-L006 | troubleshooting guides. The site also includes an"About Us" page detailing the company’s history  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP32-L007 | and mission, a "Contact" page for customer support, and a "FAQ" section addressing common  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP32-L008 | queries. Ram Infotech’s website aims to provide a seamless experience for both acquiring and  | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L009 | maintaining laptops, ensuring quality service and customer satisfaction. | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L010 | 1) Admin detail –Login, Registration form detail | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP32-L011 | 2) Sales –Laptop detail, model, configuration  | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L012 | 3) Services –Laptop services information | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L013 | 4) Customer information –Purchase / Services  | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L014 | 5) Laptop renal agreement detail | experiment.js shop workflow; domains.js ram-infotech resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP32-L015 | 6) Stock maintenance in the shop. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP33 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP33-L001 | 33. KodaikanalEats is a sleek online platform designed to simplify restaurant bookings in the picturesque  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP33-L002 | town of Kodaikanal. The website features an extensive list of local dining options, including fine dining,  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP33-L003 | casual eateries, and specialty restaurants. Keyfunctionalities include a search and filter system to find  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP33-L004 | restaurants based on cuisine, location, and ratings, as well as an easy-to-use booking system where users can  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP33-L005 | reserve tables, select dining times, and view available slots. The site also provides detailed restaurant profiles  | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP33-L006 | with menus, photos, and customer reviews. Additional features include real-time booking confirmations, a  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP33-L007 | "Special Offers" section for exclusive deals, and a "Contact Us" page for customer support and inquiries.  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP33-L008 | KodaikanalEats aims to enhance the dining experience by providing a convenient and efficient way to explore  | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP33-L009 | and book restaurants in Kodaikanal. | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP33-L010 | 1) Admin detail –Login, Registration form detail | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP33-L011 | 2) Suit detail and cost–single room, double rooms, deluxe rooms | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP33-L012 | 3) Rooms availability detail | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP33-L013 | 4) Online booking system detail-Seasonal / Non-seasonal | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP33-L014 | 5) Room boys availably detail | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP33-L015 | 6) Customer detail | experiment.js booking workflow; domains.js kodaikanaleats resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP34 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP34-L001 | 34. LearnWell Tuition Centre has launched a dedicated website to streamline announcements and  | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP34-L002 | manage various aspects of its operations. The website features a central "Announcements" section  | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP34-L003 | where updates on class schedules, special events, and important notices are posted regularly. Key  | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP34-L004 | functionalities include a "Course Offerings" page detailing available subjects, schedules, and fees,  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP34-L005 | and an "Online Registration" system for enrolling in classes and managing student profiles. There  | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP34-L006 | is also a "Maintenance Requests" section where students and parents can report issues or request  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP34-L007 | assistance. The site includes an "About Us" page providing information about the centre's mission  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP34-L008 | and teaching staff, and a "Contact" page for inquiries and support. LearnWell’s website aims to  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP34-L009 | keep the community informed and facilitate efficient management of tuition services. | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP34-L010 | 1) Admin detail –Login, Registration form detail | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP34-L011 | 2) Teachers detail –Login, Registration form detail | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP34-L012 | 3) Students detail –Fees paid detail, Report-monthly and yearly, feedback report | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP34-L013 | 4) Subjects detail –Duration, fees detail. | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP34-L014 | 5) Online / Offline tuition availability.      | experiment.js cases workflow; domains.js learnwell resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP35 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP35-L001 | 35. The bus pass will differ for different types of users. In this bus pass, all the required details such  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L002 | as candidate’s name, address, date of birth, mail id, name of the school, validity period, the amount  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP35-L003 | paid (free for government school students) and photocopy of the candidate are provided. Instead of  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L004 | school details, working organization details will be provided in route bus pass. The renewal process  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L005 | can be done monthly as per user wish. Based on that renewal period amount will be deducted.  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L006 | 1.Admin:  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L007 | • Login  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L008 | • Manage student & route pass  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L009 | • Manage conductor login  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L010 | • Approve bus pass  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L011 | • Generate QR Code  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP35-L012 | • Create Bus details  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L013 | • Create Route Information  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L014 | o From to , Time , Route Stopping  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L015 | 2.User:  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L016 | • Register  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L017 | • Login  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L018 | • Add Money –eWallet  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L019 | • Buy Bus eTicket  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L020 | • Apply New bus pass  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L021 | • Renewal bus pass  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L022 | • Apply Student & Route pass  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L023 | • Get QR Code for Bus pass  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP35-L024 | • Calculate expected time to reach  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L025 | 3.Conductor :  | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L026 | o Login o Scan QR  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L027 | o Verify bus pass ID | experiment.js pass workflow; domains.js bus-pass-management resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP35-L028 | o Verify Bus ticket  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP35-L029 | o Update bus location | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |

### EXP36 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP36-L001 | 36.EduConnect is an innovative online teaching platform designed to facilitate interactive and  | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L002 | flexible learning experiences. The website offers a range of functionalities, including a "Course  | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L003 | Catalog" where students can browse and enroll in various subjects and programs. Key features  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP36-L004 | include live video classes, pre-recorded lectures, and downloadable study materials. The platform  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP36-L005 | also includes interactive tools such as discussion forums, quizzes, and assignments to engage  | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L006 | students. Teachers can create and manage courses, track student progress, and provide feedback  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP36-L007 | through a dedicated instructor dashboard. Additional features include user registration and login,  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP36-L008 | secure payment options for course fees, and a "Support" section for technical help and inquiries.  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP36-L009 | EduConnect aims to provide a comprehensive and accessible learning environment for students and  | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L010 | educators alike. | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L011 | i. Student Registration | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L012 | ii. Teacher Registration | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP36-L013 | iii. Subject Allocation / Registration | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP36-L014 | iv. Time Management | experiment.js cases workflow; domains.js educonnect resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP37 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP37-L001 | 36."BookHaven" is a sleek and user-friendly online bookstore designed to provide a comprehensive and  | experiment.js shop workflow; domains.js bookhaven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP37-L002 | enjoyable shopping experience for book lovers. The homepage features a visually appealing layout with  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L003 | curated book collections, bestsellers, and new arrivals.Key static pages include an "About Us" section that  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L004 | shares the bookstore’s mission and values, a "Contact Us" page with customer service details, and a "FAQ"  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L005 | section addressing common inquiries about orders, shipping, and returns. The website also offers a detailed  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L006 | "Category" page where users can browse books by genre, author, or publication date. Each book listing  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP37-L007 | provides a cover image, synopsis, customer reviews, and purchase options. The "Cart" and "Checkout"  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L008 | pages are designed for easy navigation, ensuring a smooth and secure purchasing process. Additionally, a  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP37-L009 | "Blog" page shares book recommendations, reviews, and author interviews, enhancing the overall customer  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L010 | experience. | experiment.js shop workflow; domains.js bookhaven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP37-L011 | 1.Home Page: Features a visually appealing layout with a carousel of bestsellers and new arrivals,  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L012 | search functionality, and highlighted categories like fiction, non-fiction, and academic books. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L013 | 2.About Us Page: Provides an overview of BookHaven’s mission, history, and values, introducing  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L014 | the team and detailing the store’s commitment to quality and customer satisfaction. | experiment.js shop workflow; domains.js bookhaven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP37-L015 | 3.Catalog Page: Showcases a well-organized listing of books with filters for genres, authors, and  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L016 | price ranges, allowing users to browse and discover titles easily. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L017 | 4.Contact Us Page: Includes a contact form, email address, phone number, and physical store  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP37-L018 | location (if applicable), enabling customers to get in touch with the bookstore for support or  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP37-L019 | inquiries. | experiment.js shop workflow; domains.js bookhaven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP37-L020 | 5.FAQs Page: Offers answers to common questions regarding shipping, returns, and account  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L021 | management, helping customers find information quickly. | experiment.js shop workflow; domains.js bookhaven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP37-L022 | 6.Privacy Policy Page: Details the store’s policies on data collection, usage, and protection,  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L023 | ensuring transparency and compliance with privacy regulations. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP37-L024 | BookHaven aims to provide a seamless and engaging online shopping experience, with easy navigation  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP37-L025 | and clear information for customers. | experiment.js shop workflow; domains.js bookhaven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP38 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP38-L001 | 37.A professional creates "MyProfessionalShowcase," a polished portfolio website to effectively present  | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L002 | their skills, projects, and resume to potential employers and clients. The homepage features a sleek design  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L003 | with a personal introduction and an overview ofkey strengths and expertise. Visitors can navigate through  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP38-L004 | sections highlighting completed projects, each accompanied by detailed descriptions, images, and links to  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L005 | live demos or source code. The website also includes a dedicated resume page, offering a downloadable  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L006 | version and an interactive timeline of the professional’s career milestones. Testimonials from clients or  | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L007 | colleagues are showcased to build credibility, while a contact form allows potential employers or clients to  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L008 | easily reach out for inquiries or collaboration. Additionally, the website is optimized for mobile devices,  | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L009 | ensuring a seamless user experience across all platforms. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L010 | Home Page: A dynamic introduction with a professional photo and a brief overview of my expertise,  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L011 | highlighting my key skills and career objectives. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L012 | 1.About Me Page: An in-depth section detailing my background, education, and professional  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L013 | journey, including testimonials from previous clients or colleagues. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L014 | 2.Portfolio Page:A gallery of my notable projects with descriptions, technologies used, and links  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L015 | to live demos or case studies, showcasing my work and capabilities. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L016 | 3.Resume Page:A downloadable and interactive version of my resume, providing a comprehensive  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L017 | view of my work history, skills, and achievements. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L018 | 4.Blog Page:A space for sharing insights, articles, or updates related to my field, demonstrating  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP38-L019 | thought leadership and engagement with industry trends. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L020 | 5.Contact Page: A contact form, email address, and links to professional social media profiles,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP38-L021 | making it easy for potential employers or clients to reach out. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L022 | MyProfessionalShowcase aims to provide a comprehensive and engaging representation of my  | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP38-L023 | professional identity, offering valuable insights into my skills and experience. | experiment.js content workflow; domains.js professional-showcase resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP39 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP39-L001 | 38. Gourmet Havenis a sophisticated website designed to enhance the digital presence of a fictional  | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L002 | fine dining restaurant. It features a striking home page with a rotating carousel of the restaurant's  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L003 | ambiance and signature dishes, an interactive menu showcasing detaileddescriptions and pricing,  | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L004 | and an easy-to-use reservation system for booking tables. The site includes an "About Us" page  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L005 | detailing the restaurant's history and culinary team, a gallery of high-resolution images capturing  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L006 | the dining experience, and a contact page with essential information and a contact form. Gourmet  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L007 | Haven aims to provide an engaging and user-friendly online experience, allowing potential  | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L008 | customers to explore offerings, make reservations, and connect with the restaurant effortlessly | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L009 | 1.Homepage: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L010 | •Create an engaging and visually appealing homepage that reflects the restaurant's theme and  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L011 | atmosphere. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L012 | •Include high-quality images of the restaurant's interior, exterior, and signature dishes. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L013 | •Add a welcoming message or tagline to set the tone for the dining experience. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L014 | 2.Menu Pages: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L015 | •Develop dedicated pages for the restaurant's menu items, organized by categories (appetizers, main  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L016 | courses, desserts, etc.). | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L017 | •Include detailed descriptions of each dish, including ingredients and pricing. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L018 | •Integrate high-resolution images of the dishes to entice visitors. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L019 | •Implement navigation to easily switch between different menu categories. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L020 | 3.Contact Information: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L021 | •Create a separate page for contact information, including the restaurant's physical address, phone  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L022 | number, and email address. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP39-L023 | •Embed an interactive Google Maps widget displaying the restaurant's location. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP39-L024 | •Include a contact form to allow customers to submit inquiries, reservations, or feedback. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L025 | 4.Reservation System: | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L026 | •If desired, implement an online reservation system that allows visitors to book a table. | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L027 | •Include a calendar for selecting dates and times, along with the number of guests. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L028 | 5.About Us Page: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L029 | •Develop a page that provides background information about the restaurant, such as its history,  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L030 | concept, and culinary philosophy. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L031 | •Include images of the chef and the kitchen staff, along with their brief bios. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L032 | 6.Special Offers and Events: | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L033 | •If applicable, create a section for special promotions, events, or seasonal menus. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L034 | •Include details of ongoing deals, happy hours, or upcoming celebrations. | experiment.js booking workflow; domains.js gourmet-haven resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP39-L035 | 7.Testimonials and Reviews: | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L036 | •If available, showcase customer testimonials and reviews to build trust and credibility. | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP39-L037 | •Include snippets of feedback from satisfied patrons. | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP40 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP40-L001 | 39.  user visits an online store that features a clean and straightforward product catalog, allowing  | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L002 | them to easily browse and purchase items. The homepage displays a selection of featured products  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L003 | along with categories for quick navigation. Each product listing includes a clear image, description,  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L004 | price, and available options such as size or color. Users can add items to their shopping cart with a  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP40-L005 | single click and view their cart at any time to adjust quantities or remove items. The website also  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L006 | includes a search bar for finding specific products and a filter option to refine results by price,  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L007 | brand, or popularity. Once the user is ready to check out, they can proceed to a secure checkout  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP40-L008 | page where they enter shipping and payment details. The website also provides an order summary  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L009 | and confirmation, with the option to track their order status through their account. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L010 | 1.Homepage: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L011 | •Design a visually appealing homepage that introduces the online store and showcases featured  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L012 | products. | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L013 | •Include a search bar, navigation menu, and clear calls to action to encourage users to explore the  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L014 | product catalog. | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L015 | 2.Product Listings: | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L016 | •Create individual pages for each product, complete with product descriptions, images, pricing, and  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L017 | availability status. | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L018 | •Organize products into categories (e.g., electronics, clothing, accessories) for easy navigation. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L019 | •Implement filters or sorting options to allow users to refine their product search. | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L020 | 3.Shopping Cart: | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L021 | •Develop a shopping cart system that allows users to add products, view the contents of their cart,  | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L022 | and adjust quantities. | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L023 | •Calculate and display the total price of items in the cart. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L024 | •Provide options to remove items from the cart and clear the cart entirely. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L025 | 4.User Accounts (Optional): | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L026 | •Create user accounts that enable users to save their shipping and billing information for future  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L027 | purchases. | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP40-L028 | •Allow registered users to view their order history and check the status of their orders. | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L029 | 5.Checkout Process: | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L030 | •Design a simple and intuitive checkout process that collects necessary customer information. | experiment.js catalog/cartPanel/checkout/admin; domains.js specialist forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP40-L031 | •Include a secure payment gateway to process payments for purchased items. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP40-L032 | 6.Order Confirmation and Email Notifications: | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP40-L033 | •Send order confirmation emails to customers after they complete a purchase. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP40-L034 | •Provide email notifications to users about the status of their orders, including shipping and delivery  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP40-L035 | updates.                                  | experiment.js shop workflow; domains.js online-store resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP41 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP41-L001 | 40. A travel enthusiast creates a travel blog website to document and share their adventures with  | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L002 | a global audience. The homepage features an attractive layout with stunning travel photos and a  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L003 | map highlighting visited destinations. Each blog post offers an immersive experience, with  | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L004 | detailed narratives, captivating images, and travel tips for various locations. Readers can easily  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP41-L005 | navigate through categories such as destinations, travel guides, food experiences, and cultural  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L006 | insights. The website includes a comment section for readers to share their thoughts, ask  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L007 | questions, and connect with the blogger. An "About" page gives insights into the blogger’s  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L008 | journey and passion for travel, while a "Resources" section provides useful travel tools, packing  | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L009 | lists, and booking recommendations. The platform also integrates social media sharing options,  | experiment.js booking/recordsTable/cancel; special.js pass/PNR forms | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L010 | allowing readers to easily share posts and follow the blogger’sadventures in real time. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP41-L011 | 1.Homepage: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L012 | •Create an inviting homepage that showcases recent or featured travel articles. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L013 | •Include a visually appealing header with a site logo and navigation menu for easy access to  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L014 | various sections. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L015 | 2. Blog Articles: | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L016 | •Develop individual blog articles that narrate your travel adventures. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L017 | •Each article should include text content, high-quality images, and possibly videos. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L018 | •Implement a clean and readable layout for articles, including headings, paragraphs, and  | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L019 | captions. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L020 | 3.Travel Destinations: | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L021 | •Organize your blog posts by travel destinations or regions. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L022 | •Allow users to explore your articles by filtering them based on specific locations. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP41-L023 | 4.Interactive Map: | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L024 | •Integrate an interactive map that displays markers for the locations you've visited. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP41-L025 | •Clicking on a marker should lead users to the respective travel articles related to that location. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP41-L026 | 5.Photo Galleries: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L027 | •Create photo galleries within your articles to showcase your travel photos. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L028 | •Include features for users to view photos as slideshows or open them in larger formats. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L029 | 6.User Comments and Engagement: | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L030 | •Implement a comment section on each blog post, encouraging reader engagement and  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L031 | discussions. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L032 | •Enable social media sharing for each article to expand your blog's reach. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L033 | 7.About the Traveler: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L034 | •Dedicate a page to introduce yourself, including your background, travel interests, and future  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP41-L035 | plans. | experiment.js content workflow; domains.js travel-blog resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP41-L036 | •Include a photo and brief biography. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |

### EXP42 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP42-L001 | 41. A user visits the digital recipe book platform to explore and share culinary creations. The  | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L002 | homepage features a curated collection of popular recipes, categorized by cuisine, dietary  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L003 | preferences, and difficulty levels. Users can search for specific recipesor browse through themed  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP42-L004 | collections. Each recipe page includes a detailed list of ingredients, step-by-step instructions, and  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L005 | high-quality visuals to guide the cooking process. Users can create personal accounts to save their  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP42-L006 | favorite recipes, upload their own creations, and even customize the ingredients based on serving  | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L007 | size or dietary needs. The platform also allows users to rate and comment on recipes, fostering a  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L008 | community of food enthusiasts. Additionally, a meal planner tool helps users organize their weekly  | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L009 | menus, while an integrated shopping list feature makes it easy to gather the necessary ingredients. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L010 | 1.User-Friendly Interface: | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L011 | •Design a user-friendly and visually appealing interface that makes it easy for users to browse and  | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L012 | search for recipes. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L013 | •Implement a clean and organized layout with intuitive navigation. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L014 | 2.Recipe Listings: | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L015 | •Create an extensive database of recipes, organized into categories or tags (e.g., breakfast, main  | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L016 | course, desserts, vegetarian). | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L017 | •Include a search bar for users to quickly find recipes based on keywords or ingredients. | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L018 | 3.Recipe Pages: | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L019 | •Each recipe page should feature a high-quality image of the prepared dish. | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L020 | •Include detailed cooking instructions, a list of ingredients, preparation time, and servings. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L021 | •Allow users to add their own reviews and ratings. | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L022 | 4.Cooking Instructions: | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L023 | •Provide step-by-step cooking instructions, including specific measurements and techniques. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L024 | •Add tips, variations, and cooking notes for each recipe. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L025 | 5.Ingredients List: | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L026 | •Include a list of ingredients with their quantities and measurements, making it easy for users to  | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L027 | create shopping lists. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L028 | 6.Recipe Search and Filter: | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L029 | •Implement advanced search and filtering options, enabling users to refine recipe searches by  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L030 | dietary restrictions, cooking time, or cuisine. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L031 | 7.User Accounts (Optional): | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L032 | •Allow users to create accounts, save their favorite recipes, and submit their own recipes. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L033 | •Implement features for users to customize serving sizes and generate ingredient lists accordingly. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L034 | 8.Comments and Discussions: | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L035 | •Integrate a comments section for users to leave feedback, ask questions, or share their cooking  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L036 | experiences. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L037 | •Encourage a sense of community and collaboration among users. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L038 | 9.Print and Share: | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L039 | •Enable users to print recipes in a formatted and printer-friendly layout. | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP42-L040 | •Include social media sharing options for users to share their favorite recipes with friends and  | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP42-L041 | family. | experiment.js recipe workflow; domains.js recipe-book resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP43 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP43-L001 | 42.A customer visits the online electricity bill payment website to conveniently manage their  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L002 | electricity payments. After logging in, they are directed to the dashboard, where they can view their  | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L003 | current bill amount, due date, and payment history. The customer enters their payment details,  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L004 | selects a preferred payment method (e.g., credit card, debit card, net banking, or digital wallet), and  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L005 | confirms the transaction. Upon successful payment, a receipt is generated, which can be downloaded  | core.js download; experiment.js export/print; special.js reports/templates | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L006 | or emailed. The website also offers options for setting up automatic payments and sending bill  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP43-L007 | reminders via SMS or email. | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP43-L008 | ADMIN | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L009 | oLogin page | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L010 | oUpdating the formula for the calculation of bill for each customer with respect to    | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L011 | the given constraints, | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L012 | oIf the type of the EB connection is domestic, Calculate the amount to be paid as follows | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L013 | oFirst 100 units –Rs. 1 per unit | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L014 | o101-200 units –Rs. 2.50 per unit | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L015 | o201-500 Its –Rs. 4 per unit | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L016 | o501 units –Rs. 6 per unit | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L017 | oIf the type of the EB connection is commercial, Calculate the amount to be paid as follows | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L018 | oFirst 100 units –Rs. 2 per unit | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L019 | o101-200 units –Rs. 4.50 per unit | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L020 | o201-500 its –Rs. 6 per unit | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L021 | o501 units –Rs. 7 Per unit | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L022 | oPage updated every two months (Duration by start and end date), last date of payment  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L023 | oFine amount calculation (each date after the last date Rs.10 will be added as fine. | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L024 | CUSTOMER | experiment.js electricity workflow; domains.js electricity resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP43-L025 | oRegistration Page | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L026 | oLogin Page | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP43-L027 | oBill payment by any one payment method | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP44 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP44-L001 | 43.A student logs into the online placement examination website using their credentials. They are  | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L002 | guided to an examination dashboard where they can start their placement test at the scheduled time.  | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L003 | After completing the test, the system automatically evaluatesthe answers and generates a score.  | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L004 | Once the results are processed, the website displays a list of students who have passed the exam,  | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L005 | along with their scores and rankings. Students can also view detailed feedback on their performance  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP44-L006 | and download their scorecards. The website ensures secure access to results and provides an option  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP44-L007 | to apply for re-evaluation if needed. | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L008 | ADMIN  | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L009 | •Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP44-L010 | •Providing Login rights to Candidate for attending exam | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP44-L011 | •Scheduling the Exam | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L012 | •Loading the question  | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L013 | •Publishing the Result | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L014 | CANDIDATE | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L015 | •Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP44-L016 | •Attempt the exam by choosing allotted schedule | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP44-L017 | •Seeing the Result | experiment.js exam workflow; domains.js placement resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |

### EXP45 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP45-L001 | 44.An admin logs into the website’s backend to upload a new painting for display on the rating and  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L002 | review webpage. Once uploaded, the painting is visible to customers, who can view it and submit  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L003 | their ratings. The rating system allows users to provide a score(e.g., 1 to 5 stars) and leave written  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L004 | feedback. As customers submit their reviews, the webpage dynamically displays the average rating  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L005 | along with a summary of positive and negative comments. The admin can monitor the feedback,  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L006 | respond to reviews, and analyze customer sentiments to make informed decisions about future  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L007 | displays or sale | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L008 | ADMIN | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L009 | •Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L010 | •Loading and Collecting reviews of both positive and negative about the Painting  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L011 | •Updating the webpage by new painting based on schedules  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L012 | •Before updating the new painting show the positive and negative reviews of the  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L013 | previous painting  | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L014 | •Login and Registration for owner of the painting  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L015 | •Collecting money based on the number of days the painting will be available (Package)  | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L016 | for  customers review  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L017 | •Mode of Transaction  | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L018 | •Customer Login through Social media or mail id authentication | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L019 | OWNER | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L020 | •Registration includes submitting painting and choosing package and completion of       | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L021 | payment  | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L022 | •Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L023 | •Seeing their painting reviews | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L024 | CUSTOMER | experiment.js painting workflow; domains.js painting-rating resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP45-L025 | •Authenticated Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP45-L026 | •Submitting reviews about the painting  | experiment.js reviewPanel/admin responses; special.js painting summary | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP46 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP46-L001 | 45.An employee visits the income tax calculation webpage, where they are prompted to enter their financial  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L002 | details, such as annual salary, bonuses, and other taxable income. The webpage also allows the employee to  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L003 | input deductions and exemptions, such as insurance premiums or retirement contributions. After submitting  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L004 | the information, the system calculates the applicable income tax based on the latest tax slabs and displays a  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L005 | detailed breakdown, including total tax liability, net income after tax, and any tax-saving tips. The employee  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L006 | can then download a summary report for their records or use the data for filing their tax returns. | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L007 | ADMIN | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L008 | •Login | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L009 | •Update the fields required for collecting input from employee  | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L010 | •Modify the input value taken for the calculation based on government norms, Now your  | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L011 | page can take the norms as follows, | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L012 | Net Taxable Income = (Gross pay * 12) -(House Rent Allowance *12) - | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L013 | (Standard Detection =50,000)-{(Pension*12   Maximum     | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L014 | detection of this category is 150,000} -) -(Health   | experiment.js listItems/home toolbar | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L015 | Insurance * 12  | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L016 | if net taxable is below 500,000/-tax is Nil. if it exceeds condition then Tax | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L017 | calculation   | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L018 | slab rate    given below is to be followed.  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L019 | 0 to 250,000   tax=0,  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L020 | 250,001 to 500,000  tax= 5% (net taxable income –250,000)   | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L021 | 500,001 to 1000,000   tax= 12, 500 + 20% (net taxable income –500,000 )  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L022 | if the income > 10,00,000,  tax= 112,500 + 30% (net taxable income – | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L023 | 10,00,000).    | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L024 | EMPLOYEE | experiment.js tax workflow; domains.js income-tax resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP46-L025 | •Login by any of the existing authenticated credentials (like social media login or  gmail  | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L026 | login) | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP46-L027 | •Calculating Tax page | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

### EXP47 source features

| Source line | Requirement / context as extracted | Implementation mapping | Status | Test status |
|---|---|---|---|---|
| EXP47-L001 | 46.A customer accesses the online phone bill payment website to manage their monthly phone bill payments.  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L002 | Upon logging in, the customer is directed to their account dashboard, where they can view their current bill  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L003 | details, including the due date, outstanding amount, and any previous payments. The customer can choose  | experiment.js phone workflow; domains.js phone-bill resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP47-L004 | to pay the entire bill or a custom amount, selecting from various payment options such as credit/debit cards,  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L005 | net banking, or mobile wallets. After entering their payment information, they confirm the transaction, and  | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L006 | the system processes the payment securely. Upon successful completion, a confirmation message is displayed,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP47-L007 | and a receipt is emailed to the customer. The website also offers features like setting up recurring payments,  | Local status/notification/reference/map demonstrations | SIMULATED / partial | Node render PASS; browser BLOCKED |
| EXP47-L008 | viewing detailed billing history, and enabling notifications for upcoming due dates. | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L009 | ADMIN | experiment.js phone workflow; domains.js phone-bill resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP47-L010 | •Login page | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L011 | •Page updated every month (Duration by start and end date), last date of payment  | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L012 | Fine amount calculation (each date after the last date Rs.10 will be added as fine) | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L013 | CUSTOMER | experiment.js phone workflow; domains.js phone-bill resource forms; source view | Mapped context; parity review OPEN | Node render PASS; browser BLOCKED |
| EXP47-L014 | •Registration Page | experiment.js home/about/details/art; per-site HTML/CSS | Partial presentation; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L015 | •Login Page | experiment.js → account / rolebar; special.js → voting | SIMULATED; see limitations | Node render PASS; browser BLOCKED |
| EXP47-L016 | •Bill payment by any one payment method | core.js calculations; special.js finance forms; experiment.js loans | Implemented demo; see limitations | Node render PASS; browser BLOCKED |

