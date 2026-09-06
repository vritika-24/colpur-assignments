import React, { useState } from "react";

function Calculator() {
    const [display, setDisplay] = useState("0");
    const [firstNumber, setFirstNumber] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForNumber, setWaitingForNumber] = useState(false);

    const [history, setHistory] = useState([]);

    function enterNumber(number) {
        if (waitingForNumber) {
            setDisplay(number);
            setWaitingForNumber(false);
        } else {
            if (display === "0") {
                setDisplay(number);
            } else {
                setDisplay(display + number);
            }
        }
    }

    function enterDecimal() {
        if (waitingForNumber) {
            setDisplay("0.");
            setWaitingForNumber(false);
        } else if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    }

    function chooseOperator(selectedOperator) {
        const number = Number(display);

        if (firstNumber === null) {
            setFirstNumber(number);
        } else if (operator) {
            calculate();
        }

        setOperator(selectedOperator);
        setWaitingForNumber(true);
    }

    function calculate() {
        const secondNumber = Number(display);

        if (firstNumber === null || operator === null) {
            return;
        }

        let result;

        if (operator === "+") {
            result = firstNumber + secondNumber;
        } else if (operator === "-") {
            result = firstNumber - secondNumber;
        } else if (operator === "*") {
            result = firstNumber * secondNumber;
        } else if (operator === "/") {
            if (secondNumber === 0) {
                setDisplay("Error");
                setFirstNumber(null);
                setOperator(null);
                return;
            }

            result = firstNumber / secondNumber;
        }

        const calculation =
            firstNumber + " " + operator + " " + secondNumber + " = " + result;

        setHistory([...history, calculation]);

        setDisplay(String(result));
        setFirstNumber(null);
        setOperator(null);
        setWaitingForNumber(true);
    }

    function clearCalculator() {
        setDisplay("0");
        setFirstNumber(null);
        setOperator(null);
        setWaitingForNumber(false);
    }

    function deleteNumber() {
        if (display.length === 1) {
            setDisplay("0");
        } else {
            setDisplay(display.slice(0, -1));
        }
    }

    function percentage() {
        const result = Number(display) / 100;
        setDisplay(String(result));
    }

    function changeSign() {
        if (display !== "0") {
            setDisplay(String(Number(display) * -1));
        }
    }

    function square() {
        const number = Number(display);
        const result = number * number;

        setDisplay(String(result));
    }

    function squareRoot() {
        const number = Number(display);

        if (number < 0) {
            setDisplay("Error");
        } else {
            setDisplay(String(Math.sqrt(number)));
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div style={styles.container}>

            <h1>React Calculator</h1>

            <div style={styles.calculator}>

                <div style={styles.display}>
                    {display}
                </div>

                <div style={styles.row}>
                    <button onClick={clearCalculator} style={styles.button}>
                        C
                    </button>

                    <button onClick={deleteNumber} style={styles.button}>
                        DEL
                    </button>

                    <button onClick={percentage} style={styles.button}>
                        %
                    </button>

                    <button
                        onClick={() => chooseOperator("/")}
                        style={styles.operator}
                    >
                        ÷
                    </button>
                </div>

                <div style={styles.row}>
                    <button
                        onClick={() => enterNumber("7")}
                        style={styles.button}
                    >
                        7
                    </button>

                    <button
                        onClick={() => enterNumber("8")}
                        style={styles.button}
                    >
                        8
                    </button>

                    <button
                        onClick={() => enterNumber("9")}
                        style={styles.button}
                    >
                        9
                    </button>

                    <button
                        onClick={() => chooseOperator("*")}
                        style={styles.operator}
                    >
                        ×
                    </button>
                </div>

                <div style={styles.row}>
                    <button
                        onClick={() => enterNumber("4")}
                        style={styles.button}
                    >
                        4
                    </button>

                    <button
                        onClick={() => enterNumber("5")}
                        style={styles.button}
                    >
                        5
                    </button>

                    <button
                        onClick={() => enterNumber("6")}
                        style={styles.button}
                    >
                        6
                    </button>

                    <button
                        onClick={() => chooseOperator("-")}
                        style={styles.operator}
                    >
                        -
                    </button>
                </div>

                <div style={styles.row}>
                    <button
                        onClick={() => enterNumber("1")}
                        style={styles.button}
                    >
                        1
                    </button>

                    <button
                        onClick={() => enterNumber("2")}
                        style={styles.button}
                    >
                        2
                    </button>

                    <button
                        onClick={() => enterNumber("3")}
                        style={styles.button}
                    >
                        3
                    </button>

                    <button
                        onClick={() => chooseOperator("+")}
                        style={styles.operator}
                    >
                        +
                    </button>
                </div>

                <div style={styles.row}>
                    <button
                        onClick={changeSign}
                        style={styles.button}
                    >
                        +/-
                    </button>

                    <button
                        onClick={() => enterNumber("0")}
                        style={styles.button}
                    >
                        0
                    </button>

                    <button
                        onClick={enterDecimal}
                        style={styles.button}
                    >
                        .
                    </button>

                    <button
                        onClick={calculate}
                        style={styles.operator}
                    >
                        =
                    </button>
                </div>

                <div style={styles.row}>
                    <button
                        onClick={square}
                        style={styles.extraButton}
                    >
                        x²
                    </button>

                    <button
                        onClick={squareRoot}
                        style={styles.extraButton}
                    >
                        √
                    </button>
                </div>

            </div>

            <div style={styles.history}>
                <h2>Calculation History</h2>

                {history.length === 0 ? (
                    <p>No calculations yet.</p>
                ) : (
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={scrollToTop}
                style={styles.topButton}
            >
                Scroll to Top
            </button>

        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        fontFamily: "Arial",
        padding: "30px",
        minHeight: "1200px"
    },

    calculator: {
        width: "320px",
        margin: "20px auto",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px"
    },

    display: {
        backgroundColor: "black",
        color: "white",
        fontSize: "30px",
        padding: "20px",
        marginBottom: "15px",
        textAlign: "right",
        borderRadius: "5px"
    },

    row: {
        display: "flex",
        gap: "8px",
        marginBottom: "8px"
    },

    button: {
        flex: 1,
        padding: "15px",
        fontSize: "18px",
        cursor: "pointer"
    },

    operator: {
        flex: 1,
        padding: "15px",
        fontSize: "18px",
        backgroundColor: "orange",
        cursor: "pointer"
    },

    extraButton: {
        flex: 1,
        padding: "15px",
        fontSize: "18px",
        backgroundColor: "lightblue",
        cursor: "pointer"
    },

    history: {
        width: "400px",
        margin: "30px auto",
        textAlign: "left",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px"
    },

    topButton: {
        padding: "12px 20px",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default Calculator;