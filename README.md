# SWAPI LS – Frontend Documentation

This document provides the required information to run, develop, and deploy the **SWAPI LS Frontend**, built with **React**, **Vite**, and **TanStack Query**.

---

## 🚀 Deployment

Production build is available at:

🔗 https://swapils.vercel.app/

---

## 📦 Source Repository

Frontend source code:

🔗 https://github.com/karmap/swapils-frontend

Clone the project:

`git clone https://github.com/karmap/swapils-frontend`

`cd swapils-frontend`

---

## 🛠️ Local Development

Install dependencies:

`npm install`

Run the development server:

`npm run dev`

This starts the app on the default Vite port (usually http://localhost:5173).

---

## 🔧 Environment Variables

The frontend requires a single environment variable for API communication.

Create a `.env` file in the project root:

`VITE_API_BASE=<your-backend-url>`

You can use either a local or remote backend.

Examples:

Local backend
`VITE_API_BASE=http://localhost:8787`

No additional variables are needed.

---

## 📁 Project Structure (Basic Overview)

```
src/
  components/     → UI components
  context/        → Global search context
  hooks/          → Custom hooks
  services/       → API helpers
  pages/          → Page components
  App.jsx         → Root application component
  main.jsx        → Vite entry point
```
---

## 🏗️ Build for Production

Create an optimized build:

`npm run build`

Preview the production build locally:

`npm run preview`

---

## 🌐 Deployment Notes

The project is deployed on Vercel.

- Environment variables must be set in the Vercel dashboard:
  - VITE_API_BASE
- No server-side rendering is used.
- The app is fully static except for API calls to the backend.

---

## ✔️ Summary

To run the frontend, you only need:

1. Clone the repo
2. Install dependencies
3. Create `.env` with `VITE_API_BASE`
4. Run `npm run dev`

That’s it — the frontend will be fully operational.
