import {
  useEffect
} from "react"

import {
  useParams
} from "react-router-dom"


import {
  Error,
  Loader,
  DetailsHeader,
  RelatedSongs
} from "../components"

import {
  useGetArtistDetailsQuery, 
  useGetArtistTopSongsQuery
} from "../redux/services/shazamApi"


const ArtistDetails = () => {
  const {artistId } = useParams()
  
  const { data: artistDetailsData, isFetchingArtistDetailsData, error: artistDetailsError } = useGetArtistDetailsQuery({ artistId })
  
  const { data: artistTopsSongsData, isFetching: isFetchingArtistTopSongsData, error: artistTopSongsError } = useGetArtistTopSongsQuery({ artistId })  
  
 
 //loading
 if (isFetchingArtistDetailsData || isFetchingArtistTopSongsData){
  return (
   <Loader title="Loading artist data..." />
  )
 }
  
 
  //errors
  if ( 
   artistDetailsError || 
   artistTopSongsError || 
   artistDetailsData?.errors || 
   artistTopsSongsData?.errors
   ){
   return (
    <Error 
     title={artistDetailsData?.errors?.[0]?.title || artistTopsSongsData?.errors?.[0]?.title}
     body={artistDetailsError?.message || artistTopSongsError?.message || artistDetailsData?.errors?.[0]?.detail || artistTopsSongsData?.errors?.[0]?.detail}
    />
   )
  }
  
  return (
    <div
      className="mt-10 flex flex-col"
    >
    <DetailsHeader 
      artistId={artistId}
      artistData={artistDetailsData?.data?.[0]}
       />
      
    <RelatedSongs
      songs={artistTopsSongsData?.data}  
      artistId={artistId}
     name={artistDetailsData?.data?.[0]?.attributes?.name}
      />
      
    </div>
  )
}

export default ArtistDetails;
