import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    My React App
                </Link>

                <div className="navbar-nav">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/about">
                        About
                    </Link>

                    <Link className="nav-link" to="/calculator">
                        Calculator
                    </Link>

                    <Link className="nav-link" to="/counter">
                        Counter
                    </Link>

                    <Link className="nav-link" to="/tables">
                        Tables
                    </Link>

                    <Link className="nav-link" to="/product">
                        Product
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default NavBar;