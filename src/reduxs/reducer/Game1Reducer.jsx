import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: true, // true là tài(3->11 điểm), false là xỉu(12>)
  arrRoll: [
    { id: 1, img: "./assets/game1/1.png" },
    { id: 1, img: "./assets/game1/1.png" },
    { id: 1, img: "./assets/game1/1.png" },
  ],

  numWin: 0,
  numPlay: 0,
  finalRes: true,
};

const Game1Reducer = createSlice({
  name: "Game1Reducer",
  initialState,
  reducers: {
    gamePlay: (state, action) => {
      state.res = action.payload;
    },
    playGameAction: (state) => {
      //random roll
      const newRoll = [];
      for (let i = 0; i < 3; i++) {
        const numRandom = Math.floor(Math.random() * 6) + 1;
        const rollRandom = {
          id: numRandom,
          img: `./assets/game1/${numRandom}.png`,
        };
        newRoll.push(rollRandom);
      }
      state.arrRoll = newRoll;
      //set play
      state.numPlay += 1;

      //set win
      let sumNum = state.arrRoll.reduce((sumNum, roll) => {
        return (sumNum += roll.id);
      }, 0);

      if (sumNum > 11) {
        state.finalRes = true;
      } else if (sumNum <= 11) {
        state.finalRes = false;
      }
      if ((sumNum > 11 && state.res) || (sumNum <= 11 && !state.res)) {
        state.numWin += 1;
      }
    },
  },
});

export const { gamePlay, playGameAction } = Game1Reducer.actions;

export default Game1Reducer.reducer;
