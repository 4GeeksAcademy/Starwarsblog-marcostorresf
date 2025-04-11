import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" /></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							FAVORITES
						</button>
						<ul class="dropdown-menu">
							...
						</ul>

					</Link>
				</div>
			</div>
		</nav>
	);
};