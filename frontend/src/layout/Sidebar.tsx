/* ==================================
   BARACBAU – Frontend / sidebar.tsx
   Primary navigation component
   ================================== */

import { useState } from "react";
import { NavLink } from "react-router-dom";

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

const MENU: MenuItem[] = [
  {
    label: "Home",
    children: [
      { label: "Überblick", path: "/home/ueberblick" },
      { label: "Warum BARACBAU", path: "/home/warum" },
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
   Helper Components
   ================================ */

function SidebarLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `sidebar__sublink ${isActive ? "is-active" : ""}`
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
}

/* ================================
   Sidebar Component
   ================================ */

export function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleGroup = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const closeMenu = () => {
    setOpenIndex(null);
  };

  return (
    <nav className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <img src={logo} alt="BARACBAU Logo" />
      </div>

      {/* Navigation */}
      <ul className="sidebar__nav">
        {MENU.map((item, index) => {
          const hasChildren = Boolean(item.children?.length);
          const isOpen = openIndex === index;

          return (
            <li key={item.label} className="sidebar__item">
              {/* Main item */}
              {hasChildren ? (
                <button
                  className="sidebar__link sidebar__toggle"
                  onClick={() => toggleGroup(index)}
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  to={item.path!}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? "is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )}

              {/* Submenu */}
              {hasChildren && isOpen && (
                <ul className="sidebar__submenu">
                  {item.children!.map(child => (
                    <li key={child.label}>
                      <SidebarLink
                        to={child.path!}
                        label={child.label}
                        onClick={closeMenu}
                      />
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
