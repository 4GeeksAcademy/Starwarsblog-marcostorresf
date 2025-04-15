import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {

  const { store, dispatch } = useGlobalReducer()

  const handleFavs = () => {
    dispatch({type:"toggle_favorites", payload: props.name})

  }
  
  

  return (
    <div className="text-center mt-5">
      <div className="card mx-2" style={{"minWidth": "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <span onClick={()=>handleFavs()}>❤️</span>
            <Link to={`/Characters/${props.uid}`} className="btn btn-primary">Learn More</Link>
          </div>
      </div>

    </div>
  );
}; 