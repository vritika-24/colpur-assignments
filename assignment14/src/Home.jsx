import { Link } from "react-router-dom"
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

            <div className="row mt-4">

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Calculator
                            </h5>

                            <p className="card-text">
                                Perform basic mathematical calculations.
                            </p>
                        <Link to="/calculator">
                            <button className="btn btn-primary">
                                Calculator       
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Counter
                            </h5>

                            <p className="card-text">
                                Increase and decrease the counter.
                            </p>
                        <Link to="/counter">
                            <button className="btn btn-success">
                                Counter
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Tables
                            </h5>

                            <p className="card-text">
                                Generate multiplication tables.
                            </p>
                        <Link to="/tables">
                            <button className="btn btn-warning">
                                Tables
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;