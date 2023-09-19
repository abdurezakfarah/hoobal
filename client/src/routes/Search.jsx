import {
  useParams
} from "react-router-dom"



import {
  Error,
  Loader,
  Songs,
} from "../components"


    
import {
  useGetSearchSongsByTermQuery
} from "../redux/services/shazamApi"
    
const Search = () => {  
 
 const { term } = useParams()
    
  const { 
    data, 
    isFetching, 
    error 
    } = useGetSearchSongsByTermQuery({ term })
  
 
  if (isFetching) return <Loader title="Loading musics..." />
  if (error) return <Error body={error.message} />
  
  
  
  return (
    <div
     className="flex flex-col"
    >     
     <h2
         className="font-bold text-lg sm:text-xl text-white text-left"
       >
        <span
          className="text-sm text-slate-300"
        >
          Showing results of 
        </span>
        <span
         className="ml-2"
        >
         {term}
        </span>
       </h2>
       
        <Songs songs={data?.tracks?.hits || data} />
    </div>
  );
}

export default Search;
