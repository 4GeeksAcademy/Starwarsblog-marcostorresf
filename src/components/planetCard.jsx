import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {

  const { store, dispatch } = useGlobalReducer()

  const handleFavs = () => {
    dispatch({type:"toggle_favorites", payload: props.name})

  }
  
  

  return (
    <div className="text-center mt-5">
      <div className="card mx-2" style={{"minWidth": "18rem"}}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=347%2C0%2C900%2C900" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <span onClick={()=>handleFavs()}><i className="fa-solid fa-jedi mx-3"></i></span>
            <Link to={`/Planets/${props.uid}`} className="btn btn-dark">Learn More</Link>
          </div>
      </div>

    </div>
  );
}; 