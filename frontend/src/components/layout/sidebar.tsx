/* ==================================
   BARACBAU – Frontend / sidebar.tsx
   Primary navigation component
   ================================== */

import { useState } from "react";
import logo from "@/assets/images/brand_big.jpg";
import "./sidebar.css";

/* ================================
   Types
   ================================ */

type MenuItem = {
  label: string;
  children?: MenuItem[];
};

/* ================================
   Navigation structure
   ================================ */

const menu: MenuItem[] = [
  { label: "Home" },
  { label: "Unternehmen" },
  {
    label: "Leistungen",
    children: [
      { label: "Neubau" },
      { label: "Komplettsanierung" },
      { label: "Modernisierung" },
    ],
  },
  { label: "Projekte" },
  { label: "Karriere" },
  { label: "Kontakt" },
];

/* ================================
   Sidebar Component
   ================================ */

export function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (idx: number, hasChildren?: boolean) => {
    if (!hasChildren) {
      setOpenIndex(null);
      return;
    }

    setOpenIndex(openIndex === idx ? null : idx);
  };

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
                onClick={() => handleClick(idx, !!item.children)}
              >
                {item.label}
              </button>

              {item.children && isOpen && (
                <ul className="sidebar__submenu">
                  {item.children.map((child, cIdx) => (
                    <li
                      key={cIdx}
                      className="sidebar__submenu-item"
                    >
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
