# DonorHub - Alpha Demo

**A donation campaign management platform for NGOs.**  
Manage campaigns, donors, and track fundraising performance - all in your browser. No coding required to run or explore this demo.

---

## What you’ll do

1. Install one free program (Node.js) if you don’t have it.
2. Run two commands in a terminal.
3. Open the app in your web browser and explore it.

You do **not** need to read or change any code. This guide is written for non-developers.

---

## Step 0: Install Node.js (only if needed)

The app runs with **Node.js**. If you’re not sure whether it’s installed:

1. Open a **terminal** (see Step 2 below for how).
2. Type exactly:  
   `node -v`  
   then press Enter.
3. If you see a version number (e.g. `v20.10.0`), Node.js is installed — go to **Step 1**.
4. If you see an error like “command not found” or “not recognized”:
   - Go to **https://nodejs.org**
   - Download the **LTS** version.
   - Run the installer and follow the steps (default options are fine).
   - **Close and reopen** your terminal, then run `node -v` again to confirm.

---

## Step 1: Get the project on your computer

- If you received a **link to a repository** (e.g. Bitbucket): clone or download the DonorHub project and unzip it (if it’s a zip) into a folder, e.g. `C:\dev\DonorHub` or `~/Documents/DonorHub`.
- If you received the project as a **zip file**: unzip it to a folder you can find easily.

**Tip:** Avoid folder names with special characters or spaces if possible (e.g. `DonorHub` or `DonorHub-Alpha` is fine). If your path has spaces, that’s usually OK; just use the full path in the next steps.

Remember the **full path** to the project folder (e.g. `C:\dev\DonorHub` or `C:\Users\YourName\Downloads\DonorHub`). You’ll need it in Step 3.

---

## Step 2: Open a terminal

You need to run two commands in a **terminal** (command line). Use whichever you have:

- **Windows:**  
  - **PowerShell:** Start menu → type `PowerShell` → open “Windows PowerShell”.  
  - Or **Command Prompt:** Start menu → type `cmd` → open “Command Prompt”.
- **Mac:**  
  - Open **Terminal** (Applications → Utilities → Terminal, or search “Terminal” in Spotlight).

Leave this window open until you’re done with the steps below.

---

## Step 3: Go to the project folder

In the terminal, type the following, but **replace the path** with the actual path to your project folder (from Step 1):

**Windows (PowerShell or Command Prompt):**
```text
cd C:\dev\DonorHub
```
(Use your real path, e.g. `cd C:\Users\YourName\Downloads\DonorHub`.)

**Mac / Linux:**
```text
cd ~/Documents/DonorHub
```
(Use your real path.)

Press Enter. The next commands you run will be “inside” this project folder.

**Check:** You can type `dir` (Windows) or `ls` (Mac/Linux) and press Enter. You should see folders like `client`, `server` and files like `package.json`, `README.md`. If you see those, you’re in the right place.

---

## Step 4: Install the project’s dependencies

Still in the same terminal, in the project folder, type:

```text
npm run install:all
```

Press Enter.

- The first time, this can take **1–3 minutes**. You’ll see a lot of text; that’s normal.
- Wait until the command finishes (you get your prompt back and no red error messages).
- If you see a red error, check the **Troubleshooting** section at the end of this file.

---

## Step 5: Start the application

In the **same** terminal, in the **same** project folder, type:

```text
npm start
```

Press Enter.

- You should see messages like “Server running at http://localhost:5000” and something about the frontend (Vite) running. That means both the backend and the web interface are running.
- **Leave this terminal window open** while you use the app. If you close it, the app will stop.

---

## Step 6: Open the app in your browser

1. Open your web browser (Chrome, Edge, Firefox, Safari, etc.).
2. In the address bar, type exactly:  
   **http://localhost:3000**  
   and press Enter.

You should see the **DonorHub** interface: dashboard, campaigns, donors, reports, etc. You can click around and explore. All data in this alpha is sample data for demonstration.

---

## When you’re done

- Go back to the terminal where `npm start` is running.
- Press **Ctrl + C** (Windows/Linux) or **Ctrl + C** (Mac) to stop the application.
- You can close the terminal.

To run the app again later: open a terminal, go to the project folder (Step 3), then run `npm start` (Step 5) and open **http://localhost:3000** in your browser. You only need to run `npm run install:all` once (or again if the project is updated and you’re told to reinstall).

---

## Troubleshooting

| What you see | What to do |
|--------------|------------|
| **“npm is not recognized”** or **“node is not recognized”** | Install Node.js from https://nodejs.org (LTS), then close and reopen the terminal and try again. |
| **“Port 5000 already in use”** or **“Port 3000 already in use”** | Another program is using that port. Close any other copy of this app, or restart your computer and try again. |
| **Browser shows “Cannot connect” or “This site can’t be reached” at http://localhost:3000 | Make sure the terminal is still open and `npm start` is still running. Wait a few seconds after starting, then refresh the page. |
| **Install or start fails with a red error** | Note the exact error message. Ensure you’re in the project folder (Step 3) and that you ran `npm run install:all` first. If the error mentions “permission” or “access”, try running the terminal as administrator (Windows) or without sudo (Mac/Linux). |

If something still doesn’t work, you can share the exact error message and your operating system (e.g. Windows 10, macOS 14) with Agista or the CTO so they can help.

---

## What to do after exploring

- Form your own opinion on how well the platform fits donation-based fundraising (campaigns, donors, reports, communications).
- Open **DonorHub-Install-Guide-And-Review-Tasks.md** in this project for suggested review questions and presentation points for your CTO discussion.
- Agista or the CTO can then schedule a call to discuss your feedback and next steps.

Thank you for trying the alpha - we’re looking forward to your thoughts.

---

## For developers (optional)

- **Tech stack:** React 18 (Vite), React Router v6, Node.js, Express, REST JSON.
- **Requirements:** Node.js 18+, npm.
- **Scripts:**  
  - `npm run install:all` - install root, server, and client dependencies.  
  - `npm start` - run server (port 5000) and client (port 3000) together.  
  - `npm run server` - backend only.  
  - `npm run client` - frontend only.
- **URLs:** App → http://localhost:3000 ; API → http://localhost:5000.
- **Status:** Alpha - features and API may change.

Detailed feature list, project structure, and API endpoints are available in the repository; this README focuses on getting a non-technical reviewer up and running quickly.
