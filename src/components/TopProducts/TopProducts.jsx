import React from 'react'
import Img1 from "../../assets/shirt/shirt.png"
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

const TopProducts = () => {

  const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
  return (
    <div className='dark:bg-gray-950 dark:text-white'>
        <div className='container'>
          <div className='flex flex-col items-center  max-w-[600px] mx-auto mb-30'>
            {/* header section  */}
            <h1 data-aos="fade-up"  className='text-dark  text-4xl font-semibold mb-3.5'>New Collections</h1>
            <hr data-aos="fade-up"  className='w-[160px] h-[6px] bg-[#252525] rounded-2xl dark:bg-white'/>
          </div>
          {/* body section  */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center md:gap-5 '>
            {
                ProductsData.map((data) => (
                    <div 
                    data-aos="zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#fea928] hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                        <div className='h-[100px]'>
                            <img 
                            className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' 
                            src={data.img} alt="" />
                        </div>
                        {/* details section  */}
                        <div className='p-4 text-center'>
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                            <button
                              className="bg-[#fea928] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#fea928]"
                            >
                              Order Now
                            </button>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
    </div>
  )
}

export default TopProducts