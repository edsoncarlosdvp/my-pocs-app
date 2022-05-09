import { createSlice } from '@reduxjs/toolkit';

const Stock = createSlice({
    name: 'stock',

    initialState: {
        counter: 0
    },

    reducers: {
        increment(state) {
            state.counter += 1
        },

        decrement(state) {
            state.counter -= 1
        },
    }
})

export const { increment, decrement } = Stock.actions
export default Stock.reducer