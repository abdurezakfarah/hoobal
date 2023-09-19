
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import PlayPause from "./PlayPause"

import { 
    playPause, 
    setActiveSong 
    } from "../redux/features/playerSlice"

const SongCard = ( { 
    song, 
    songIndex,
    activeSong,
    isPlaying,
    data
    }) => {
      
  const dispatch = useDispatch()
  
  
  const handlePauseClick = ()  => {
    dispatch(playPause(false))
  }
  
    
  const handlePlayClick = ()  => {
    dispatch(playPause(true))
    dispatch(setActiveSong({ 
        song,
        songIndex, 
        data
        }
      ))
  }
  return (
  <div
    id={song?.key}
    className="w-[250px] p-4 flex flex-col bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div
     className="relative w-full h-56 group"
    >
      <div
       className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${ activeSong?.key === song?.key ? "flex bg-black bg-opacity-70" : "hidden"} `}
      >
        <PlayPause 
          song={song}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          activeSong={activeSong}
          isPlaying={isPlaying}       
        />
      </div>
      
      <img
        alt={song?.title || song?.heading?.title || "song image"}
        src={
          song?.images?.coverart || 
          song?.images?.default || 
          `https://source.unsplash.com/random/225x225?random=${songIndex}`}
        className="rounded-sm"
        
       />      
    </div>
    <div
      className="mt-4 flex flex-col"
    >
      <p
        className="font-semibold text-lg text-white truncate"
      >
      <Link
       to={`/songs/${song?.key}`}
       state={{
           title: song?.title || song?.heading?.title
         }}
      >
          { 
          song?.title || song?.heading?.title || "Unknown song title" 
          }
      </Link>
   
      </p>
      <p
        className="text-sm text-slate-300 mt-1 truncate"
        >
        <Link
          to={song?.artists?.[0]?.adamid ? `/artists/${song?.artists?.[0]?.adamid }` : '/top-artists'}
        >
          { song?.subtitle || song?.heading?.subtitle || "Unknown song subtitle" }
      </Link>
      </p>
    </div>
  </div>
);
}

export default SongCard;
