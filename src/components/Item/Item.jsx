import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div data-aos="fade-up" className='w-[240px] sm:w-[200px] hover:scale-105 transition-all duration-100'>
      <Link to={`/product/${props.id}`}><img className='rounded-[3px]' onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p className='my-1.5 text-[13px] text-center sm:text-left'>{props.name}</p>
      <div className="flex gap-5 justify-center sm:justify-start">
        <div className="text-[#374151] text-[18px] font-semibold">
            ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
