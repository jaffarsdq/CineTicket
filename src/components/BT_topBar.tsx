import {BsDot} from 'react-icons/bs'
import {FaLanguage} from 'react-icons/fa'

function BT_topBar() {
  return (
    <div className="h-8 flex justify-end items-center gap-4 pe-2">
      <div className="text-xs flex items-center"><BsDot className="text-green-500 text-4xl me-[-8px]"/>AVAILABLE</div>
      <div className="text-xs flex items-center"><BsDot className="text-red-500 text-4xl me-[-8px]"/>FAST FILLING</div>
      <div className="text-xs flex items-center"><FaLanguage className="text-green-500 text-lg me-1"/>SUBTITLES LANGUAGE</div>
    </div>
  )
}

export default BT_topBar