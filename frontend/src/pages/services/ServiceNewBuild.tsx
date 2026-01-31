/* ==================================
   BARACBAU – Frontend / Pages
   ServiceNewBuild.tsx
   Service page – New construction
   ================================== */

import "./services.css";

import ServiceHeader from "@/components/services/ServiceHeader";
import newBuildImage from "@/assets/images/HB_Neubau.jpg";

export default function ServiceNewBuild() {
  return (
    <div className="service-page">
      <ServiceHeader
        backgroundImage={newBuildImage}
        title="Neubau"
        subtitle="Von der Idee bis zur schlüsselfertigen Umsetzung"
      />
    </div>
  );
}
