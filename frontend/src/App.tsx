import { Sidebar } from "./components/layout/sidebar";
import Home from "./pages/home";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 24 }}>
        <Home />
      </main>
    </div>
  );
}
