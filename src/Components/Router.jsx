import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import RishiSchoolHomepage from "./RishiSchoolHomepage";
import RishiSchoolContent from "./About";
import First from "./First";
import Rbse from "./Rbse"
import Cbse from "./Cbse";
import Contact from "./Contact"
import CareerPage from "./Careerpage";
import AdmissionPage from "./AdmissionPage";
import GalleryPage from "./Gallery";
import CbseResultPage from "./CbseResultPage"
import RbseResultPage from "./RbseResultPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <RishiSchoolHomepage />,
      },
      { path: "About", element: <RishiSchoolContent/> },
      {path:"Rbse",element:<Rbse/>},
      {path:"Cbse",element:<Cbse/>},
      {path:"Contact", element:<Contact/>},
        {path:"Career", element:<CareerPage/>},
        {path:"admissonpage",element:<AdmissionPage/>},
         {path:"gallery",element:<GalleryPage/>},
            {path:"cbseResult",element:<CbseResultPage/>},
              {path:"RbseResult",element:<RbseResultPage/>}
         
    ],
  },
]);

function Router() {
 
  return <RouterProvider router={router} />;
}

export default Router;
