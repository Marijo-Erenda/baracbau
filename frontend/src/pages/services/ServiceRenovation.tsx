/* ==================================
   BARACBAU – Frontend / Pages
   ServiceRenovation.tsx
   Service page – Complete renovation
   ================================== */

import ServiceHeader from "@/components/services/ServiceHeader";
import HB_Komplettsanierung from "@/assets/images/HB_Komplettsanierung.jpg";

export default function ServiceRenovation() {
  return (
    <div className="service-page">
      <ServiceHeader
        backgroundImage={HB_Komplettsanierung}
        title="Komplettsanierung"
        subtitle="Hochwertige Sanierung aus einer Hand"
      />
    </div>
  );
}
