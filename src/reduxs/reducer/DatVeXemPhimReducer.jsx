import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrGheDat: [],
  tongTien: 0,
};

const DatVeXemPhimReducer = createSlice({
  name: "DatVeXemPhimReducer",
  initialState,
  reducers: {
    datGhe: (state, action) => {
      let arrGheDatUpdate = [...state.arrGheDat];
      let index = arrGheDatUpdate.findIndex(
        (gheDat) => gheDat.soGhe === action.payload.soGhe
      );

      if (index !== -1) {
        arrGheDatUpdate.splice(index, 1);
      } else {
        arrGheDatUpdate.push(action.payload);
      }
      state.arrGheDat = arrGheDatUpdate;
      state.tongTien = tinhTongTien(arrGheDatUpdate);
      console.log(state.arrGheDat);
    },
    xoaGhe: (state, action) => {
      //console.log(action)
      console.log("Deleting seat:", action.payload);
      state.arrGheDat = state.arrGheDat.filter(
        (gheDat) => gheDat.soGhe !== action.payload
      );
      state.tongTien = tinhTongTien(state.arrGheDat);
    },
  },
});

const tinhTongTien = (arrGheDat) => {
  return arrGheDat.reduce((tong, gheDat) => tong + gheDat.gia, 0);
};

export const { datGhe, xoaGhe } = DatVeXemPhimReducer.actions;

export default DatVeXemPhimReducer.reducer;
