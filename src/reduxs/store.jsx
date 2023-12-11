import { configureStore } from "@reduxjs/toolkit";
import Game1Reducer from "./reducer/Game1Reducer";
import Game2Reducer from "./reducer/Game2Reducer";
export const store = configureStore({
  reducer: {
    Game1Reducer,
    Game2Reducer,
  },
});
