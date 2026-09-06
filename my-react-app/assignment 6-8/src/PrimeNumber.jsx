function PrimeNumber() {
    let number = 17;
    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    return (
        <div>
            {isPrime ? (
                <h2>{number} is a Prime Number</h2>
            ) : (
                <h2>{number} is Not a Prime Number</h2>
            )}
        </div>
    );
}

export default PrimeNumber;