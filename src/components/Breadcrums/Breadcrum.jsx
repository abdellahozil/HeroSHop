import React from 'react'
import arrow_icon from "../../assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='sm:flex items-center gap-[8px] text-[10px] text-[#5e5e5e] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold py-[40px] justify-center md:px-[130px] capitalize hidden dark:bg-gray-950 dark:text-white'>
        Home <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum