import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../view/layout/Dashboard";
import Error from "../view/layout/Error";
import Main from "../view/layout/Main";
import AddProduct from "../view/pages/dashboard/AddProduct";
import AllProducts from "../view/pages/dashboard/AllProducts";
import MakeAdmin from "../view/pages/dashboard/MakeAdmin";
import About from "../view/pages/main/About";
import Cart from "../view/pages/main/Cart";
import Checkout from "../view/pages/main/Checkout";
import Contact from "../view/pages/main/Contact";
import Home from "../view/pages/main/Home";
import Login from "../view/pages/main/Login";
import Signup from "../view/pages/main/Signup";
import SingleProduct from "../view/pages/main/SingleProduct";
import WishList from "../view/pages/main/WishList";


export const router = createBrowserRouter([
  // main
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<Home />
        
      },
      {
        path: "product/:id",
        element: <SingleProduct />
    
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element:<Checkout />

      },
      
      {
        path: "wishlist",
        element: <WishList />
      },
      
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/signup",
        element:<Signup />
      }
      
    ]
  },
  // dashboard
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        path: '/dashboard',
        element:<AllProducts />
      },
      {
        path: 'addProduct',
        element:<AddProduct />
      },
      {
        path: 'makeAdmin',
        element:<MakeAdmin />
      }
    ]
  }
  
]);
