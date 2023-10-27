import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default MainRoutes;