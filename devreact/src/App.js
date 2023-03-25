import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Instamart from './components/Instamart'
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/Hooks/UserContext";
import Store from "./Utils/Store";
import { Provider } from "react-redux";

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

const Instamart = lazy(() => import("./components/Instamart"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [user, setUser] = useState({
    name: "Shivam",
    email: "shivam@gmail.com",
  });
  return (
    <div className="App">
      <Provider store={Store}>
      <UserContext.Provider
        value={{
          user:user,
          setUser:setUser
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
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
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...!!</h1>}>
            {" "}
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;

/**
 *
 *
 *
 * PROPS DRILLING
 *   App
 *     (state=user)
 *       - <Body user={user}/>
 *         - <RestaurantContainer user ==>
 *            - RestaurantCard user={user}
 *               - <h4> {user} <h4/>
 *
 *
 *
 */
