import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StarshipDetails = () => {
  const { uid } = useParams ()
  const [Starship, setStarship] =  useState()
  const { store, dispatch } = useGlobalReducer()

  useEffect (() =>  {
    getEachStarship()
  }, [])

  const getEachStarship = async () => {
    let response = await fetch ("https://www.swapi.tech/api/starships/" + uid)
    let data = await response.json();
    setStarship(data.result.properties);

  }
 
 
 
  return (
    <div className="text-center mt-5">

    { Starship && Starship.name && (
      <>
      <h1>Name:</h1>
      <h3>{Starship.name}</h3>
      
      
      <h1>Passengers</h1>
      <h3>{Starship.passengers}</h3>

      <h1>Crew</h1>
      <h3>{Starship.crew}</h3>
      </>
    )}
    </div>
  );
}; 