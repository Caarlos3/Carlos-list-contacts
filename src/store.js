export const initialAgenda = () => {
  return {
    contacts: [],
    contact: {}
  };
};



export default function contactsThing(state = initialAgenda(), action = {}) {

  switch (action.type){
    case "CONTACT":
      return {...state, contacts: [...state.contacts, action.payload]}   
    case "ADD_CONTACT_USER":
      return {...state, contacts: action.payload};
    
    case "EDIT_CONTACT_USER":
      return {...state, contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)};

    case "DELETE_CONTACT_USER":
      return {...state, contacts: state.contacts.filter(contacts => contacts.id !== action.payload)};
    
    case "CATCH_CONTACT":
      return {...state, contact: action.payload};

    default:
    return state;
  }
};

export const ADD_CONTACT_USER = "ADD_CONTACT_USER";
export const EDIT_CONTACT_USER = "EDIT_CONTACT_USER";
export const DELETE_CONTACT_USER = "DELETE_CONTACT_USER";





