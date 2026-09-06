import { useState } from "react";

function PositiveNegative() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    function checkNumber() {
        if (number > 0) {
            setResult("The number is Positive");
        } else if (number < 0) {
            setResult("The number is Negative");
        } else {
            setResult("The number is Zero");
        }
    }

    return (
        <div>
            <h1>Check Number</h1>

            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <button onClick={checkNumber}>
                Check
            </button>

            <h2>{result}</h2>
        </div>
    );
}

export default PositiveNegative;