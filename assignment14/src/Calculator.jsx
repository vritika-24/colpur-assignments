import { useState } from "react";

function Calculator() {

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");

    function add() {
        setResult(Number(number1) + Number(number2));
    }

    function subtract() {
        setResult(Number(number1) - Number(number2));
    }

    function multiply() {
        setResult(Number(number1) * Number(number2));
    }

    function divide() {
        if (Number(number2) === 0) {
            setResult("Cannot divide by zero");
        } else {
            setResult(Number(number1) / Number(number2));
        }
    }

    return (
        <div className="container mt-5">

            <h1>Calculator</h1>

            <input
                type="number"
                placeholder="Enter first number"
                className="form-control mb-3"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter second number"
                className="form-control mb-3"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
            />

            <button className="btn btn-primary m-1" onClick={add}>
                +
            </button>

            <button className="btn btn-danger m-1" onClick={subtract}>
                -
            </button>

            <button className="btn btn-success m-1" onClick={multiply}>
                ×
            </button>

            <button className="btn btn-warning m-1" onClick={divide}>
                ÷
            </button>

            <h2 className="mt-4">
                Result: {result}
            </h2>

        </div>
    );
}

export default Calculator;