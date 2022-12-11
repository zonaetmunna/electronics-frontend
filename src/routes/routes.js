import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../view/layout/Dashboard";
import Error from "../view/layout/Error";
import Main from "../view/layout/Main";
import AddProduct from "../view/pages/dashboard/AddProduct";
import About from "../view/pages/main/about/About";
import Cart from "../view/pages/main/cart/Cart";
import Home from "../view/pages/main/home/Home";
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
        path: "/wishlist",
        element: <WishList />
      },
      
      {
        path: "/about",
        element: <About />
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