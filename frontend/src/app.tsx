/* ==================================
   BARACBAU – Frontend / App.tsx
   Root application component
   ================================== */

import { AppLayout } from "./layout/AppLayout";
import Home from "./pages/home";

export default function App() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}
