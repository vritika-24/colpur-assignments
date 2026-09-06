function OddEven() {
    let number = 10;
    let result;

    if (number % 2 === 0) {
        result = "Even Number";
    } else {
        result = "Odd Number";
    }

    return (
        <div>
            <h1>Odd or Even</h1>
            <h2>Number: {number}</h2>
            <h2>{result}</h2>
        </div>
    );
}

export default OddEven;