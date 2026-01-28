/* ==================================
   BARACBAU – Frontend / AppLayout
   Global application layout
   ================================== */

import { Sidebar } from "../components/layout/sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      {children}
    </div>
  );
}
