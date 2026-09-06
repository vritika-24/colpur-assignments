import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Calculator from "./Calculator.jsx";
import Counter from "./Counter.jsx";
import Tables from "./Tables.jsx";

function App() {
    return (
        <BrowserRouter>

            <NavBar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/calculator" element={<Calculator />} />

                <Route path="/counter" element={<Counter />} />

                <Route path="/tables" element={<Tables />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;