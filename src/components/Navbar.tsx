import profile from '../assets/profile.png'
import ticket from '/ticket.png'
import {BiSearch} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'

function Navbar() {
  return (
    <div className=" bg-gray-800 text-white shadow w-full">
        <div className="w-9/12 mx-auto navbar">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-sm md:text-lg max-w-[180px]">
                    Cine
                    <img src={ticket} alt="" className='h-10 w-10'/>
                    Ticket
                </a>
                <div className="form-control w-1/2 md:border bg-white h-10 rounded-md flex flex-row">
                    <BiSearch className=" flex-[0.1] hidden md:block text-lg my-auto mt-[9px] text-slate-600 h-6 ms-auto"/>
                    <input type="text" placeholder="Search" className="ms-[-16px] flex-[0.9] h-6 my-auto input ps-0 text-black focus:outline-none hidden md:block md:w-auto " />
                </div>
            </div>
            <div className="flex-none gap-2 me-5">
                <RxHamburgerMenu className="text-2xl md:hidden"/>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={profile} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-800 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;