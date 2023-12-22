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
import StyledComponents from "./Components/StyledComponents/DemoJss/StyledComponents";
import DemoUseStateHook from "./Components/Hook/DemoUseStateHook/DemoUseStateHook";
import DemoUseEffect from "./Components/Hook/DemoUseEffect/DemoUseEffect";
import DemoUseCallBack from "./Components/Hook/DemoUseCallBack/DemoUseCallBack";
import DatVeXemPhim from "./Components/DatVeXemPhim/DatVeXemPhim";
import DemoUseSpring from "./Components/ReactAnimation/useSptring/DemoUseSpring";
import Game3 from "./Components/Game3/Game3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          <Route index element={<Home />} />
          <Route path="demo1" element={<Game1 />}></Route>
          <Route path="demo2" element={<Game2 />}></Route>
          <Route path="demo3" element={<Game3 />}></Route>

          <Route path="demo-datvephim" element={<DatVeXemPhim />}></Route>

          <Route path="styled-component" element={<StyledComponents />}></Route>
          <Route path="demo-usestate" element={<DemoUseStateHook />}></Route>
          <Route path="demo-useeffect" element={<DemoUseEffect />}></Route>
          <Route path="demo-usecallback" element={<DemoUseCallBack />}></Route>
          <Route path="demo-usespring" element={<DemoUseSpring />}></Route>

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
