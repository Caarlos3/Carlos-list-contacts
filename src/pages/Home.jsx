import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div id="principal">
			<div id="contactUser">
				<div className="Container">
					<div className="avatar"><i class="fa-solid fa-circle-user fa-2xl"></i></div>
					<div className="contactName">Carlos</div>
					<div className="userMail"><i class="fa-solid fa-envelope"></i> Mail</div>
					<div className="userPhone"><i class="fa-solid fa-phone"> 665665656</i></div>
				</div>
				<div>
					<div className="modify"><i class="fa-solid fa-pencil"></i></div>
					<div className="delete"><i class="fa-solid fa-trash"></i></div>
				</div>
			</div>
		</div>
	);
}; 