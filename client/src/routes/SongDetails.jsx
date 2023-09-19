

import {
  useParams,
  useLocation
} from "react-router-dom"

import {
  useSelector,
  useDispatch
} from "react-redux"

import {
  Error,
  Loader,
  RelatedSongs,
  DetailsHeader
} from "../components"

import { playPause, setActiveSong } from "../redux/features/playerSlice"

import {
  useGetSongDetailsQuery, useGetRelatedSongsQuery
} from "../redux/services/shazamApi"


const SongDetails = () => {
   const {state} = useLocation()
   
  const {songid } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  
  const { data: songDetailsData, isFetching: isFetchingSongDetails, error: songDetailsError } = useGetSongDetailsQuery({ songid })  
  
  const { data: relatedSongsData, isFetching: isFetchingRelatedSongsData, error: relatedSongsError } = useGetRelatedSongsQuery({ songid })  
  
  const lyrics = songDetailsData?.sections?.filter(section => section?.type === "LYRICS" )?.[0]?.text

  
   //loading
 if (isFetchingSongDetails || isFetchingRelatedSongsData){
  return (
   <Loader title="Loading song data..." />
  )
 }
 
  //errors
  if (songDetailsError || relatedSongsError || songDetailsData?.errors || relatedSongsData?.errors){
   return (
    <Error 
     title={songDetailsData?.errors?.[0]?.title || relatedSongsData?.errors?.[0]?.title || songDetailsError?.status}
     body={songDetailsError?.message || relatedSongsError?.message || songDetailsData?.errors?.[0]?.detail || relatedSongsData?.errors?.[0]?.detail || songDetailsError?.data?.message}
    />
   )
  }
  
  
  return (
    <div
      
      className="mt-10 flex flex-col"
    >
    <DetailsHeader songDetailsData={songDetailsData} />
     <div
       className="mb-10"
     >
       <h2
        className="text-white text-3xl font-bold"
       >
         Layrics:
       </h2>
       <div
         className="mt-5"
       >
       {
         lyrics
         ? (
           lyrics.map((line, index) => {
            return (
               <p
              key={index}
              className="my-1 italic text-base leading-light text-slate-300 font-semibold"
             >
              {line}
             </p>
            )
           })
         )
         :(
           <p
            className="text-md text-slate-300 text-center font-bold"
           >
             No lyrics found
           </p>
         )
       }
       </div>
     </div>
     
     <RelatedSongs
      songs={relatedSongsData?.tracks}
      name={state?.title}
      />
      
    </div>
  )
}

export default SongDetails;
