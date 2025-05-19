import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ADD_CONTACT_USER } from "../store.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
	const { store, dispatch } = useGlobalReducer();
	const contacts = store.contacts || [];
	
  
	useEffect(()=> {
		const fetchContacts = async () => {
		const contactResponse = await fetch('https://playground.4geeks.com/contact/agendas/test1/contacts',{
			headers: {
				"Content-Type": "application/json"
			}
		})	
		const data = await contactResponse.json();
		dispatch({type: ADD_CONTACT_USER, payload: data.contacts})
		}
		fetchContacts();
		}, [])

	const changeContact = (contact) => {
		dispatch({type: "CATCH_CONTACT", payload: contact })
		navigate("/edit")
	}


	return (

		<ul>
			{contacts && contacts.map((contact) => (
			<li key={contact.id}>
				<div id="principal">
					<div id="contactUser">
						<div className="container">
							<div className="avatar"><i class="fa-solid fa-circle-user fa-2xl"></i></div>
							<div className="userName">{contact.name}</div>
							<div className="userMail"><i className="fa-solid fa-envelope"></i>{contact.email}</div>
							<div className="userPhone"><i className="fa-solid fa-phone"> {contact.phone}</i></div>
							<div className="userAddress">{contact.address}</div>
						</div>
						<div>
							<div className="modify" onClick={()=>changeContact(contact)}><i className="fa-solid fa-pencil"></i></div>
							<div className="delete"><i className="fa-solid fa-trash"></i></div>
						</div>
					</div>
				</div>
			</li>
			))}
		</ul>
		
	);
}; 