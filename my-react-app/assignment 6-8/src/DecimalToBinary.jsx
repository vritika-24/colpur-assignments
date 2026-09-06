function DecimalToBinary() {
    let number = 10;

    let binary = number.toString(2);

    return (
        <div>
            <h2>Decimal Number: {number}</h2>
            <h2>Binary Number: {binary}</h2>
        </div>
    );
}

export default DecimalToBinary;