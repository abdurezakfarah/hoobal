import React, {
  useState,
  useEffect
} from 'react';

import {
  useSelector, useDispatch
} from "react-redux"

import {
  Error,
  Loader,
  Songs
} from "../components"

import {
  useGetTopSongsInWorldByGenreQuery,
} from "../redux/services/shazamApi"

const TopCharts = () => {  
  
  
 const { data, isFetching, error } = useGetTopSongsInWorldByGenreQuery({genre: "WORLDWIDE"})
  

  
  if (isFetching) return <Loader title="Loading musics..." />
  if (error) return <Error body={error.message} />
  
  return (
    <div
     className="flex flex-col"
    >  
       <h2
         className="font-bold mb-10 text-3xl text-white text-left"
       >
        Top Charts
       </h2>
    
      <Songs songs={data?.tracks || data} />
    </div>
  )
}

export default TopCharts;
