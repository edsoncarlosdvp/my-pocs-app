import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { RootState } from "./store/Stock"
import { decrement, increment } from "./store/Stock/Stock.store"

export const App = (): JSX.Element => {

    const dispatch = useDispatch()
    const stock = useSelector((state: RootState) => state.stock)

    return (
        <div className="App">
            <div className="App-header">
                {stock.counter}
                <button className="button" onClick={() => dispatch(increment())}>Increment</button>
                <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}