import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

import {
  useSelector, useDispatch
} from "react-redux"

import { playPause, setActiveSong } from "../redux/features/playerSlice"

const SongBar = ({ 
   data,
   song, 
   songIndex, 
   artistId, 
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
  
   return  (
  <div className={`w-full flex flex-row items-center hover:bg-[#008651] ${activeSong?.key === song?.key ? 'bg-[#00865190]' : 'bg-white/10 bg-opacity-85 backdrop-blur-sm'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{songIndex + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
        alt={artistId ? song.attributes?.artistName : song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link 
            state={{
             title: song?.title || song?.heading?.title
            }}
            to={`/songs/${song?.key}`}
            >
            <p className="text-lg sm:text-xl font-bold text-white">
              {song?.title || "Unknown song title"}
            </p>
          </Link>
        ) : (
          <p className="text-lg sm:text-xl font-bold text-white">
            {song?.attributes?.name || "Unknown song title"}
          </p>
        )}
        <p className="text-sm sm:text-base text-gray-300 mt-1">
          {
            artistId 
             ? song?.attributes?.albumName 
             : song?.subtitle
          }
        </p>
      </div>
    </div>
    {!artistId
      ? (
        <PlayPause
          song={song}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          activeSong={activeSong}
          isPlaying={isPlaying}    
        />
      )
      : null}
  </div>
);
    }

export default SongBar;