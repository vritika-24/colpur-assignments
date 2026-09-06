function Home() {
    return (
        <div className="container mt-5">

            <div className="p-5 bg-primary text-white rounded">
                <h1>Welcome to My React App</h1>

                <p>
                    This website is created using React Router
                    and Bootstrap.
                </p>

                <button className="btn btn-light">
                    Get Started
                </button>
            </div>

            <h2 className="text-center mt-5 mb-4">
                Our Features
            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Calculator
                            </h5>

                            <p className="card-text">
                                Perform basic mathematical calculations.
                            </p>

                            <button className="btn btn-primary">
                                Calculator
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Counter
                            </h5>

                            <p className="card-text">
                                Increase and decrease the counter.
                            </p>

                            <button className="btn btn-success">
                                Counter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Products
                            </h5>

                            <p className="card-text">
                                View our products and their details.
                            </p>

                            <button className="btn btn-warning">
                                Products
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;