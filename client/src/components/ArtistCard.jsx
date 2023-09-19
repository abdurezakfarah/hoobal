
import { Link, useNavigate } from "react-router-dom"


const ArtistCard = ( { 
    track
    }) => {
 
  const navigate = useNavigate()
 
  return (
  <div
  onClick={() => navigate(`/artists/${track?.artists?.[0]?.adamid}`)}
    className="w-[250px] p-4 flex flex-col bg-white/5 ng-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
     
      <img
        alt={track?.artists?.[0]?.alias || "artist image"}
        src={track?.images?.coverart}
        className="w-full h-56 rounded-lg"      
       />    
         <p
       className="mt-4 font-semibold text-sm sm:text-lg text-slate-200 truncate"
      >
          { track?.subtitle || "Track subtitle" }
      </p>  
   
    
  </div>
);
}

export default ArtistCard;
