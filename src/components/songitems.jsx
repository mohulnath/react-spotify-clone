import React, { useContext } from 'react'
import { playercontext } from '../context/playercontext';


const Songitems = (props) => {
   const {playwithid} = useContext(playercontext);
  return (
    <div  onClick={()=>playwithid(props.id)}className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#66666626]'>
      <img className='rounded min-w-[155px] h-[190px]' src={props.image} alt="" />
      <p className='font-bold mt-2 mb-1'>{props.name}</p>
      <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}
 
export default Songitems
