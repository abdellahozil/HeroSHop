import React, { useState } from 'react'
import LightButton from "../../assets/lightDarkMode/light-mode-button.png"
import DarkButton from "../../assets/lightDarkMode/dark-mode-button.png"

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement //html element
    React.useEffect(() => {
      if(theme === "dark") {
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }else {
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }, [theme])
  return (
    <div className='relative'>
      <img src={LightButton} alt="" 
            className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}
            absolute right-0 z-10 transition-all duration-100`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      <img src={DarkButton} alt="" className={`w-12 cursor-pointer`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
    </div>
  )
}

export default DarkMode
