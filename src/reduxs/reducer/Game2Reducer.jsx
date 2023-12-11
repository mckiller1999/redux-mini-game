import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrGame: [
    { id: "keo", img: "./assets/game2/keo.png", gamePlay: false },
    { id: "bua", img: "./assets/game2/bua.png", gamePlay: false },
    { id: "bao", img: "./assets/game2/bao.png", gamePlay: true },
  ],
  res: "default",
  numPlay: 0,
  numWin: 0,
  com: { id: "keo", img: "./assets/game2/keo.png" },
};

const Game2Reducer = createSlice({
  name: "Game2Reducer",
  initialState,
  reducers: {
    //người chơi chọn item
    gamePlay2: (state, action) => {
      //console.log(action);
      let arrUpdate = [...state.arrGame];
      arrUpdate = arrUpdate.map((item) => {
        if (item.id === action.payload) {
          return { ...item, gamePlay: true };
        }
        return { ...item, gamePlay: false };
      });
      state.arrGame = arrUpdate;
    },
    //random item máy
    gameplaying2: (state) => {
      let randomNum = Math.floor(Math.random() * 3);
      let randomItem = state.arrGame[randomNum];
      state.com = randomItem;
    },
    //set kết quả
    resGame: (state) => {
      //console.log(action);
      let player = state.arrGame.find((item) => item.gamePlay === true);
      let comp = state.com;
      //console.log(player.id);
      //console.log(comp.id);

      let finalRes = 0;
      switch (player.id) {
        case "keo":
          if (comp.id === "keo") {
            state.res = "draw!!";
          } else if (comp.id === "bua") {
            state.res = "you lose!!";
          } else {
            state.res = "you win";
            finalRes++;
          }
          break;
        case "bua":
          if (comp.id === "bua") {
            state.res = "draw!!";
          } else if (comp.id === "bao") {
            state.res = "you lose!!";
          } else {
            state.res = "you win";
            finalRes++;
          }
          break;
        case "bao":
          if (comp.id === "bao") {
            state.res = "draw!!";
          } else if (comp.id === "keo") {
            state.res = "you lose!!";
          } else {
            state.res = "you win";
            finalRes++;
          }
          break;
        default:
          state.res = "default";
      }
      state.numPlay += 1;
      state.numWin += finalRes;
    },
  },
});

export const { gamePlay2, gameplaying2, resGame } = Game2Reducer.actions;

export default Game2Reducer.reducer;
