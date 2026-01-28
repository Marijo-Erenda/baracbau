/* ==================================
   BARACBAU – Frontend / sidebar.tsx
   Primary navigation component
   ================================== */

import { useState } from "react";
import logo from "@/assets/images/brand_big.jpg";

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
      { label: "Kompetenzen" },
    ],
  },
  { label: "Karriere" },
  { label: "Kontakt" },
];

export function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <img src={logo} alt="BARACBAU Logo" />
      </div>

      {/* Navigation */}
      <ul className="sidebar__nav">
        {menu.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <li key={idx} className="sidebar__item">
              <button
                className="sidebar__link"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                {item.label}
              </button>

              {item.children && isOpen && (
                <ul className="sidebar__submenu">
                  {item.children.map((child, cIdx) => (
                    <li key={cIdx} className="sidebar__submenu-item">
                      {child.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
