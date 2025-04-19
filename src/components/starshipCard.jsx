import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const StarshipCard = (props) => {

  const { store, dispatch } = useGlobalReducer()

  const handleFavs = () => {
    dispatch({type:"toggle_favorites", payload: props.name})

  }
  
  

  return (
    
    <div className="text-center mt-5">
      <div className="card mx-2" style={{"minWidth": "18rem"}}>
        <img src="https://static.wikia.nocookie.net/starwars/images/4/40/Falcon-SAG.jpg/revision/latest?cb=20070718041015" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <span onClick={()=>handleFavs()}><i className="fa-solid fa-jedi mx-3"></i></span>
            <Link to={`/Starships/${props.uid}`} className="btn btn-dark">Learn More</Link>
          </div>
      </div>

    </div>
  );
}; 