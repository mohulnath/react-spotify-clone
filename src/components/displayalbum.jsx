import React, { useContext } from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets  } from '../assets/assets'
import { songsData } from '../assets/assets'
import { playercontext } from '../context/playercontext'

const Displayalbum = () => {

    const {id} = useParams();
    const aboutalbumsdata = albumsData[id];
    const {playwithid} = useContext(playercontext);
    console.log(aboutalbumsdata)
  return (
   <>
   <Navbar/>
    <div className='flex mt-10 gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={aboutalbumsdata.image } alt="" />
        <div className='flex flex-col'>
            <p className=''>PlayList</p>
            <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
            {aboutalbumsdata.name}
            </h2>
            <h4>{aboutalbumsdata.desc}</h4>
            <p className='mt-2'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b> Spotify Clone </b> 33,62, 251 likes
                <b> 50 Songs </b> about 2hr 35 min
            </p>
        </div>
    </div>

    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p> <b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden md:block'>Data Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
    </div>
    <hr />

   {
     songsData.map((item,index)=>(
        <div onClick={()=>playwithid(item.id)} ket={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                <img className='inline w-10 mr-5' src={item.image} alt="" /> {item.name}
            </p>

            <p className='text-[15px]'>{aboutalbumsdata.name}</p>
            <p className='text-[15px]'>2 days ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
     ))
   }

    
   </>
  )
}

export default Displayalbum
