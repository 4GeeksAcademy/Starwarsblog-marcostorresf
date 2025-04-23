import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import storeReducer from "../store";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	


	return (

		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" /></span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<div className="dropdown">
							<button className="btn btn-dark btn-lg dropdown-toggle dropdown-menu-right" type="button" data-bs-toggle="dropdown">
								FAVORITES
							</button>
							<ul className="dropdown-menu">

								{store.favorites.length > 0 ? store.favorites.map((favorite, index) => (
									<li key={index}>
										{favorite}
									
									</li>
								))
									: <li>add a favorite</li>}
							</ul>
						</div>
					</Link>
				</div>
			</div>

		</nav>
	);
};