// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.
import { getCharacters } from "./actions";
import { getPlanets } from "./actions";
import { getStarship } from "./actions";

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    // Provide the store and dispatch method to all child components.
    const actions = {
        getCharacters: (payload) => getCharacters(dispatch, payload),
        getPlanets: (payload) => getPlanets(dispatch, payload),
        getStarship: (payload) => getStarship(dispatch, payload)
    }
    
    return <StoreContext.Provider value={{ store, dispatch, ...actions }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store, getCharacters, getPlanets, getStarship } = useContext(StoreContext)
    return { dispatch, store, getCharacters, getPlanets, getStarship };
}