import React from 'react'
import Navbar from './navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitems from './albumitems'
import Songitems from './songitems'

const Displayhome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Your Top Playlist</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((about, index) => (<Albumitems key={index} name={about.name} desc={about.desc} id={about.id} image={about.image} />))}
                </div>

            </div>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Recently Played</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((about, index) => (<Songitems key={index} name={about.name} desc={about.desc} id={about.id} image={about.image} />))}
                </div>

            </div>
        </>
    )
}

export default Displayhome
