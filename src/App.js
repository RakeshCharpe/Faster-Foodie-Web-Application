import React, { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";




// This to make the separate bundle for grocery
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));



const AppLayout = () => {
  return (
    <div className="app">
      {/* Header is intact */}
      <Header />
      {/* Whenever the path changes this outlet is filled with the children defined in component */}
      <Outlet />
      <Footer />
    </div>
  );
};

//Router provide the actual configuration to the app
// informationfor the browser router what will happen at specific path like /about etc.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//we directly used before router concepts
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
