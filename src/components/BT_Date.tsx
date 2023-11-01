type ticketDay = {
  selected: boolean,
  date: string,
  month: string,
  day: string
}

function BT_Date({selected, date, month, day}: ticketDay) {
  return (
    <div className={`flex flex-col h-14 w-14 text-center rounded-lg text-[10px] ${(selected)?`bg-[#c75943] text-white hover:text-white` : null}  uppercase font-medium hover:text-[#c75943]`}>
        <div className="pt-1">{day}</div>
        <div className="text-lg mt-[-4px]">{date}</div>
        <div className="mt-[-3px]">{month}</div>
    </div>
  )
}

export default BT_Date  