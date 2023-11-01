import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import BuyTickets from "../pages/buyTickets/BuyTickets";


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buytickets" element={<BuyTickets />} />
        </Routes>
    );
}

export default MainRoutes;