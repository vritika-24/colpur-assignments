function LargestNumber() {
    let a = 10;
    let b = 25;
    let c = 15;

    let largest;

    if (a > b && a > c) {
        largest = a;
    } else if (b > a && b > c) {
        largest = b;
    } else {
        largest = c;
    }

    return (
        <div>
            <h2>Largest Number = {largest}</h2>
        </div>
    );
}

export default LargestNumber;