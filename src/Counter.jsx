import { useState} from "react"

function Counter() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount(coumt + 1)


    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>
                Increase
            </button>
            Increase
        </div>
    )
}

export default Counter