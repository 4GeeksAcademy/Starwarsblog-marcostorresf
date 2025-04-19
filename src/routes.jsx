// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { CharacterDetails } from "./pages/characterDetails";
import { PlanetDetails } from "./pages/planetDetails";
import { StarshipDetails } from "./pages/starshipDetails";

export const router = createBrowserRouter(
    createRoutesFromElements(
    
      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/Characters/:uid" element={ <CharacterDetails />} /> 
        <Route path="/Planets/:uid" element={ <PlanetDetails />} /> 
        <Route path="/Starships/:uid" element={ <StarshipDetails />} /> 

        <Route path="/demo" element={<Demo />} />
      </Route>
    )
);