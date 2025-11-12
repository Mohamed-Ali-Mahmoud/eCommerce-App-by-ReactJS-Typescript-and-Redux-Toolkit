import { createRoot } from "react-dom/client";
import "./styles/global.css";

// import redux providor
import { Provider } from "react-redux";
// import store
import { store } from "@store/index";
// importing the AppRouter component
import AppRouter from "@routes/AppRouter";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
