import { AiOutlineHeart, AiOutlineInfoCircle, AiOutlineMobile } from "react-icons/ai"
import {IoFastFoodOutline} from "react-icons/io5"
import BT_MiniCard from "./BT_MiniCard"
import { BsDot } from "react-icons/bs"

type MovieShows = {
    id: string, // show id
    timing: string,
    format: string,
    price: number,
    noOfSeats: number,
    seatConfiguration: string
}

function formatTime(timeString: string) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

function BT_TheatreSelectionCard({ name, shows } : {name: string, shows: [MovieShows]}) {
  return (
    <div className="text-xs flex p-3 border border-x-0 border-b-0 border-t-state-500"> 
        <div className="flex flex-[0.3]">
            <div className="flex flex-[0.9] flex-col">

                <div className="uppercase flex gap-3 items-center font-semibold">
                    <AiOutlineHeart className="h-7 w-5 text-slate-400"/> {name}
                </div>

                <div className="flex gap-4 items-center text-[14px] ms-8 p-3 w-full">
                    <span className="flex items-center text-green-500">
                        <AiOutlineMobile className="text-xl"/> M-Ticket
                    </span> 
                    <span className="flex items-center text-orange-400">
                        <IoFastFoodOutline className="text-xl"/>Food & Beverage
                    </span> 
                </div>

            </div>
            <div className="flex uppercase font-medium items-start ms-auto mt-1 gap-1 text-slate-500">
                <AiOutlineInfoCircle className={"mt-[2px]"}/>
                info
            </div>
        </div>
        <div className="flex flex-[0.7] flex-col w-full px-8 pt-4">
            <div className="flex flex-wrap">
                    {shows.map((show : MovieShows) => {
                        return <BT_MiniCard config={show.seatConfiguration} format={show.format} price={show.price.toString()} timing={formatTime((new Date(show.timing).toLocaleTimeString()))} key={show.id} />;
                    })}
            </div>
            <div className="text-xs flex items-center justify-start">
                <BsDot className="text-yellow-500 text-4xl"/>Non-cancellable
            </div>
        </div>
    </div>
  )
}

export default BT_TheatreSelectionCard