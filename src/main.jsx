import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { MedicamentosContextProvider } from "./context/MedicamentosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MedicamentosContextProvider>
        <App />
    </MedicamentosContextProvider>
);
