/* ==================================
   BARACBAU – Frontend / app.tsx
   Root application component
   ================================== */

import { AppLayout } from "./layout/AppLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}
