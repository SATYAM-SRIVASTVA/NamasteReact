import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"; 
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Instamart from './components/Instamart'
import { lazy,Suspense } from "react";
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)

/**
 * -------------LAZY LOADING-----------
 * CHUNKING
 * CODE SPLITTING
 * DYNAMIC BUNDLING
 * LAZY LOADING
 * ON DEMAND LOADING
 * DYNAMIC IMPORTING
 * 
 */

const Instamart =lazy(import("./components/Instamart"))

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element:<Instamart/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
