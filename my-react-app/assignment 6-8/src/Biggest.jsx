class Biggest {
    constructor(array) {
        this.array = array;
    }

    display() {
        let largest = this.array[0];

        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] > largest) {
                largest = this.array[i];
            }
        }

        return largest;
    }
}

function App() {
    let numbers = new Biggest([10, 25, 7, 40, 15]);

    return (
        <div>
            <h2>Largest Element = {numbers.display()}</h2>
        </div>
    );
}

export default App;
