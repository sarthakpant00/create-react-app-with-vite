# Lab — “First Steps with React + Vite (JS)”

Welcome! In this hands‑on lab you’ll install Node LTS, scaffold a **React** project with **Vite**, and ship a small interactive page — all in pure JavaScript (no TypeScript).

---
## 🧐 What’s Node.js? What’s Vite?

**Node.js** is a fast, event‑driven runtime that lets you run JavaScript outside the browser.
It’s built on Google’s V8 engine, includes a rich standard library, and ships with **npm**
so you can pull in thousands of open‑source packages. In this lab Node supplies the CLI tools
(`npm create`, `npm run`) that scaffold, build, and serve your React project.

**Vite (French for “quick”)** is a modern build tool that pairs an ultra‑light dev server
(powered by native ES modules) with an opinionated Rollup build pipeline. Compared to the
legacy Create React App, Vite starts in ≈ 50 ms, hot‑reloads instantly, and produces smaller,
tree‑shaken production bundles — all with zero config for most apps.



## 🚀 Learning Goals

1. Install the current **Node.js LTS** release on macOS & Windows  
2. Use `npm create vite@latest` to spin up a React app (JS template)  
3. Run the dev server, hot‑reload edits, and build for production  
4. Understand the project layout Vite generates  
5. Submit your finished repo to GitHub

---

## 📋 Prerequisites

| Tool | Min Version | How to check |
|------|-------------|--------------|
| Node.js | 18 LTS (22 preferred) | `node -v` |
| npm     | 9                     | `npm -v` |
| Git     | any                  | `git --version` |

> **Tip (macOS):** Use Homebrew `brew install node`  
> **Tip (Windows):** Run the Node .msi installer or `nvm-windows`.

---

## 🛠️ Setup Steps

1. **Create the project**

   ```bash
   # one‑liner: download & scaffold
   npm create vite@latest 
   // name your app 
   my-react-vite
   // follow instructions choose react with javascript
   cd my-react-vite
   ```

   Select **JavaScript** when prompted.

2. **Install deps & start dev server**

   ```bash
   npm install
   npm run dev       # opens http://localhost:5173
   ```

3. **Open the project in VS Code** (or your editor of choice).

---

## 🔑 What you’ll build

| File / Dir | Why it matters |
|------------|----------------|
| `index.html` | Entrypoint Vite injects your script into |
| `src/main.jsx` | Bootstraps React and mounts to `#root` |
| `src/App.jsx` | Start editing here — hot reload FTW |
| `vite.config.js` | Minimal config; tweak only if needed |

---

## 📝 Assignment Tasks

| # | Task | File |
|---|------|------|
| 1 | Replace the default Vite logo with an emoji or image of your choice | `App.jsx` & `/public` |
| 2 | Style the app (CSS modules or plain CSS) so it looks yours | your choice |
| 3 | **Stretch**: Fetch a random cat fact from `https://catfact.ninja/fact` and display it | new file / component |

---

## 🔄 Build & Preview

```bash
npm run build      # outputs optimized files to /dist
npm run preview    # static server to verify prod build
```

---

## ✅ Submission Checklist

* [ ] App runs locally with `npm run dev`
* [ ] All required tasks complete
* [ ] Code pushed to a **forked GitHub repo** & **make a pull request to public GitHub repo** named `create-react-app-with-vite`
* [ ] `README.md` (this file) lives at project root
* [ ] Repo has at least **one commit per task** with descriptive messages
* [ ] Optional: Production build deployed on Netlify / Vercel (paste URL in GitHub repo description)

When you’re done, paste the GitHub URL into the LMS assignment portal.

---

## 📚 Further Reading

* Node downloads – <https://nodejs.org/en/download>  
* Vite guide – <https://vitejs.dev/guide/>  
* React docs – <https://react.dev/learn>  

Happy coding!
