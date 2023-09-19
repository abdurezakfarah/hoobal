import {
  createBrowserRouter
} from "react-router-dom"

import { 
    ArtistDetails, 
    TopArtists, 
    AroundYou, 
    Discover, 
    Search, 
    SongDetails, 
    TopCharts 
    } from './routes';
    
import RootLayout from "./layouts/RootLayout"

const routes = [
  {
    path: "/",
    Component: Discover,
  },
  {
    path: "/top-artists",
    Component: TopArtists,
  },
  {
    path: "/top-charts",
    Component: TopCharts,
  },
  {
    path: "/around-you",
    Component: AroundYou,
  },
  {
    path: "/artists/:artistId",
    Component: ArtistDetails,
  },
  {
    path: "/songs/:songid",
    Component: SongDetails,
  },
  {
    path: "/search/:term",
    Component: Search,
  },
]
export const router = createBrowserRouter([{
  Component: RootLayout,
  children: routes
}])