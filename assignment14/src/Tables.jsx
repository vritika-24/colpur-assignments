import { useState } from "react";

function Tables() {

    const [number, setNumber] = useState(5);

    return (
        <div className="container mt-5">

            <h1>Multiplication Table</h1>

            <input
                type="number"
                className="form-control mb-3"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <div className="list-group">

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div
                        className="list-group-item"
                        key={i}
                    >
                        {number} × {i} = {number * i}
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Tables;