import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, About, Landing, Error, Newsletter, Hotels } from "./Pages";

////nesting the router Pages so all its connected to the Home Page , also need to outlet component to connect the parent to children component

import { loader as LandingLoader } from "./Pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        ////using Outlet inside the component and index: true instead of <Link to={}/> component

        ////That way we have the Main page and the contents of the actual page
        index: true,
        element: <Landing />,
        loader: LandingLoader,
      },
      {
        ////Inside another page you can deeply nest multiple components with attributes , style , links etc
        path: "about",
        element: <About />,
        children: [
          { index: true, element: <h2> Our Company</h2> },
          { path: "person", element: <h2> Company description</h2> },
        ],
      },
      {
        path: "cocktails",
        element: <Hotels />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
