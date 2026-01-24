import { useState } from "react";

type MenuItem = {
  label: string;
  children?: MenuItem[];
};

const menu: MenuItem[] = [
  { label: "Home" },
  { label: "Unternehmen" },
  {
    label: "Leistungen",
    children: [
      { label: "Portfolio" },
      { label: "Kompetenzen" }
    ]
  },
  { label: "Karriere" },
  { label: "Kontakt" },
];

export function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav style={{ width: 240, padding: 16, background: "#f8f9fa" }}>
      {menu.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "8px 0",
              border: "none",
              background: "none",
              fontWeight: 600
            }}
          >
            {item.label}
          </button>
          {item.children && openIndex === idx && (
            <div style={{ paddingLeft: 16 }}>
              {item.children.map((child, cIdx) => (
                <div key={cIdx} style={{ padding: "4px 0" }}>
                  {child.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
