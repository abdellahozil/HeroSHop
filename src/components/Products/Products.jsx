import React from 'react'
import Img1 from "../../assets/women/product_1.png";
import Img2 from "../../assets/women/product_2.png";
import Img3 from "../../assets/women/product_3.png";
import Img4 from "../../assets/women/product_4.png";
import Img5 from "../../assets/women/product_5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "pink",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "brown",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className='pt-10 pb-12 dark:bg-gray-950 dark:text-white'>
        <div className='container'>
          <div className='flex flex-col items-center mb-10 max-w-[600px] mx-auto '>
            {/* header section  */}
            <h1 data-aos="fade-up"  className='text-dark  text-4xl font-semibold mb-3.5'>Top Selling Products</h1>
            <hr data-aos="fade-up"  className='w-[160px] h-[6px] bg-[#252525] rounded-2xl dark:bg-white'/>
          </div>
          {/* body section  */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {
                    ProductsData.map((data) => (
                        <div
                        data-aos="fade-up" 
                        data-aos-delay= {data.aosDelay}
                        key={data.id}
                        className='transition-all duration-[600ms] hover:scale-105 space-y-3 '>
                            <img src={data.img} alt='' className='h-[220px] w-[150px] object-cover rounded-md'/>
                            <div className='text-center sm:text-left'>
                                <h3 className='font-semibold '>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center justify-center sm:justify-start gap-1'>
                                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* view all button */}
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-[#fea928] text-white py-1 px-5 rounded-md">
                View All Products
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products