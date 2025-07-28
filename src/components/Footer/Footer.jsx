import React from 'react'
import Banner from "../../assets/website/footer-pattern.jpg"
import Logo from "../../assets/website/logo_big.png"
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
        <div className="container ">
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center gap-7 '>
                <div className='flex items-center gap-4 mt-4'>
                   <img src={Logo} alt="" />
                   <a href="#" className=' font-semibold tracking-widest text-2xl sm:text-3xl'>HeroShop</a>
                </div>
                <ul className='flex list-none gap-4 sm:gap-10'>
                  <li className='text-[12px] sm:text-[16px] cursor-pointer hover:text-[#fea928] hover:scale-110 duration-300 text-gray-200'>Company</li>
                  <li className='text-[12px] sm:text-[16px] cursor-pointer hover:text-[#fea928] hover:scale-110 duration-300 text-gray-200'>Products</li>
                  <li className='text-[12px] sm:text-[16px] cursor-pointer hover:text-[#fea928] hover:scale-110 duration-300 text-gray-200'>Offices</li>
                  <li className='text-[12px] sm:text-[16px] cursor-pointer hover:text-[#fea928] hover:scale-110 duration-300 text-gray-200'>About</li>
                  <li className='text-[12px] sm:text-[16px] cursor-pointer hover:text-[#fea928] hover:scale-110 duration-300 text-gray-200'>Contact</li>
                </ul>
                <div className="flex items-center gap-3 mt-6 m-24">
                  <a href="#">
                    <FaInstagram className="text-3xl mx-4 hover:text-[#fea928] hover:scale-110 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl mx-4 hover:text-[#fea928] hover:scale-110 duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl mx-4 hover:text-[#fea928] hover:scale-110 duration-300" />
                  </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer