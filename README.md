# Create Pro React App 🚀

A modern, production-ready **React starter template** built with best practices and the latest tools in mind.

Get a fully configured React + TypeScript + Tailwind + Vite project up and running in seconds — complete with routing, dashboard layout, dark mode, reusable UI components, path aliases, ESLint + Prettier, and excellent developer experience.

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

</div>

## ✨ Features

- ⚡ **Vite** — extremely fast dev server & builds
- 🔒 **TypeScript** — full type safety
- 🎨 **Tailwind CSS** — utility-first styling with dark mode
- 🛣 **React Router v6** — clean routing setup
- 📦 Pre-configured **path aliases** (`@components/`, `@pages/`, etc.)
- 🏠 Main layout + 📊 **Dashboard layout** (collapsible sidebar)
- 🧩 Reusable UI components: Button, Card, Modal, Toast, Table, Stat cards...
- 🔥 Hot Module Replacement
- 🎯 ESLint + Prettier
- 📱 Fully responsive & mobile-first
- 🌙 Dark mode built-in (via `class` strategy)

## 🚀 Quick Start

```bash
# 1. Create new project (pick one)
npx @naimdev/create-pro-react-app my-app
# or
yarn @naimdev/create-pro-react-app my-app
# or
pnpm @naimdev/create-pro-react-app my-app

# 2. Go to project folder
cd my-app

# 3. Install dependencies
npm install
# or yarn
# or pnpm install

# 4. Start development server
npm run dev
# or yarn dev
# or pnpm dev


→ Open http://localhost:5173
📁 Project Structure


my-app/
├── public/                 # static files (favicon, robots.txt...)
├── src/
│   ├── assets/             # images, fonts, icons...
│   ├── components/
│   │   ├── common/         # shared / layout-agnostic
│   │   ├── dashboard/      # dashboard-specific components
│   │   ├── layout/         # Navbar, Sidebar, Footer...
│   │   └── ui/             # atomic components → Button, Card, Modal, Toast...
│   ├── constants/          # app-wide constants
│   ├── hooks/              # custom hooks
│   ├── layouts/            # MainLayout, DashboardLayout...
│   ├── pages/              # page components (route-based)
│   │   └── dashboard/      # dashboard sub-pages
│   ├── routes/             # AppRoutes.tsx + route definitions
│   ├── types/              # global TypeScript types
│   ├── utils/              # helper functions, formatters...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # global styles + tailwind imports
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.json
└── ...


🎯 Available Scripts
npm run dev       Start dev server
npm run build     Build for production
npm run preview   Preview production build
npm run lint      Run ESLint

🛠 Tech Stack (2025–2026 versions)

Package,Purpose,Approx. version
react,UI library,^18.3.x
react-router-dom,Routing,^6.26.x
vite,Build tool & dev server,^5.4.x
typescript,Type safety,^5.6.x
tailwindcss,Styling,^3.4.x
lucide-react,Icons,^0.45x
clsx,Class name helper,^2.x
date-fns,Date formatting,^3.x / ^4.x

🎨 Quick Customization Examples
Add a new page

// src/pages/About.tsx
export default function About() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">...</p>
    </div>
  )
}
// src/routes/AppRoutes.tsx
<Route path="/about" element={<About />} />

Use a UI component
import { Button } from '@/components/ui/button'

<Button variant="primary" size="lg">
  Get Started
</Button>

🚀 Deployment (one command builds)


npm run build
# output → dist/

Popular platforms:

Vercel / Netlify / Render / Cloudflare Pages → just connect Git repo
Build command: npm run build
Output directory: dist

📄 License
MIT © 2025–2026 Naimur Rahman Naim
👤 Author
Naimur Rahman Naim
🌐 https://naimworld.netlify.app
🐙 https://github.com/naimekattor
💼 https://linkedin.com/in/naimekattor
📧 naimekattor@gmail.com
Made with ❤️ — star the repo if it saves you time! ⭐


Just select everything inside the ```markdown

Good luck with the template! 🚀