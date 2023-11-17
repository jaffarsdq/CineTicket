import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

type MovieCardProps = {
    movieImg: string,
   movieName:string,
   movieId:string
}

function Card({movieImg, movieName, movieId}: MovieCardProps) {

    const navigate = useNavigate();

    function navigateToMovieListing() {
        navigate("/movie/listing", {state: {movieId, movieName}});
    }

  return (
   <div onClick={navigateToMovieListing}  className="cursor-pointer relative flex flex-col me-2 carousel-item h-[280px] w-[120px] md:h-[300px] md:w-[165px] lg:h-[280px] lg:w-[150px] xl:h-[410px] xl:w-[190px] mx-8 justify-center">
    <img src={movieImg} className="h-3/4 w-full object-fill rounded-t-lg" alt="" />
    <div className="flex w-full h-7 rounded-b-lg bg-black px-3 gap-2">
        <AiFillStar className="text-xl my-auto text-red-500"/>
        <p className='text-white my-auto tracking-wider'>7/10 1.5k Votes</p>
    </div>
    <div className=" text-black">
        <p className=" text-xl font-medium">{movieName && movieName.length > 15 ?movieName.slice(0,15) + '...' :movieName}</p>
        <p className="text-slate-500">Genre</p>
    </div>
   </div>
  )
}

export default Card