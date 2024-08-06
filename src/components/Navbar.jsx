import logo from "../assets/logo.png"
import { FaTelegram } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaVk } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="w-[70px] aspect-square flex flex-shrink-0 items-center">
        <img src={logo} alt="DH" className="w-full h-full object-cover mx-2" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaTelegram />
        <FaGithub />
        <FaInstagram />
        <FaVk />
      </div>
    </nav>
  )
}

export default Navbar