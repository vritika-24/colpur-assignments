function CharacterCount() {
    let text = "hello";
    let character = "l";

    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === character) {
            count++;
        }
    }

    return (
        <div>
            <h2>String: {text}</h2>
            <h2>Character: {character}</h2>
            <h2>Count: {count}</h2>
        </div>
    );
}

export default CharacterCount;