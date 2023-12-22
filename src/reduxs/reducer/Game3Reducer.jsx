import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachCuoc: [
    { img: "./assets/baucua/bau.png", id: "bau", score: 0 },
    { img: "./assets/baucua/ca.png", id: "ca", score: 0 },
    { img: "./assets/baucua/cua.png", id: "cua", score: 0 },
    { img: "./assets/baucua/ga.png", id: "ga", score: 0 },
    { img: "./assets/baucua/nai.png", id: "nai", score: 0 },
    { img: "./assets/baucua/tom.png", id: "tom", score: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { img: "./assets/baucua/nai.png", id: "nai", score: 0 },
    { img: "./assets/baucua/tom.png", id: "tom", score: 0 },
    { img: "./assets/baucua/ga.png", id: "ga", score: 0 },
  ],
};

const Game3Reducer = createSlice({
  name: "Game3Reducer",
  initialState,
  reducers: {
    datCuoc: (state, action) => {
      const { tangGiam, id } = action.payload;
      let diemCuoc = 0;
      if (state.tongDiem === 0 && tangGiam) {
        return;
      }
      if (tangGiam) {
        diemCuoc = 100;
      } else {
        diemCuoc = -100;
      }

      const selectedQuanCuoc = state.danhSachCuoc.find(
        (item) => item.id === id
      );
      if (selectedQuanCuoc) {
        if (!tangGiam && selectedQuanCuoc.score === 0) {
          return;
        }
        selectedQuanCuoc.score += diemCuoc;
        state.tongDiem -= diemCuoc;
      }
    },
    gamePlay: (state, action) => {
      //tạo xúc xắc random
      const randomArrXucXac = [];
      for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * 6);
        const arrXucXac = state.danhSachCuoc[randomNum];
        randomArrXucXac.push(arrXucXac);
      }
      state.mangXucXac = randomArrXucXac;
      //xử lý tăng thưởng điểm
      randomArrXucXac.forEach((xucXacNN, index) => {
        let indexDsCuoc = state.danhSachCuoc.findIndex(
          (qc) => qc.id === xucXacNN.id
        );
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[indexDsCuoc].score;
        }
      });
      //xử lý hoàn tiền
      state.danhSachCuoc.forEach((qc, index) => {
        let indexXxNN = randomArrXucXac.findIndex((xxnn) => xxnn.id === qc.id);
        if (indexXxNN !== -1) {
          state.tongDiem += qc.score;
        }
      });
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
        return { ...qc, score: 0 };
      });
    },
    restartGame: (state, action) => {
      state.tongDiem = 1000;
    },
  },
});

export const { datCuoc, gamePlay, restartGame } = Game3Reducer.actions;

export default Game3Reducer.reducer;
