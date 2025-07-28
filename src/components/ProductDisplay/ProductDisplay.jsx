import React from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='flex flex-col itmes-center justify-center md:flex-row px-[40px] md:px-[80px] pb-10 dark:bg-gray-950 dark:text-white'>
        <div className='flex gap-[14px]'>
            <div className='flex flex-col gap-[16px]'>
                <img className='md:h-[120px] lg:h-[143px] hidden md:block' src={product.image} alt="" />
                <img className='md:h-[120px] lg:h-[143px] hidden md:block' src={product.image} alt="" />
                <img className='md:h-[120px] lg:h-[143px] hidden md:block' src={product.image} alt="" />
            </div>
            <div className='max-[767px]:mx-auto max-[767px]:pt-5'>
                <img className='max-[767px]:w-[300px] w-[460px] md:h-[392px] lg:h-[461px]' src={product.image} alt="" />
            </div>
        </div>
        <div className='mx-[40px] flex flex-col max-[767px]:text-center  max-[767px]:w-[100%] max-[767px]:mx-auto'>
            <h1 className='text-[#3d3d3d] md:text-[16px] lg:text-[24px] font-bold'>{product.name}</h1>
            <div className='flex items-center mt-[10px] gap-[5px] text-[#1c1c1c] text-[16px] max-[767px]:justify-center'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <div className='flex my-[30px] gap-[30px] text-[16px] font-bold max-[767px]:justify-center'>
                <div className='text-[#818181] line-through'>${product.old_price}</div>
                <div className='text-[#ff4141]'>${product.new_price}</div>
            </div>
            <div className='max-[767px]:w-[100%]'>
                <h1 className='mt-[15px] text-[#656565] text-[16px] font-semibold'>Select size</h1>
                <div className='flex my-[20px] mx-0 gap-[20px] max-[767px]:my-[10px] max-[767px]:justify-center'>
                    <div className='md:py-[8px] md:px-[12px] py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer max-[767px]:py-[8px] max-[767px]:px-[8px] dark:bg-gray-950 dark:text-white dark:border dark:border-white'>S</div>
                    <div className='md:py-[8px] md:px-[12px] py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer max-[767px]:py-[8px] max-[767px]:px-[8px] dark:bg-gray-950 dark:text-white dark:border dark:border-white'>M</div>
                    <div className='md:py-[8px] md:px-[12px] py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer max-[767px]:py-[8px] max-[767px]:px-[8px] dark:bg-gray-950 dark:text-white dark:border dark:border-white'>L</div>
                    <div className='md:py-[8px] md:px-[12px] py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer max-[767px]:py-[8px] max-[767px]:px-[8px] dark:bg-gray-950 dark:text-white dark:border dark:border-white'>XL</div>
                    <div className='md:py-[8px] md:px-[12px] py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer max-[767px]:py-[8px] max-[767px]:px-[8px] dark:dark:te-gray-950 dark:text-white dark:border dark:border-white dark:bg-gray-950'>XXL</div>
                </div>
            </div>
            <p className='mt-[10px]'><span className='font-semibold'>Category : </span>{product.category}</p>
            <p className='mt-[10px]'><span className='font-semibold'>Tags : </span >Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay