import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/Item/Item'


const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext)
    console.log(all_products);
    
  return (
    <div className='dark:bg-gray-950 dark:text-white'>
        <img data-aos="fade-up" className='block w-[82%] py-[30px] mx-auto' src={props.banner} alt="" />
        <div data-aos="fade-up" className='flex my-0 sm:mx-[170px] justify-around sm:justify-between items-center m-0'>
            <p>
                <span className='font-semibold'>Showing 1-12</span> out of 36 products 
            </p>
            <div className='sm:py-[10px] sm:px-[20px] border border-[#888] rounded-[40px] px-[10px] cursor-pointer'>
                Sort by <img className='inline-block' src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className='my-[20px] mx-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[80px] place-items-center'>
            {
                all_products.map((item, i) => {
                    if (props.category===item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }else {
                        return null
                    }
                })
            }
        </div>
        <div data-aos="fade-up" className='flex justify-center items-center py-[100px]  mx-auto '>
            <button className='h-[69px] w-[233px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium cursor-pointer dark:bg-transparent dark:text-white dark:border-2 dark:border-white'>Explore More</button>
        </div>
    </div>
  )
}

export default ShopCategory