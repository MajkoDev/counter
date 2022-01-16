import {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return ( 
        <div className="container">
            <h3 className="title">Counter</h3>
            <h1>{count}</h1>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
     );
}
 
export default Counter;