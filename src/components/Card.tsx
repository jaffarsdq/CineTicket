import {AiFillStar} from 'react-icons/ai'

type MovieCardProps = {
    cardImg: string
}

function Card({cardImg}: MovieCardProps) {
  return (
   <div className="h-[450px] w-[242px] ">
    <img src={cardImg} className=" rounded-t-lg w-full h-[80%]" alt="" />
    <div className="flex w-full h-7 rounded-b-lg bg-black px-3 gap-2">
        <AiFillStar className="text-xl my-auto text-red-500"/>
        <p className='text-white my-auto tracking-wider'>7/10 1.5k Votes</p>
    </div>
    <div className=" text-black">
        <p className=" text-xl font-medium">Movie name</p>
        <p className="text-slate-500">Genre/genre/genre</p>
    </div>
   </div>
  )
}

export default Card