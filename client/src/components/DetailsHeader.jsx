import {
  Link
} from "react-router-dom"

const DetailsHeader = ({
  artistId,
  songDetailsData,
  artistData
}) => {
  
  //console.log("artist url",  )
  return (
      <div
       className="relative mt-6 mb-14 w-full flex flex-col "
      >
        <div
         className="w-full h-28 sm:h-48 bg-gradient-to-l from-transparent to-[#008651]"
        />
       <div
        className="absolute  inset-0 flex items-center "
       >
        <img 
         src={artistId ? artistData?.attributes?.artwork?.url.replace("{w}", "500").replace("{h}", "500") : songDetailsData?.images?.coverart}
         className="w-28 sm:w-48 h-28 sm:h-48 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div
         className="ml-5"
        >
          <p
           className="font-bold sm:text-3xl text-xl text-white"
          >
            { 
            artistId 
             ? artistData?.attributes?.name || "Unknown artist name"
              : songDetailsData?.title || "Unknown song title"
            }
            
          </p>
          {
            !artistId && (
              <Link
              to={`/artists/${songDetailsData?.artists?.[0]?.adamid}`}
               className="text-sm md:text-base text-slate-300"
              >
              {
                songDetailsData?.subtitle
              }
              </Link>
            )
          }
          <p
           className="text-sm md:text-base text-slate-300"
          >
          {
           artistId 
          ? artistData?.attributes?.genreNames?.[0]
            : songDetailsData?.genres?.primary 
           }
          </p>
        </div>
        </div>
      </div>
   );
}

export default DetailsHeader;
