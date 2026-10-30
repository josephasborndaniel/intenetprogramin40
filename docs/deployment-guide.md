# GitHub and Vercel deployment

This is a static HTML/CSS/JavaScript repository with no runtime libraries, mandatory backend, API key or framework. Use Node.js 22 or newer for the local server and checks. Python 3 is only needed to reproduce PDF extraction and generated documentation.

## Local run and checks

```powershell
npm start
```

Open **http://127.0.0.1:4173/**. Keep that terminal running. In a second terminal:

```powershell
npm test
npm run test:browser
```

The browser test uses Chrome's DevTools Protocol through Node's built-in WebSocket, without installing Playwright or another library. Chrome's default Windows path is used. To choose a different installation:

```powershell
$env:CHROME_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
npm run test:browser
```

Browser automation could not run in the agent environment: Chrome and Edge crashed with Windows IPC access-denied errors. Run in a normal local terminal. The suite produces `test-results/browser-results.json` and screenshots. A render smoke check is not a substitute for real browser tests.

## GitHub repository under jsam2005

The initial folder was empty, with no Git repository or remote. Outbound GitHub access was blocked by the environment's configured proxy. No existing remote repository was overwritten. Check the local commit with `git log -1` and status with `git status`.

1. Sign into GitHub as **jsam2005**.
2. Create a repository named **internet-programming-lab**. Keep it empty: do not initialise a README, licence or gitignore.
3. If that name already exists, inspect it first. Do not replace an unrelated project or force-push. Clone/reconcile its history before publishing these files.
4. After all required checks pass, run from this project directory:

```powershell
git status
git branch -M main
git remote -v
git remote add origin https://github.com/jsam2005/internet-programming-lab.git
git push -u origin main
```

Only run `git remote add` if `origin` does not already exist. If local changes remain uncommitted, review and commit them first with `git add .` and a descriptive `git commit -m` message. Authenticate using Git Credential Manager when prompted; never put a token in source files or shell history. The intended repository URL is **https://github.com/jsam2005/internet-programming-lab**; its existence and publication have not been verified.

## Vercel dashboard

1. Sign into Vercel and choose **Add New → Project**.
2. Import `jsam2005/internet-programming-lab` after the GitHub push succeeds.
3. Choose **Other** for the framework preset and repository root (`.`) as Root Directory.
4. Build Command: **npm run build**. Install Command can be left empty (there are no dependencies; the default npm install is also harmless).
5. Output Directory: **.** (repository root). The included `vercel.json` declares this configuration.
6. No environment variables are required. Deploy and record the actual production URL shown by Vercel.
7. Verify the actual URL and several direct deep links, including the first, mixed restaurant/rooms, and final experiment. Do not report success based on this guide alone.

No catch-all rewrite is configured. Each `/experiments/expXX-name/` path has its own `index.html`; CSS/JS imports use relative URLs. Trailing slash redirects preserve the static directory structure.

## Vercel CLI alternative

On your machine with network access:

```powershell
npx vercel@latest login
npx vercel@latest --prod
```

The CLI is an optional deployment tool, not an application dependency. Follow account prompts, choose **Other**, and retain the checked-in configuration. Pin the chosen CLI version if installing it for repeated automation. No authenticated Vercel CLI was available in the agent environment.

## Verify production

Replace the URL with the actual deployment URL:

```powershell
$env:TEST_URL = 'https://your-actual-project.vercel.app'
npm run test:browser
```

Check `/`, `/experiments/exp01-library/`, `/experiments/exp33-kodaikanaleats/`, `/experiments/exp43-electricity/`, and `/experiments/exp47-phone-bill/`. Confirm that modules/assets load, reload a deep link directly, and repeat mobile/keyboard checks. Browser state is origin-specific: local demo data will not transfer automatically to Vercel; exported JSON is a record backup, not an authentication database.
