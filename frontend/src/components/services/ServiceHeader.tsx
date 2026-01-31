/* ==================================
   BARACBAU – Frontend / Components
   ServiceHeader.tsx
   Services page header (background image, overlay, title)
   ================================== */

import "./ServiceHeader.css";

type ServiceHeaderProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
};

export default function ServiceHeader({
  backgroundImage,
  title,
  subtitle,
}: ServiceHeaderProps) {
  return (
    <section
      className="service-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* optionales Overlay für bessere Lesbarkeit */}
      <div className="service-header-overlay" />

      {/* Text-Inhalt oben rechts */}
      <div className="service-header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
