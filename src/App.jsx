import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./Pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { loader as LandingLoader } from "./Pages/Landing";
import { loader as SingleCocktailLoader } from "./Pages/Cocktail";
import { action as NewsLetterAction } from "./Pages/Newsletter";

////nesting the router Pages so all its connected to the Home Page , also need to outlet component to connect the parent to children component

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        ////using Outlet inside the component and index: true instead of <Link to={}/> component

        ////That way we have the Main page and the contents of the actual page set as the element we have index to true
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: LandingLoader(queryClient),
      },
      {
        ////Inside another page you can deeply nest multiple components with attributes , style , links etc
        path: "about",
        element: <About />,
        //Children element are not needed unless you want to deeply nest the Page as long as you want
        children: [
          { index: true, element: <h2> Our Company</h2> },
          { path: "person", element: <h2> Company description</h2> },
        ],
      },
      {
        path: "cocktail/:id",
        ////Loader basically passes the following Element:
        //! "cocktail/ this text or ID or what ever it is passed the "/" which can be used inside the loader element "
        errorElement: <SinglePageError />,
        loader: SingleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        ////Action type works just like loader passes elements but it this case is used for HTML elements for a form submission
        action: NewsLetterAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};
export default App;
