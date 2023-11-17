import { useNavigate } from "react-router-dom";

function BT_MiniCard({timing, format, price, config} : {timing: string, format: string, price: string, config: string}) {

  const navigate = useNavigate();

  function onShowSelection() {
    if(config)
    navigate('/movie/seatSelection', {state: {config}});
  }

  return (
    <div onClick={onShowSelection} className="tooltip tooltip-warning" data-tip={price}>
      <div className="flex flex-col justify-center border-[0.2px] border-slate-500/80 h-fit px-5 py-1 rounded-md text-green-500 font-normal m-1 uppercase cursor-default">
        <div className="mx-auto">{timing}</div>
        <div className="">{format}</div>
      </div>
    </div>
  )
}

export default BT_MiniCard