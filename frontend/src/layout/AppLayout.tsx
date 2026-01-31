/* ==================================
   BARACBAU – Frontend / Layout
   AppLayout.tsx
   Global application layout
   ================================== */

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

/* ================================
   App Layout Component
   ================================ */

export function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-layout__content">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
