import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import BuyTickets from "../pages/BuyTickets";
import BookSeats from "../pages/BookSeats";


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/listing" element={<BuyTickets />} />
            <Route path="/movie/seatSelection" element={<BookSeats />} />
        </Routes>
    );
}

export default MainRoutes;