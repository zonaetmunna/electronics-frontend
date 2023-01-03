import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../view/layout/Dashboard";
import Error from "../view/layout/Error";
import Main from "../view/layout/Main";
import AddProduct from "../view/pages/dashboard/AddProduct";
import About from "../view/pages/main/about/About";
import Cart from "../view/pages/main/cart/Cart";
import Checkout from "../view/pages/main/checkout/Checkout";
import Home from "../view/pages/main/home/Home";
import Login from "../view/pages/main/login/Login";
import Signup from "../view/pages/main/signup/Signup";
import SingleProduct from "../view/pages/main/singleProduct/SingleProduct";
import WishList from "../view/pages/main/wishlist/WishList";


const router = createBrowserRouter([
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
        path: "/product/:id",
        element: <SingleProduct />
    
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element:<Checkout/>

      },
      
      {
        path: "/wishlist",
        element: <WishList />
      },
      
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/signup",
        element:<Signup/>
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
        element:<AddProduct />
      }
    ]
  }
  
]);

export default router;