"use client";
import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    return (
        <div className="parent-container min-h-screen flex justify-center items-center  bg-linear-to-tr from-black to-gray-700">
            <div className="card-container flex flex-col items-center justify-center gap-5 p-3 bg-gray-800 rounded-4xl ">
                <h1 className="text-3xl">Counter</h1>
                <div className="text-4xl"> {count}</div>
                <div className="button-container">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-green-500 hover:bg-green-700 p-3 m-1 rounded-3xl"
                    >
                        Increase
                    </button>

                    <button 
                        onClick={()=>{count>0? setCount(count -1 ):count }}
                        className="bg-red-500 hover:bg-red-700 p-3 m-1 rounded-3xl"
                    >
                        Decrease
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
