import { useParams, Link } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "₹50,000",
            image: "https://via.placeholder.com/500x350?text=Laptop",
            description: "A powerful laptop suitable for students, programming and office work.",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Mobile Phone",
            price: "₹25,000",
            image: "https://via.placeholder.com/500x350?text=Mobile",
            description: "A modern smartphone with a high-quality display and powerful performance.",
            category: "Electronics"
        },
        {
            id: 3,
            name: "Headphones",
            price: "₹2,000",
            image: "https://via.placeholder.com/500x350?text=Headphones",
            description: "Wireless headphones providing clear audio and comfortable listening.",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Smart Watch",
            price: "₹4,000",
            image: "https://via.placeholder.com/500x350?text=Smart+Watch",
            description: "A smart watch with fitness tracking and notification features.",
            category: "Wearable"
        },
        {
            id: 5,
            name: "Keyboard",
            price: "₹1,500",
            image: "https://via.placeholder.com/500x350?text=Keyboard",
            description: "A comfortable keyboard suitable for typing, programming and gaming.",
            category: "Computer Accessories"
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: "₹2,500",
            image: "https://via.placeholder.com/500x350?text=Speaker",
            description: "A portable Bluetooth speaker with powerful and clear sound.",
            category: "Audio"
        }
    ];

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="container mt-5 text-center">
                <h1>Product Not Found</h1>

                <Link
                    to="/product"
                    className="btn btn-primary mt-3"
                >
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <div className="card shadow-lg p-4">

                <div className="row align-items-center">

                    <div className="col-md-6 text-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded"
                        />
                    </div>

                    <div className="col-md-6">

                        <h1 className="mb-3">
                            {product.name}
                        </h1>

                        <h3 className="text-success mb-3">
                            {product.price}
                        </h3>

                        <p>
                            <strong>Category:</strong>{" "}
                            {product.category}
                        </p>

                        <p className="lead">
                            {product.description}
                        </p>

                        <button className="btn btn-success me-2">
                            Buy Now
                        </button>

                        <Link
                            to="/product"
                            className="btn btn-secondary"
                        >
                            Back to Products
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;