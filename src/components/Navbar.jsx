import { Link } from "react-router-dom"
import logo from '../assets/shared/logo.svg'
const Navbar = () => {
  return (
    <main className=" flex justify-between  items-center  float-right w-full ">
        <img className="w-11 ml-10" src={logo} alt="" />
        <nav className="text-sm h-24 font-barlowCondense uppercase tracking-widest	 text-slate-100  w-2/4 flex justify-around items-center backdrop-blur-lg">
            <Link to='/'><span className=" font-bold">00</span> Home</Link>
            <Link to='/Destination'><span className=" font-bold">01</span> Destination</Link>
            <Link to='/Crew'><span className=" font-bold">02</span> Crew</Link>
            <Link to='/Technology'><span className=" font-bold">03</span> Technology</Link>
        </nav>
    </main>
  )
}

export default Navbar