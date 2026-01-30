/* ==================================
   BARACBAU – Frontend / routes
   router.tsx
   Application routing configuration
   ================================== */

import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/layout/AppLayout";

/* ==================================
   Pages – Home
   ================================== */
import Home from "@/pages/Home";
import HomeOverview from "@/pages/home/HomeOverview";
import HomeWhy from "@/pages/home/HomeWhy";

/* ==================================
   Pages – Unternehmen
   ================================== */
import Company from "@/pages/company/Company";
import CompanyAbout from "@/pages/company/CompanyAbout";
import CompanyPhilosophy from "@/pages/company/CompanyPhilosophy";
import CompanyQuality from "@/pages/company/CompanyQuality";

/* ==================================
   Pages – Leistungen
   ================================== */
import ServiceNewBuild from "@/pages/services/ServiceNewBuild";
import ServiceRenovation from "@/pages/services/ServiceRenovation";
import ServiceModernization from "@/pages/services/ServiceModernization";

/* ==================================
   Pages – Projekte
   ================================== */
import Projects from "@/pages/projects/Projects";
import ProjectResidential from "@/pages/projects/ProjectResidential";
import ProjectCommercial from "@/pages/projects/ProjectCommercial";
import ProjectReferences from "@/pages/projects/ProjectReferences";

/* ==================================
   Pages – Karriere
   ================================== */
import Career from "@/pages/career/Career";
import CareerJobs from "@/pages/career/CareerJobs";
import CareerTraining from "@/pages/career/CareerTraining";
import CareerInitiative from "@/pages/career/CareerInitiative";

/* ==================================
   Pages – Kontakt
   ================================== */
import Contact from "@/pages/contact/Contact";
import ContactDirections from "@/pages/contact/ContactDirections";

/* ==================================
   Pages – Rechtliches
   ================================== */

import Imprint from "@/pages/legal/Imprint";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";


/* ================================
   Router Definition
   ================================ */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      /* ============================
         Home
         ============================ */

      {
        index: true,
        element: <Home />,
      },
      {
        path: "home/ueberblick",
        element: <HomeOverview />,
      },
      {
        path: "home/warum",
        element: <HomeWhy />,
      },

      /* ============================
         Unternehmen
         ============================ */

      {
        path: "unternehmen",
        element: <Company />,
      },
      {
        path: "unternehmen/ueber-uns",
        element: <CompanyAbout />,
      },
      {
        path: "unternehmen/philosophie",
        element: <CompanyPhilosophy />,
      },
      {
        path: "unternehmen/qualitaet",
        element: <CompanyQuality />,
      },

      /* ============================
         Leistungen
         ============================ */

      {
        path: "leistungen/neubau",
        element: <ServiceNewBuild />,
      },
      {
        path: "leistungen/komplettsanierung",
        element: <ServiceRenovation />,
      },
      {
        path: "leistungen/modernisierung",
        element: <ServiceModernization />,
      },

      /* ============================
         Projekte
         ============================ */

      {
        path: "projekte",
        element: <Projects />,
      },
      {
        path: "projekte/wohnungsbau",
        element: <ProjectResidential />,
      },
      {
        path: "projekte/gewerbebau",
        element: <ProjectCommercial />,
      },
      {
        path: "projekte/referenzen",
        element: <ProjectReferences />,
      },

      /* ============================
         Karriere
         ============================ */

      {
        path: "karriere",
        element: <Career />,
      },
      {
        path: "karriere/stellenangebote",
        element: <CareerJobs />,
      },
      {
        path: "karriere/ausbildung",
        element: <CareerTraining />,
      },
      {
        path: "karriere/initiativ",
        element: <CareerInitiative />,
      },

      /* ============================
         Kontakt
         ============================ */

      {
        path: "kontakt",
        element: <Contact />,
      },
      {
        path: "kontakt/anfahrt",
        element: <ContactDirections />,
      },

      /* ============================
        Rechtliches
        ============================ */

      {
        path: "impressum",
        element: <Imprint />,
      },
      {
        path: "datenschutz",
        element: <PrivacyPolicy />,
      },

      /* ============================
         Fallback (optional)
         ============================ */

      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
]);
