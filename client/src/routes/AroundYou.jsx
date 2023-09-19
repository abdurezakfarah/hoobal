import {
  useSelector, useDispatch
} from "react-redux"

import {
  Error,
  Loader,
  Songs
} from "../components"

import {
  useGetTopSongsInCountryQuery,
} from "../redux/services/shazamApi"

const CountryTracks = () => {  

  const { userCountry } = useSelector(state => state.player)
  let {data, isFetching, error} = useGetTopSongsInCountryQuery({countryCode: userCountry})

  
 
  
  if (isFetching) return <Loader title="Loading musics..." />
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
       <h2
         className="font-bold flex gap-1 mb-10 text-2xl md:text-3xl text-white text-left"
       >
       <span
       >
       Around You
       </span>
       <span
        className="text-slate-100"
       >
         &#8226;
       </span>
       <span
        className="font-bolder"
       >
       { userCountry }
       </span>
        
       </h2>
    
      <Songs songs={data} />
    </div>
  )
}

export default CountryTracks;
