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
      <div className="sidebar__header">
        <h1>BARACBAU</h1>
      </div>

      <ul className="sidebar__menu">
        {menu.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <li key={idx} className="sidebar__menu-item">
              <button
                className="sidebar__button"
                onClick={() =>
                  setOpenIndex(isOpen ? null : idx)
                }
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
