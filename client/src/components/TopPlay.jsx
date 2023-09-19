import {
  useEffect, 
  createRef
} from "react"

import {
  Link
} from "react-router-dom"

import {
  useSelector, useDispatch
} from "react-redux"

import { 
    Swiper, 
    SwiperSlide 
    } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode } from 'swiper/modules';

import {
  useGetTopSongsInWorldByGenreQuery,
} from "../redux/services/shazamApi"

import PlayPause from "./PlayPause"
import Loader from "./Loader"
import Error from "./Error"

import { playPause, setActiveSong } from "../redux/features/playerSlice"


const TopChartCard = ({ 
    song, 
    songIndex,
    data
    }) => {
   const { activeSong, isPlaying } = useSelector(state => state.player)
   
   const dispatch = useDispatch()
   
   const handlePauseClick = ()  => {
     
    dispatch(playPause(false))
  }
      
  const handlePlayClick = ()  => {
    
    dispatch(playPause(true))
    dispatch(setActiveSong({ 
        song,
        songIndex, 
        data
        }
      ))
  }
  return (
    <div
        className="w-full mb-2 py-2 px-4 flex flex-row bg-white/10 bg-opacity-85 backdrop-blur-sm items-center hover:bg-[#00865195] cursor-pointer rounded-lg text-gray-100 group"
    >
     <h3
      className="mr-3 font-bold text-base text-white"
     >
      {songIndex + 1}
      <span
       className="ml-1"
      >
        .
      </span>
     </h3>
     
     <div
      className="flex flex-row flex-1 justify-between items-center"
     >
       <img 
         src={
            song?.images?.coverart || 
            `https://source.unsplash.com/random/225x225?random=${songIndex}`
            }
         alt="name"
         className="w-20 h-20 rounded-lg "
       />
       <div
         className="flex flex-col flex-1 justify-center mx-3"
       >
        <Link
         to={`/songs/${song?.key}`}
         state={{
           title: song?.title || song?.heading?.title
         }}
         className="text-base md:text-xl text-gray-100 group-hover:text-white font-bold"
        >
         {
           song?.title || 
           song?.heading?.title ||
           "Unknown song title" 
         }
        </Link>
         <Link
           to={
              song?.artists?.[0]?.adamid 
              ? `/artists/${song?.artists?.[0]?.adamid }` 
              : '/top-artists'
              }
         className="text-sm md:text-base text-gray-300 group-hover:text-slate-200"
        >
         {
           song?.subtitle || 
           song?.heading?.subtitle ||
            "Unknown song subtitle" 
         }
        </Link>
       </div>
     </div>
     <PlayPause 
        song={song}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        activeSong={activeSong}
        isPlaying={isPlaying}       
        />
    </div>
  )
}

const TopPlay = () => {
  
  const { data, isFetching, error } = useGetTopSongsInWorldByGenreQuery({genre: "WORLDWIDE"})
  
  
  const topPlays = data?.tracks?.slice(0, 5)
  
  const topPlayRef = createRef()
  
  useEffect(() => {
    topPlayRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])
  
  if (isFetching) return <Loader title="Loading Top Musics..." />
  
  if (error) {
    return (
        <Error 
          title={
            data?.errors?.[0]?.title || 
            data?.errors?.[0]?.title
            }
           body={
             error?.message || 
             data?.errors?.[0]?.detail 
             }
    />
   );
  }
    
  
    
  return (
  <div
    ref={topPlayRef}
    className="max-w-full xl:max-w-[500px] ml-0 mb-6 xl:ml-6 xl:mb-0 flex flex-col flex-1 "
  >
    <div
     className="w-full flex flex-col"
    >
      <div
       className="flex flex-row justify-between items-center"
      >
        <h2
          className="text-2xl text-white font-bold"
        >
          Top Charts
        </h2>
        <Link
         to="/top-charts"
        >
         <p
          className="text-base text-slate-300 cursor-pointer"
         >
           See more
         </p>
        </Link>
      </div>
      
        <div
         className="mt-4 flex flex-col gap-1"
        >
          {
            topPlays?.map((song, songIndex) => {
              return (
                <TopChartCard
                  key={song?.key}
                  song={song}
                  songIndex={songIndex}
                  data={data}
                 />
              )
            })        
          }
        </div>
    </div>
    
    <div className="w-full flex flex-col mt-8">
        <div
       className="flex flex-row justify-between items-center"
      >
        <h2
          className="text-2xl text-white font-bold"
        >
          Top Artists
        </h2>
        <Link
         to="/top-artists"
        >
         <p
          className="text-base text-slate-300 cursor-pointer"
         >
           See more
         </p>
        </Link>
      </div> 
      
      <Swiper
       slidesPerView="auto"
       spaceBetween={15}
       freeMode
       centeredSlides
       centeredSlidesBounds
       modules={[ FreeMode ]}
       className="mt-4"
      >
      
      {
        topPlays?.map((song, index) => {
          //console.log(song)
          return (
            <SwiperSlide
             key={song?.key}
             style={{width:"25%", height: "auto"}}
             className="shadow-lg rounded-full animate-slideright"
            >
            <Link
           to={
              song?.artists?.[0]?.adamid 
              ? `/artists/${song?.artists?.[0]?.adamid }` 
              : '/top-artists'
              }
              className="text-2xl text-white"
            >
            <img
           src={
             song?.images?.coverart || 
            `https://source.unsplash.com/random/225x225?random=${songIndex}`
            }
           alt={
                song?.title || 
                song?.heading?.title || 
                   "Top artist mame"
                   }
              className="w-full rounded-full object-cover"
             />
            </Link>
            </SwiperSlide>
          )
        })
      }
      
      </Swiper>
      
    </div>
    
    </div>
);
}

export default TopPlay;
