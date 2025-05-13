// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
        <div className="principalSummit">
          <div className="containerSummit">
            <div className="formular">
              <div className="contactName">Name
                <input type="text" />
              </div>
              <div className="contactMail">Mail
                <input type="text" />
              </div>
              <div className="contactPhone">Phone Number
                <input type="text" />
              </div>
              <div className="contactAdress">Adress
                <input type="text" />
              </div>
            </div>
            <Link to="/">
              <button className="btn btn-dark">Summit</button>
            </Link>
          </div>
        </div>
  );
};
