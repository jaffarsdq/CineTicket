import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import processSeatConfig from "../utils/ProcessSeatConfig";

type Seat = {
    number: number,
    status: number
}

type Row = {
    number: string,
    seats: Seat[]
}

type SeatState = Row[];

function BookSeats() {

  const {state} = useLocation();

    const [seats, setSeats] = useState<SeatState>([{number: "", seats: [{number: 0, status: 0}]}]);

    function processSeatColor(seat: Seat) {
        if(seat.status == 0) return '';
        else if(seat.status == 1) return 'border border-green-400 hover:bg-yellow-400';
        else if(seat.status == 3) return 'border border-green-400 bg-green-400';
        else return 'border border-gray-400 bg-gray-400';
    }

    function processSeatSelection(seatId: string) {
        const [rowNumber, seatNumber] = seatId.split("-");
        const updatedSeats = seats.map((row: Row) => {
            if(row.number != rowNumber) return row;
            else {
                const updatedRowSeats = row.seats.map((seat: Seat) => {
                    if(seat.number != +seatNumber) return seat;
                    else {
                        seat.status = (seat.status == 1) ? 3 : 1;
                        return seat;
                    }
                });
                row.seats = updatedRowSeats;
                return row;
            }
        });
        setSeats(updatedSeats);
    }

    useEffect(() => {
        const seatsConfigJson = processSeatConfig(state.config);
        console.log(seatsConfigJson);
        setSeats(seatsConfigJson.rows);
    }, []);

  return (
    <HomeLayout>
      <div className="mx-auto min-h-[80vh] flex justify-center bg-white items-center">
        <div className="flex flex-col items-center justify-center p-16">
          {
              seats.map((row: Row) => {
                  return (

                      <div key={row.number} className="flex gap-8">

                          <div className="mt-1">
                            {row.number}
                          </div>

                          <div className="flex gap-2 my-2 mx-1">
                              {row.seats.map((seat: Seat, idx) => {

                                  return (
                                          seat.status == 0 ? 
                                              (
                                                <div key={idx} className="h-[1rem] w-[2rem]"></div>
                                              )
                                                : 
                                              (
                                                <div 
                                                  key={`${row.number}-${seat.number}`}
                                                  onClick={() => processSeatSelection(`${row.number}-${seat.number}`)} 
                                                  className={`${processSeatColor(seat)} w-5 h-5 px-1 border flex justify-center items-center cursor-pointer text-[10px] rounded-sm`}>
                                                    {seat.number}
                                                </div>

                                              )
                                  );
                              })}
                          </div>
                        
                      </div>
                  );
              })
          }
          <div className="border border-b-blue-400 border-t-0 border-x-0 mt-20 h-8 w-[40rem] mx-auto rounded-b-full text-center text-blue-400">
                  Screen this way
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default BookSeats