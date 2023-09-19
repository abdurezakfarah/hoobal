import {
  Error,
  Loader,
  ArtistCard
} from "../components"

    
import {
  useGetTopSongsInWorldByGenreQuery,
} from "../redux/services/shazamApi"
    
const Discover = () => {
  const { data, isFetching, error } = useGetTopSongsInWorldByGenreQuery({genre: 'POP'})
  
  

  if (isFetching) return <Loader title="Loading top artists data..." />
  if (error) return <Error body={error.message} />
  
  
  
  return (
    <div
     className="flex flex-col"
    >
       <h2
         className="font-bold text-3xl text-white text-left"
       >
        Top Artists
       </h2>
       <div
        className="flex flex-wrap justify-start sm:justify-center gap-8"
      >
        {
          data?.tracks
          ?.map((track) => (
            <ArtistCard 
              key={track.key}
              track={track}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Discover;
