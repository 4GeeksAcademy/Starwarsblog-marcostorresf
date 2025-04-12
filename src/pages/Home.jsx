import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";

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
			

		</div>
	);
}; 