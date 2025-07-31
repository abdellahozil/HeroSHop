import { useState } from "react"
import  cart_icon from "../../assets/cart_icon.png"
import DarkMode from "./DarkMode"
import {UilApps} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
import { Link } from "react-router-dom"
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Men",
    link: "/men"
  },
  {
    id: 3,
    name: "Women",
    link: "/women"
  },
  {
    id: 4,
    name: "Kids",
    link: "/kids"
  }
]


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [menu, setMenu] = useState("")
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white shadow-md duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center md:items-start">
            {/* logo and links section  */}
            <div className='flex items-center gap-4'>
                <a href="#home" className='text-[var(--primary-color)] font-semibold tracking-widest text-2xl sm:text-3xl'>HeroSHop</a>
                <div className='lg:pl-16'>
                <ul className=' items-center gap-4 hidden sm:flex md:flex  lg:flex'>
                  {
                    MenuLinks.map((data, index) => (
                      <li key={index}  className="flex flex-col items-center justify-center gap-1">
                        <p
                          onClick={() => setMenu(data.name)}
                          className='inline-block px-4 sm:px-2 font-semibold 
                          text-gray-500 hover:text-black dark:hover:text-white
                          duration-200
                          '> <Link to={data.link}>{data.name}</Link>
                        </p>
                        {
                          MenuLinks[index].name === menu ? <hr className="border-none w-[50%] h-[3px] rounded-[10px] bg-[#6b7280]"/> : ""
                        }
                      </li>
                    ))
                  }
                </ul>
                </div>
          </div>  
          <div className="flex justify-center items-center pt-2.5">
                  {/* order button section  */}
                  {/* <button className="relative p-3">
                    <img src={cart_icon} alt="" className="text-xl w-7 text-gray-600 dark:text-white"/>
                    <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex
                        items-center justify-center text-xs ">4</div>
                  </button> */}
                  <div>
                    <DarkMode/>
                  </div>
                  <div className="dark:text-gray-500 dark:hover:text-white cursor-pointer ml-2 sm:hidden">
                    <UilApps size="20" color="currentColor" onClick={() => setShowMenu(!showMenu)}/>
                  </div>
          </div>
          <div className={`${showMenu ? "fixed top-0 right-0 w-[200px] h-[100vh] bg-[hsl(0,0%,98%)]  z-20 sm:hidden duration-100" : "fixed top-0 -right-10 w-[0px] h-[100vh] bg-[hsl(0,0%,98%)]  z-20 sm:hidden duration-100"}` }>
            <div className="h-[100vh]">
              <ul className="flex flex-col h-[100%] justify-center items-center gap-10">
                <li>
                  <Link to="/" className="text-xl font-bold text-[hsl(0,0%,20%)] hover:text-[hsl(0,0%,0%)] duration-75" onClick={() => setShowMenu(!showMenu)} >Home</Link>
                </li>
                <li>
                  <Link to="/men" className="text-xl font-bold text-[hsl(0,0%,20%)] hover:text-[hsl(0,0%,0%)] duration-75" onClick={() => setShowMenu(!showMenu)} >Men</Link>
                </li>
                <li>
                  <Link to="/women" className="text-xl font-bold text-[hsl(0,0%,20%)] hover:text-[hsl(0,0%,0%)] duration-75" onClick={() => setShowMenu(!showMenu)} >Women</Link>
                </li>
                <li>
                  <Link to="/kids" className="text-xl font-bold text-[hsl(0,0%,20%)] hover:text-[hsl(0,0%,0%)] duration-75" onClick={() => setShowMenu(!showMenu)}>Kids</Link>
                </li>
              </ul>
            </div>
            <div className={`${showMenu ? "fixed top-5 right-5 cursor-pointer sm:hidden dark:text-[hsl(0,0%,20%)]" : "hidden"} `}>
              <UilTimes size="40" color="currentColor" onClick={() => setShowMenu(!showMenu)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
