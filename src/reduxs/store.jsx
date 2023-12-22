import { configureStore } from "@reduxjs/toolkit";
import Game1Reducer from "./reducer/Game1Reducer";
import Game2Reducer from "./reducer/Game2Reducer";
import DatVeXemPhimReducer from "./reducer/DatVeXemPhimReducer";
import Game3Reducer from "./reducer/Game3Reducer";

export const store = configureStore({
  reducer: {
    Game1Reducer,
    Game2Reducer,
    DatVeXemPhimReducer,
    Game3Reducer,
  },
});
