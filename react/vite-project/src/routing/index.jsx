import { BrowserRouter, Routes, Route  } from "react-router";

import Home from "./home";
import About from "./about";
import CrazyRoute from "./CrazyRoute";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/crazy" element={<CrazyRoute />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;