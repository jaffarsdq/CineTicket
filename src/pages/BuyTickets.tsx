import BT_topBar from "../components/BT_topBar"
import DateAndShowBanner from "../components/BT_DateAndShowBanner"
import MovieTitleBanner from "../components/BT_MovieTitleBanner"
import BT_TheatreSelectionCard from "../components/BT_TheatreSelectionCard"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../config/AxiosInstance"
import HomeLayout from "../layout/HomeLayout"

type MovieShows = {
  id: string, // show id
  timing: string,
  format: string,
  price: number,
  noOfSeats: number,
  seatConfiguration: string 
}

type TheatreData = {
  id: string, // theatreId
  theatreName: string,
  shows: [MovieShows]
}

type theatre = {
  city: string,
  createdAt: string,
  updatedAt: string,
  movies: [string],
  name: string,
  owner: string,
  pincode: number,
  _v: number,
  _id: string
}

type show = {
  createdAt: string,
  format: string,
  movieId: string,
  noOfSeats: number,
  price: number,
  timing: string,
  updatedAt: string,
  _v: number,
  _id: string,
  theatreId: theatre,
  seatConfiguration: string
}

type TheatreState = {
  [key: string]: TheatreData
} ;


function BuyTickets() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const [theatreData, setTheatreData] = useState<TheatreState>({});

  async function fetchShowDetails() {
    try {
      const response = await axiosInstance.get(`mba/api/v1/shows?movieId=${state.movieId}`);
      const shows = response.data.data;
      const showState : TheatreState = {};
      shows.map((show: show) => {
          if(show.theatreId._id in showState) {
              showState[show.theatreId._id].shows.push({
                  id: show._id, // show id
                  timing: show.timing,
                  format: show.format,
                  price: show.price,
                  noOfSeats: show.noOfSeats,
                  seatConfiguration: show.seatConfiguration ? show.seatConfiguration : ""
              });
          } else {
              showState[show.theatreId._id] = {
                  id: show.theatreId._id, // theatreId
                  theatreName: show.theatreId.name,
                  shows: [{
                      id: show._id, // show id
                      timing: show.timing,
                      format: show.format,
                      price: show.price,
                      noOfSeats: show.noOfSeats,
                      seatConfiguration: show.seatConfiguration ? show.seatConfiguration : ""
                  }]
              };
          }
      });

      console.log(showState);
      setTheatreData(showState);


    } catch(error) {
        console.log(error);
    }
  }

  useEffect(() => {
      if(!state || !state.movieName) navigate("/"); 
      fetchShowDetails();
  }, []);

  return (
    <HomeLayout>
      <MovieTitleBanner state={state}/>
      <DateAndShowBanner/>

      <div className="w-9/12 bg-white mx-auto mt-3 mb-3">

        <BT_topBar/>

        {theatreData && Object.keys(theatreData).map((theatreId: string) => {
            return <BT_TheatreSelectionCard shows={theatreData[theatreId].shows} key={theatreId} name={theatreData[theatreId].theatreName} />;
        })}

      </div>
    </HomeLayout>
  )
}

export default BuyTickets