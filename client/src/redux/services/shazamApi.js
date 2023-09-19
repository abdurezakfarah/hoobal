import { 
    createApi, 
    fetchBaseQuery 
    } from "@reduxjs/toolkit/query/react"

export const shazamApi =  createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
  baseUrl: 'https://shazam-api7.p.rapidapi.com',
  prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY)
      return headers
    }
}), 
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => 'charts/get-top-songs-in-world'
    }), 
    
      getTopSongsInWorldByGenre: builder.query({
      query: ({ genre }) =>  {
        return {
          url:  `charts/get-top-songs-in_world_by_genre`,
          params: {
              genre,
              }
        }
      }
    }), 
    
    getSongDetails: builder.query({
      query: ({ songid }) =>  {
        return {
          url:  `songs/get_details`,
          params: {
              id: songid
              }
        }
      }
    }), 
    
    getRelatedSongs: builder.query({
      query: ({ songid }) =>  {
        return {
          url:  `songs/list-recommendations`,
          params: {
              id: songid
              }
        }
      }
    }), 
    
    getArtistDetails: builder.query({
      query: ({ artistId }) =>  {
        return {
          url:  `artist/get-details`,
          params: {
              id: artistId
              }
        }
      }
    }), 
    
    getArtistTopSongs: builder.query({
      query: ({ artistId }) =>  {
        return {
          url:  `artist/get-top-songs`,
          params: {
              id: artistId
              }
        }
      }
    }), 
    
     getTopSongsInCountry: builder.query({
      query: ({ countryCode }) =>  {
        return {
          url:  `charts/get-top-songs-in-country`,
          params: {
              country_code: countryCode
              }
        }
      }
    }), 
     
    getSearchSongsByTerm: builder.query({
      query: ({ term }) =>  {
        return {
          url:  `/search`,
          params: {
              term
              }
        }
      }
    }), 
    
    
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetTopSongsInCountryQuery,
  useGetTopSongsInWorldByGenreQuery,
  useGetSearchSongsByTermQuery
} = shazamApi

