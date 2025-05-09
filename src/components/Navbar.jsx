import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-dark">LISTADO DE CONTACTOS</button>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-dark">+</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};