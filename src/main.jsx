import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto font-serif">
    <RouterProvider router={router} />
  </div>
);
