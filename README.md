# Internet Programming Lab

**Student Name:** Joseph Asborn Daniel  
**Register Number:** 192324009  
**Institution:** SIMATS University — Internet Programming Laboratory

A static SIMATS academic experiment portal with individually branded HTML5, CSS3 and vanilla JavaScript websites. Fictional data persists in localStorage. There are no runtime dependencies or required API keys.

**Source audit:** the 43-page supplied PDF contains **47 distinct entries**, despite the requested count of 46. It repeats printed 28 and 36 and skips 29. Every entry is preserved in document order as EXP01–EXP47. EXP29 is event registration, EXP37 is BookHaven, and EXP47 is Phone Bill Payment. Both bus-pass entries and both KodaikanalEats requirement groups are retained.

**Status:** all 47 entry points and local demonstration workflows are implemented. Complete PDF parity remains partial; specific omissions and simplifications are documented in the requirements matrix. Browser QA, GitHub publication and Vercel deployment are not complete. Do not treat this as a fully verified finished submission.

## Run

With Node.js 22 or newer:

```powershell
npm start
```

Open **http://127.0.0.1:4173/**. No `npm install` is needed. Serve over HTTP; opening HTML directly from disk does not support the ES module workflow.

```powershell
npm test
# Keep npm start running in another terminal:
npm run test:browser
```

The browser suite uses installed Chrome through the DevTools Protocol. It was blocked in the agent environment by Windows IPC permissions. Node tests and file/HTTP checks are reported separately; no browser pass is claimed.

## Explore

- Search experiment titles, IDs or features and filter eight categories in the portal.
- Launch an experiment, complete a fictional booking, order, application, vote, calculation or assessment.
- Inspect local history, references and receipts; refresh to demonstrate persistence.
- Use the role selector and Manage demo for listing CRUD, domain records and status responses.
- Export JSON, print/save PDF, mark completed or reset that experiment's data.

Every experiment has its own `index.html`, `style.css` and `script.js`. Shared code lives in `scripts/` and `styles/`. Runtime code uses native browser APIs only. Local SVG illustrations avoid network assets. `docs/experiments.json` contains full source briefs, original numbers and page references.

## Documentation

- [Complete inventory and requirements matrix](docs/requirements-matrix.md)
- [Faculty demonstration routes](docs/experiment-guide.md)
- [Executed test report and verification limits](docs/test-report.md)
- [GitHub / Vercel setup](docs/deployment-guide.md)
- [Progress and resumption notes](docs/progress.md)
- [Original PDF](INTERNET%20PROGRAMMING%20LAB%20EXPERIMENTS.pdf)

To reproduce the source extraction and generated files, use Python 3:

```powershell
py tools/extract_pdf.py
py tools/build.py
py tools/docs.py
```

`tools/build.py` regenerates experiment HTML/CSS/configuration entry files and catalog metadata. Shared workflow modules are maintained directly. Review generated changes before committing.

## Demo boundaries

Accounts and roles are profile simulations, not secure authentication. All payments, OTPs, email/SMS, pass scanning and external integrations are clearly simulated. Attachments retain filename/size metadata, not contents. Use fictional names and `example.test` emails; never enter real credentials, medical data, payment details or government IDs. Voting is fictional and unsuitable for real elections. Tax and electricity use the supplied PDF's explicitly labelled example rules. No current legal, clinical, compliance, journal-indexing or real-time-service claim is made.

## Hosting

`vercel.json` configures framework **Other**, build `npm run build`, and output directory `.`. Static directory deep links have real HTML entry files; no catch-all rewrite is used. There is no verified GitHub repository or live Vercel URL yet. Follow the deployment guide after browser QA and the remaining PDF parity work are complete.
