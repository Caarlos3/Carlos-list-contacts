export const initialAgenda = () => {
  return {
    contacts: []
  }
}



export default function contactsThing(state, action = {}) {

  switch (action.type){
    case "ADD_AGENDA":
      return action.payload;
      
    case "ADD_CONTACT_USER":
      return [...state, action.payload];
    
    case "EDIT_CONTACT_USER":
      return state.map(contacts => contacts.id === action.payload.id ? action.payload : contacts);

    case "DELETE_CONTACT_USER":
      return state.filter(contacts => contacts.id !== action.payload);

    default:
    return state;
  }
};




