import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="container mt-5 text-center">

            <div className="card shadow p-5">

                <h1>Counter</h1>

                <h2 className="my-4">
                    {count}
                </h2>

                <div>

                    <button
                        className="btn btn-success m-2"
                        onClick={() => setCount(count + 1)}
                    >
                        Increment
                    </button>

                    <button
                        className="btn btn-danger m-2"
                        onClick={() => setCount(count - 1)}
                    >
                        Decrement
                    </button>

                    <button
                        className="btn btn-secondary m-2"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Counter;