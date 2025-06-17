import { useState } from 'react';

function Card() {
    // Lógica de Javascript
    const [count, setCount] = useState(0);

    const modifyCount = () => {
        // console.log(count);
        let newCount = count + 1;
        setCount(newCount);
    }

    // HTML resultante
    return (
        <>
            <h1>Mi primer aplicación con React</h1>
            <div className="card">
                <button onClick={modifyCount}>
                count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    );
}

export default Card;