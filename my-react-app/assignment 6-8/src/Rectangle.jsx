class Rectangle {
    constructor() {
        this.length = 1;
        this.width = 1;
    }

    setLength(length) {
        this.length = length;
    }

    getLength() {
        return this.length;
    }

    setWidth(width) {
        this.width = width;
    }

    getWidth() {
        return this.width;
    }

    calculateArea() {
        return this.length * this.width;
    }

    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }
}

function App() {
    let rectangle = new Rectangle();

    rectangle.setLength(10);
    rectangle.setWidth(5);

    return (
        <div>
            <h2>Length = {rectangle.getLength()}</h2>
            <h2>Width = {rectangle.getWidth()}</h2>
            <h2>Area = {rectangle.calculateArea()}</h2>
            <h2>Perimeter = {rectangle.calculatePerimeter()}</h2>
        </div>
    );
}

export default App;