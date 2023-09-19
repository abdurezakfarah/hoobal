import {
 useEffect
} from "react"

import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { 
    Searchbar, 
    Sidebar, 
    MusicPlayer, 
    TopPlay 
    } from '../components';
    
import { 
    setUserCountry
    } from "../redux/features/playerSlice"
 
const RootLayout = () => {
  const { activeSong } = useSelector((state) => state.player);
  
  const dispatch = useDispatch()

  useEffect(() => {
     fetch(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_IPIFY_API}`)
     .then(res => res.json())
     .then(data => {
        dispatch(setUserCountry(data.location.country))
     })
     .catch(err => console.log(err))
          
  }, [])
  
  return (
    <div className="relative flex">
      <Sidebar />
      <div 
       className="flex-1 flex flex-col bg-gradient-to-br from-primary to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-68px)] pb-40 overflow-y-scroll flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit hide-scrollbar">
            <Outlet />
          </div>
          <div className="xl:sticky relative top-4  h-fit xl:h-[calc(100vh-72px)] pb-10 xl:pb-60 xl:overflow-y-scroll hide-scrollbar">
            <TopPlay />
          </div>
        </div>
      </div>

      {(Boolean(activeSong?.key)) && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default RootLayout;