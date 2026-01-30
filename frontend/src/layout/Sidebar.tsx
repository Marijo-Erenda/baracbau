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
  path?: string;
  children?: MenuItem[];
};


/* ================================
   Navigation structure
   ================================ */

const menu: MenuItem[] = [
  {
    label: "Home",
    path: "/",
    children: [
      { label: "Überblick", path: "/" },
      { label: "Warum BARACBAU", path: "/#warum" },
    ],
  },
  {
    label: "Unternehmen",
    path: "/unternehmen",
    children: [
      { label: "Über uns", path: "/unternehmen/ueber-uns" },
      { label: "Philosophie", path: "/unternehmen/philosophie" },
      { label: "Qualität & Werte", path: "/unternehmen/qualitaet" },
    ],
  },
  {
    label: "Leistungen",
    children: [
      { label: "Neubau", path: "/leistungen/neubau" },
      { label: "Komplettsanierung", path: "/leistungen/komplettsanierung" },
      { label: "Modernisierung", path: "/leistungen/modernisierung" },
    ],
  },
  {
    label: "Projekte",
    path: "/projekte",
    children: [
      { label: "Wohnungsbau", path: "/projekte/wohnungsbau" },
      { label: "Gewerbebau", path: "/projekte/gewerbebau" },
      { label: "Referenzen", path: "/projekte/referenzen" },
    ],
  },
  {
    label: "Karriere",
    path: "/karriere",
    children: [
      { label: "Stellenangebote", path: "/karriere/stellenangebote" },
      { label: "Ausbildung", path: "/karriere/ausbildung" },
      { label: "Initiativbewerbung", path: "/karriere/initiativ" },
    ],
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    children: [
      { label: "Kontaktformular", path: "/kontakt" },
      { label: "Anfahrt", path: "/kontakt/anfahrt" },
    ],
  },
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
