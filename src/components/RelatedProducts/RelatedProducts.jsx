import React from 'react'
import data from "../../assets/data"
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10 dark:bg-gray-950 dark:text-white'>
        <div className='flex flex-col items-center mb-10 max-w-[600px] mx-auto'>
            <h1 data-aos="fade-up"  className='text-dark  text-4xl font-semibold mb-3.5'>Related Products</h1>
            <hr data-aos="fade-up"  className='w-[160px] h-[6px] bg-[#252525] rounded-2xl dark:bg-white'/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 justify-center'>
            {
                data.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts