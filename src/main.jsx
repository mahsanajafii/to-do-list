import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";
import All from "./pages/all/All";
import NotFoundPage from "../src/pages/404/NotFoundPage";
import GroceriesPage from "../src/pages/groceries/GroceriesPage";
import PaymentsPage from "../src/pages/paymentsPage/PaymentsPage";
import CollegePage from "../src/pages/collegePage/CollegePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        path: "/All",
        element: <All />,
      },

      {
        path: "/Groceries",
        element: <GroceriesPage />,
      },
      {
        path: "/College",
        element: <CollegePage />,
      },
      {
        path: "/Payments",
        element: <PaymentsPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
