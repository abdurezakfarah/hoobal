import {
  useSelector, useDispatch
} from "react-redux"

import SongCard from "./SongCard"

const Songs = ({ songs }) => {
  const { activeSong, isPlaying } = useSelector(state => state.player)
  
  return (
     <div
        className="flex flex-wrap justify-center sm:justify-start gap-8"
      >
        {
          songs
          ?.map((song, songIndex) => (
            <SongCard 
              key={songIndex}
              data={songs}
              song={song}
              activeSong={activeSong}
              isPlaying={isPlaying}
              songIndex={songIndex}
            />
          ))
        }
      </div>
  )
}

export default Songs


