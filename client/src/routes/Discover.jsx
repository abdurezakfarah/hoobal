import {
  useSelector, 
  useDispatch
} from "react-redux"


import {
  Error,
  Loader,
  Songs,
  Select
} from "../components"

import {
    genres 
    } from "../constants"

    
import {
  useGetTopChartsQuery,
  useGetTopSongsInWorldByGenreQuery
} from "../redux/services/shazamApi"

import { 
    selectGenreListId
    } from "../redux/features/playerSlice"

    
const Discover = () => {  
  const { genreListId } = useSelector(state => state.player)
    
  const { 
    data, 
    isFetching, 
    error 
    } = useGetTopSongsInWorldByGenreQuery({genre: genreListId || 'POP'})
  
  const dispatch = useDispatch()
  
  const genreTitle = genres?.find(({value}) => value === genreListId)?.title

  if (isFetching) return <Loader title="Loading musics..." />
   if (error) {
    return (
        <Error 
          title={
            data?.errors?.[0]?.title      
           }
           body={
             error?.message || 
             data?.errors?.[0]?.detail 
             }
    />
   )
  }
      
  
  return (
    <div
     className="flex flex-col"
    >
      <div
        className="mt-4 mb-10 w-full flex flex-col sm:flex-row justify-between items-center"
      >
       <h2
         className="font-bold text-3xl text-white text-left"
       >
        Discover { genreTitle }
       </h2>
       
      <Select
        genreListId={genreListId}        
        options={genres}
        handleChange={e => dispatch(selectGenreListId(e.target.value))}
        />
     
      </div>
      <Songs songs={data?.tracks || data} />
    </div>
  );
}

export default Discover;
