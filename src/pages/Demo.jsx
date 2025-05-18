// Import necessary components from react-router-dom and other parts of the application.
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { ADD_CONTACT_USER } from "../store.js";
import {useState} from "react";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormulario((prev) => ({ ...prev, [name]: value }));
};
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      ...formulario, 
    };

  try{

    const contactResponse = await fetch('https://playground.4geeks.com/contact/agendas/test1/contacts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    });

    if(!contactResponse.ok) throw new Error("Error al crear nuevo contacto");

    const createdContact = await contactResponse.json();
    dispatch({type: ADD_CONTACT_USER, payload: createdContact});
    navigate("/");    
  }

  catch(error){
    console.log(error)
  }
  };

  return (
        <div className="principalSummit">
          <div className="containerSummit">
            <form onSubmit={handleSubmit}>
              <div className="contactName">Name
                <input type="text" name= "name" value={formulario.name} onChange={handleChange}/>
              </div>
              <div className="contactMail">Mail
                <input type="email" name= "email" value={formulario.email} onChange={handleChange} />
              </div>
              <div className="contactPhone">Phone Number
                <input type="text" name="phone" value={formulario.phone} onChange={handleChange} />
              </div>
              <div className="contactAddress">Address
                <input type="text" name="address" value={formulario.address} onChange={handleChange} />
              </div>
              <button className="btn btn-dark" type="submit">Submit</button>
            </form>
          </div>
        </div>
  );
};
