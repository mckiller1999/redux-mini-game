import ReactDOM from "react-dom/client";
//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HomeTemplates } from "./templates/HomeTemplates";
import Home from "./pages/Home";

//redux
import { Provider } from "react-redux";
import { store } from "./reduxs/store";
import Game1 from "./Components/Game1/Game1";
import Game2 from "./Components/Game2/Game2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          <Route index element={<Home />} />
          <Route path="demo1" element={<Game1 />}></Route>
          <Route path="demo2" element={<Game2 />}></Route>

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
