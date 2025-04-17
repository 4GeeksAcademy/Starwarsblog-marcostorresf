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
        <img src="https://i.pinimg.com/1200x/dc/fb/52/dcfb527563983bc957ae080c0fb73b4b.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <span onClick={()=>handleFavs()}><i class="fa-solid fa-jedi mx-3"></i></span>
            <Link to={`/Characters/${props.uid}`} className="btn btn-dark">Learn More</Link>
          </div>
      </div>

    </div>
  );
}; 