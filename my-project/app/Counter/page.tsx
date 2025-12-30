"use client";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div id="button-container">
            <div className="counter-box">
                <div className="count">{count}</div>
                    <h1>Counter</h1>
                <div className="buttons">
                    <div className="button green">
                        <button onClick={() => setCount(count + 1)}>Increase</button>
                    </div>

                    <div className="button red">
                        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                            Decrease
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
