import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from './checkout/page';
import Success from './success/page';
import Fail from './fail/page';

const router = createBrowserRouter([
  {
    path: "/toss",
    element: <Checkout />,
  },
  {
    path: "/toss/success",
    element: <Success />,
  },
  {
    path: "/toss/fail",
    element: <Fail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);