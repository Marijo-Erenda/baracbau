/* ==================================
   BARACBAU – Frontend / Pages
   ServiceModernization.tsx
   Service page – Modernization
   ================================== */

import ServiceHeader from "@/components/services/ServiceHeader";
import HB_Modernisierung from "@/assets/images/HB_Modernisierung.jpg";

export default function ServiceModernization() {
  return (
    <div className="service-page">
      <ServiceHeader
        backgroundImage={HB_Modernisierung}
        title="Modernisierung"
        subtitle="Zeitgemäße Lösungen für bestehende Gebäude"
      />
    </div>
  );
}
