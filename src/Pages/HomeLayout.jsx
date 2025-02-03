import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === `loading`;

  return (
    <>
      <Navbar />
      {/* ////Outlet bar works the following , based on the Navlink pressed the Outlet registers the path from the children inside the createBrowserRouter and renders that page Outlet is needed in orderfor the NavLink to work  */}
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
