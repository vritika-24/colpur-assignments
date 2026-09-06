class Calculator {
    calculateSum(number1, number2) {
        return number1 + number2;
    }

    calculateDifference(number1, number2) {
        return number1 - number2;
    }
}

function App() {
    let calculator = new Calculator();

    let sum = calculator.calculateSum(20, 10);
    let difference = calculator.calculateDifference(20, 10);

    return (
        <div>
            <h2>Sum = {sum}</h2>
            <h2>Difference = {difference}</h2>
        </div>
    );
}

export default App;