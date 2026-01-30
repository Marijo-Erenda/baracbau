/* ==================================
   BARACBAU – Frontend / Layout
   AppLayout.tsx
   Global application layout
   ================================== */

import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

/* ================================
   Types
   ================================ */

type AppLayoutProps = {
  children: React.ReactNode;
};

/* ================================
   App Layout Component
   ================================ */

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-layout__content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
