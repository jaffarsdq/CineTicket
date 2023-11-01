import BT_topBar from "../../components/BT_topBar"
import DateAndShowBanner from "../../components/BT_DateAndShowBanner"
import MovieTitleBanner from "../../components/BT_MovieTitleBanner"
import BT_TheatreSelectionCard from "../../components/BT_TheatreSelectionCard"

function BuyTickets() {
  return (
    <>
      <MovieTitleBanner/>
      <DateAndShowBanner/>

      <div className="w-9/12 bg-gray-50 mx-auto mt-3">

        <BT_topBar/>

        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
        <BT_TheatreSelectionCard/>
      </div>
    </>
  )
}

export default BuyTickets