import { createRoot } from "react-dom/client";
import "./styles/global.css";

// importing the AppRouter component
import AppRouter from "@routes/AppRouter";

createRoot(document.getElementById("root")!).render(<AppRouter />);
