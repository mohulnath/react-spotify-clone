import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playercontext = createContext();

const playercontextprovider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,settrack]= useState(songsData[1]);
    const [playstatus,setplaystatus]= useState(false);
    const [time,settime]= useState({
        currentTime:{
            secound :" --",
            minute : "-- "
        },
        totalTime:{
            secound :" --",
            minute : "-- "
        }
    })

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = ((audioRef.current.currentTime / audioRef.current.duration)*100) + "%"
                settime({
                    currentTime:{
                        secound :Math.floor(audioRef.current.currentTime % 60),
                        minute : Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        secound :Math.floor(audioRef.current.duration % 60),
                        minute : Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const play = ()=>{
        audioRef.current.play();
        setplaystatus(true);
    }


    const pause = ()=>{
        audioRef.current.pause();
        setplaystatus(false);
    }

    const playwithid = async (id)=>{
        await settrack(songsData[id])
        await audioRef.current.play();
        setplaystatus(true);
    }

    const before = async()=>{
        if(track.id > 0){
            await settrack(songsData[track.id -1])
            await audioRef.current.play();
            setplaystatus(true);
        }
    }

    const after = async()=>{
        if(track.id < songsData.length -1){
            await settrack(songsData[track.id +1])
            await audioRef.current.play();
            setplaystatus(true);
        }
    }
  
    const seekbrclick = async(e)=>{
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    const contextvalue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        playstatus,
        time,
        settrack,
        setplaystatus,
        settime,
        play,
        pause,
        playwithid,
        before,
        after,
        seekbrclick
    }

    return (
        <playercontext.Provider value={contextvalue}>
            {props.children}
        </playercontext.Provider>
    )
}

export default playercontextprovider