import { Link } from "react-router-dom";

function Product() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "₹50,000",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QgzOcNrJS09f_xO1b5wEc94uC4jFXSUi9NwF3mGGWg&s=10",width:"60",
            description: "Powerful laptop for study and work."
        },
        {
            id: 2,
            name: "Mobile Phone",
            price: "₹25,000",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaGLt9N6Ev7XsEsMV6Hz0Czp8EzPsBv7oH5qU2HPetw&s=10",width:"60",
            description: "Modern smartphone with great features."
        },
        {
            id: 3,
            name: "Headphones",
            price: "₹2,000",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCt0QXScDtHvqPkezVqFfcx4QSogjwQj3rDVU7rOFJZA&s=10",width:"60",
            description: "Wireless headphones with clear sound."
        },
        {
            id: 4,
            name: "Smart Watch",
            price: "₹4,000",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL2Xq8dKg609sgrVxY3UanNuCfZYszznbUP6UjibCbw&s=10",width:"60",
            description: "Smart watch with fitness tracking."
        },
        {
            id: 5,
            name: "Keyboard",
            price: "₹1,500",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzniy__MNPsYbJnK46pxFfKlyPIPNaVyvH-9V-rysfQ&s",width:"60",
            description: "Comfortable keyboard for everyday use."
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: "₹2,500",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwiJKvC7Z355OTmRht4oIqd5YtNjXaQQ7oJOcN5hbeQ&s=10",width:"60",
            description: "Portable speaker with powerful sound."
        }
    ];

    return (
        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Our Products
            </h1>

            <div className="row">

                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>

                        <div className="card h-100 shadow">

                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.name}
                            />

                            <div className="card-body">

                                <h5 className="card-title">
                                    {product.name}
                                </h5>

                                <h6 className="text-success">
                                    {product.price}
                                </h6>

                                <p className="card-text">
                                    {product.description}
                                </p>

                                <Link
                                    to={`/product/${product.id}`}
                                    className="btn btn-primary"
                                >
                                    More Information
                                </Link>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Product;