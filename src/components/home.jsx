import React, { useContext } from "react";
import Sidebar from "./sidebar";
import Player from "./player";
import Display from "./disply"
import { playercontext } from "../context/playercontext";

const Home = () => {

   const {audioRef,track} = useContext(playercontext)

    return(
        <>
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <Sidebar/>
                <Display/>
            </div>
            <Player/> 
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
        </>
    )
}

export default Home