import { Contact, Action } from './types';

export const reducer = (state: Contact[], action: Action) => {
  switch (action.type) {
    case 'CREATE_CONTACT': {
      return [
        ...state,
        action.payload.contact
      ]
    }

    case 'REMOVE_CONTACT': {
      return [
        ...state.filter(contact => contact.id !== action.payload.id)
      ]
    }

    case 'UPDATE_CONTACT': {
      return [
        ...state
      ]
    }

    default: 
    return state;
  }
}