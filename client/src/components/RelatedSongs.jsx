import SongBar from "./SongBar"

const RelatedSongs = ({ 
    songs,
    artistId,
    name
    }) => {
  
  return (
    <div
     className="flex flex-col"
    >
    <h2
          className="flex gap-2 items-center"
        >
          <span
           className="text-slate-200 tracking-tight font-semilight"
          >
          Related Songs to
          </span>
          <span
           className="text-lg md:text-2xl text-white font-bold"
          >
          { name }
          </span>
        </h2>
        
        <div
       className="mt-4 flex flex-col gap-1"
      >
        {
          songs?.map((song, songIndex) => {
            return (
              <SongBar
                key={`${song?.key} - ${song?.id}`}
                artistId={artistId}
                song={song}
                songIndex={songIndex}
                data={songs}
               />
            )
          })        
        }
      </div>
    </div>
  )
}


export default RelatedSongs;
