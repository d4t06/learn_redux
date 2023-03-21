import { useState } from "react";
import { useSelector,  useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"

const Counter = () => {

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0)
    const count = useSelector(state => state.counter.count);

    const handleReset = () => {
        setAmount(0)
        dispatch(reset())
    }

    console.log('counter re-render');

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div className="cta">
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className="div">
                <input type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
                
            </div>
            <div className="">
            <button onClick={() => dispatch(incrementByAmount(+amount || 0))}>Add amount</button>
                <button onClick={handleReset}>Rest</button>
            </div>
        </div>
    )
}

export default Counter