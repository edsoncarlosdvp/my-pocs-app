import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/Stock';
import { asyncIncrement, decrement } from './store/Stock/Stock.store';
import './styles/App.css';

export const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div className="App">
      <div className="App-header">
        {stock.counter}
        <button className="button" onClick={() => dispatch(asyncIncrement(5))}>
          Increment
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};
