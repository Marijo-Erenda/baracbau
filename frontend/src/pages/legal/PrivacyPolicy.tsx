/* ==================================
   BARACBAU – Frontend / Pages
   PrivacyPolicy.tsx
   Legal page – Privacy Policy
   ================================== */

import ServiceHeader from "@/components/services/ServiceHeader";
import HB_Datenschutz from "@/assets/images/HB_Datenschutz.jpg";

export default function PrivacyPolicy() {
  return (
    <div className="service-page">
      <ServiceHeader
        backgroundImage={HB_Datenschutz}
        title="Datenschutz"
        subtitle="Informationen zum Schutz Ihrer Daten"
      />
    </div>
  );
}
