import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from './index';

const Stock = createSlice({
  name: 'stock',

  initialState: {
    counter: 0
  },

  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },

    decrement(state) {
      state.counter -= 1;
    }
  }
});

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const { increment, decrement } = Stock.actions;

export const asyncIncrement = (amount: number): AppThunk => {
  return async function (dispatch: AppDispatch) {
    await sleep(3000);
    dispatch(increment(amount));
  };
};

export default Stock.reducer;
