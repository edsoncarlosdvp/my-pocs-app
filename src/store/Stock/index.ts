import { configureStore } from '@reduxjs/toolkit';
import Stock from './Stock.store';

const Store = configureStore({
    reducer: {
        stock: Stock
    }
})

export type RootState = ReturnType<typeof Store.getState>
export default Store