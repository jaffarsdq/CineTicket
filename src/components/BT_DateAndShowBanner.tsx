import { AiOutlineDown, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai"
import BT_Date from "./BT_Date"

function DateAndShowBanner() {
  return (
    <div className="h-16 bg-gray-100">
        <div className="w-9/12 h-full mx-auto flex items-center">

            <div className="flex-[1] h-full flex items-center">
                <AiOutlineLeft/>
                    <BT_Date selected={true} date={'01'} day={"wed"} month={"nov"}/>
                    <BT_Date selected={false} date={'02'} day={"tue"} month={"nov"}/>
                    <BT_Date selected={false} date={'03'} day={"fri"} month={"nov"}/>
                    <BT_Date selected={false} date={'04'} day={"sat"} month={"nov"}/>
                    <BT_Date selected={false} date={'05'} day={"sun"} month={"nov"}/>      
                <AiOutlineRight/>
            </div>

            <div className="my-auto border border-l-gray-200 border-y-0 border-e-0  h-full flex-[0.2] flex items-center ">
                <div className="flex items-center gap-7 mx-2 font-medium">
                    Tamil-2D <AiOutlineDown className="text-slate-600 h-[14px]"/>
                </div>
            </div>

            <div className="my-auto border border-l-gray-200 border-y-0 border-e-0 h-full flex-[0.25] flex items-center">
                <div className="flex items-center gap-5 mx-2 text-sm">
                    Filter Price Range <AiOutlineDown className="text-slate-600"/>
                </div>
            </div>

            <div className="my-auto border border-l-gray-200 border-y-0 border-e-0 h-full flex-[0.25] flex items-center">
                <div className="mx-2 text-sm">Filter Show Timings</div>
            </div>

            <div className="my-auto border border-l-gray-200 border-y-0 border-e-0 h-full flex-[0.1] flex items-center justify-center">
                <AiOutlineSearch className="h-16 w-6"/>
            </div>

        </div>
    </div>
  )
}

export default DateAndShowBanner