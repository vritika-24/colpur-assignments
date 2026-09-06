function CapitalizeWords() {
    let text = "hello world from react";

    let result = text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div>
            <h2>Original: {text}</h2>
            <h2>Result: {result}</h2>
        </div>
    );
}

export default CapitalizeWords;