# Jenil Mashru — Personal Portfolio

Modern, high-performance personal portfolio built with **Vite**, **React**, **Motion**, and custom **React Bits** interactive components (`<DecryptedText />` & `<RotatingText />`).

---

## 📁 Project Architecture

```
portfolio_jenil/
├── dist/                   # Production build bundle (generated via npm run build)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── DecryptedText.jsx   # Decrypted text scrambling effect component
│   │   ├── RotatingText.jsx    # Text rotation spring animation component
│   │   └── RotatingText.css    # Rotating text styling
│   ├── App.jsx             # Main React application component
│   └── main.jsx            # React DOM mounting entry point
├── index.html              # Main HTML document
├── style.css               # Design system & global styles
├── script.js               # Interactive JS physics & navigation handlers
├── vite.config.js          # Vite build configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # NPM dependencies & deployment scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 🌐 One-Click Deployment Instructions

### **Deploying to Vercel**
1. Push this repository to GitHub/GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects `vercel.json` (`npm run build` -> `dist`).
4. Click **Deploy**!

### **Deploying to Netlify**
1. Connect repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**!

### **Deploying to GitHub Pages**
1. Run `npm run build`
2. Deploy the generated `dist/` directory to your `gh-pages` branch.
