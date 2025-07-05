import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import ModernSchoolHomepage from "./ModernSchoolHomepage";
import ModernSchoolContent from "./About";
import First from "./First";
import Rbse from "./Rbse"
import Cbse from "./Cbse";
import Contact from "./Contact"
import CareerPage from "./Careerpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <ModernSchoolHomepage />,
      },
      { path: "About", element: <ModernSchoolContent/> },
      {path:"Rbse",element:<Rbse/>},
      {path:"Cbse",element:<Cbse/>},
      {path:"Contact", element:<Contact/>},
        {path:"Career", element:<CareerPage/>}
    ],
  },
]);

function Router() {
 
  return <RouterProvider router={router} />;
}

export default Router;
