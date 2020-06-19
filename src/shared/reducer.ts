import {Data} from './context';
import { v4 as uuidv4 } from 'uuid';

export const initialState: Data = {
  name: '',
  phone: '',
  email: '',
  birthday: '',
  comment: '',
  id: ''
};

export const reducer = (state: Data, action: any) => {
  switch (action.type) {
    case 'addContact': {
      return [
        ...state,
        {
          name: action.contact.name,
          phone: action.contact.phone,
          email: action.contact.email,
          birthday: action.contact.birthday,
          comment: action.contact.comment,
          id: uuidv4()
        }
      ]
    }

    case 'removeContact': {
      return state.filter(contact => contact.id !== action.id);
    }
    case 'addName': {
      return {
        ...state,
        name: action.payload
      }
    }

    case 'addPhone': {
      return {
        ...state,
        phone: action.payload
      }
    }

    case 'addEmail': {
      return {
        ...state,
        email: action.payload,
      }
    }

    case 'addBDay': {
      return {
        ...state,
        birthday: action.payload
      }
    }

    default:
      return state;
  }
}
