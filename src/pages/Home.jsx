import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { CharacterCard } from "../components/characterCard.jsx";

export const Home = () => {

  const [characters, setCharacters] = useState(); 
  const {store, dispatch, getCharacters} =useGlobalReducer()

    useEffect(() => {
	    getCharacters()
    }, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			<div className="d-flex col-10 overflow-auto mt-5 mx-auto">
				{characters?.map((character, index)=>{
					return <CharacterCard key={character.uid} name={character.name} uid={character.uid}/>


				})}

			</div>

		</div>
	);
}; 