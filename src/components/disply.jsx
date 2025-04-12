import React, { useEffect, useRef } from 'react'
import  {Route,Routes, useLocation} from "react-router-dom"
import Displayhome from './displyhome'
import Displayalbum from './displayalbum'
import { albumsData } from '../assets/assets'

const Display = () => {

    const displayref = useRef();
    const loc = useLocation();
    const isalbum = loc.pathname.includes("album");
    const albumID = isalbum?loc.pathname.slice(-1):"";
    const bgcrl = albumsData[Number(albumID)].bgColor;

    useEffect(()=>{
      if (isalbum){
        displayref.current.style.background = `linear-gradient(${bgcrl},#121212)`
      }else{
        displayref.current.style.background = "#121212";
      }
    })

  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<Displayhome/>}></Route>
            <Route path='/album/:id' element={<Displayalbum/>}></Route>
        </Routes>

    </div>
  )
} 

export default Display
