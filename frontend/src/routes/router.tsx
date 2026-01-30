/* ==================================
   BARACBAU – Frontend / routes
   router.tsx
   Application routing configuration
   ================================== */

import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/layout/AppLayout";
import Home from "@/pages/Home";

/* ================================
   Router Definition
   ================================ */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      /* ============================
         Platzhalter – folgen später
         ============================ */

      // {
      //   path: "unternehmen",
      //   element: <Unternehmen />,
      // },
    ],
  },
]);
