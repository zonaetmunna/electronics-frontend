import { createBrowserRouter } from "react-router-dom";
import Error from "../view/pages/Error";
import Home from "../view/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default router;