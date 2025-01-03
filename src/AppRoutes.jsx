import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./routes/About/About";
import Home from "./routes/Home/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
