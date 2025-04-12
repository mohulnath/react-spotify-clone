import React from 'react'
import { useNavigate } from 'react-router-dom'

const Albumitems = (items) => {

    const nav =  useNavigate()

  return (
    <div onClick={()=>nav(`/album/${items.id}`)} className='min-w-[200px] max-w-[300px] p-2 px-2 rounded cursor-pointer hover:bg-[#66666626]'>
      <img className='rounded' src={items.image} alt="" />
      <p className='font-bold mt-2 mb-1'>{items.name}</p>
      <p className='text-slate-200 text-sm'>{items.desc}</p>
    </div>
  )
}

export default Albumitems
