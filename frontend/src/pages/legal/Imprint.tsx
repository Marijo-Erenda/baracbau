/* ==================================
   BARACBAU – Frontend / Pages
   Imprint.tsx
   Legal page – Imprint
   ================================== */

import ServiceHeader from "@/components/services/ServiceHeader";
import HB_Impressum from "@/assets/images/HB_Impressum.jpg";

export default function Imprint() {
  return (
    <div className="service-page">
      <ServiceHeader
        backgroundImage={HB_Impressum}
        title="Impressum"
        subtitle="Angaben gemäß § 5 TMG"
      />
    </div>
  );
}
