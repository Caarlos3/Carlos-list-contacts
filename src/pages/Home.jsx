import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	

	useEffect(()=> {
		const fetchContacts = async () => {
		const contactResponse = await fetch('https://playground.4geeks.com/contact/agendas/test1/contacts')	
		const contacts = await contactResponse.json();
		setContacts(contacts);
		dispatch({type: ADD_CONTACT_USER, payload: contacts})
		}
		fetchContacts();
		}, [])

	return (

		<ul>
			<li>
				<div id="principal">
					<div id="contactUser">
						<div className="container">
							<div className="avatar"><i class="fa-solid fa-circle-user fa-2xl"></i></div>
							<div className="userName">Carlos</div>
							<div className="userMail"><i class="fa-solid fa-envelope"></i> Mail</div>
							<div className="userPhone"><i class="fa-solid fa-phone"> 665665656</i></div>
						</div>
						<div>
							<div className="modify"><i class="fa-solid fa-pencil"></i></div>
							<div className="delete"><i class="fa-solid fa-trash"></i></div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
}; 