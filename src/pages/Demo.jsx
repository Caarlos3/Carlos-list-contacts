// Import necessary components from react-router-dom and other parts of the application.
import { useLocation, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { ADD_CONTACT_USER, EDIT_CONTACT_USER} from "../store.js";
import { useState, useEffect } from "react";

export const Demo = ({isEdit}) => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const location = useLocation();

  const [formulario, setFormulario] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",

  });

  useEffect(() => {
    if (isEdit && location.state) {

      const { name, email, phone, address } = location.state;
      setFormulario({ name, email, phone, address });
    }
  }, [isEdit, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = { ...formulario };

    try {
      let contactResponse;
      if (isEdit) {

        contactResponse = await fetch(`https://playground.4geeks.com/contact/agendas/test1/contacts/${location.state.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
      } else {

        contactResponse = await fetch('https://playground.4geeks.com/contact/agendas/test1/contacts', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
      }

      if (!contactResponse.ok) throw new Error(isEdit ? "Error al actualizar el contacto" : "Error al crear el contacto");

      const updatedContact = await contactResponse.json();

      if (isEdit) {
        dispatch({ type: "EDIT_CONTACT_USER", payload: updatedContact });
      } else {
        dispatch({ type: "CONTACT", payload: updatedContact });
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="principalSummit">
      <div className="containerSummit">
        <form onSubmit={handleSubmit}>
          <div className="contactName m-3">Name
            <input type="text" name="name" value={formulario.name} onChange={handleChange} />
          </div>
          <div className="contactMail m-3">Mail
            <input type="email" name="email" value={formulario.email} onChange={handleChange} />
          </div>
          <div className="contactPhone m-3">Phone Number
            <input type="text" name="phone" value={formulario.phone} onChange={handleChange} />
          </div>
          <div className="contactAddress m-3">Address
            <input type="text" name="address" value={formulario.address} onChange={handleChange} />
          </div>
          <button className="btn btn-dark m-3" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
