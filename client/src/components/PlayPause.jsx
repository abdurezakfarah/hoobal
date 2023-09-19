import {
  FaPauseCircle,
  FaPlayCircle
} from "react-icons/fa"


const PlayPause = ({
  song,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick
}) => {
  
  return (
  <div   
   className="z-10"
  >
    {
      (isPlaying && song?.key === activeSong?.key)
      ? (
        <FaPauseCircle
          size={35}
          className="text-slate-300 group-hover:text-slate-50"
          onClick={handlePauseClick}
         />
      ) : (
        <FaPlayCircle 
         size={35}
         className="text-slate-300 group-hover:text-slate-50"
         onClick={handlePlayClick}
        />
      )
    }
  </div>
);
}

export default PlayPause;
