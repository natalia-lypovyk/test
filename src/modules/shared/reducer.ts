import { Data } from './context';

export const initialState: Data = {
  contacts: {
    name: '',
    phone: '',
    email: '',
    birthday: '',
    comment: '',
  }
};

export const reducer = (state: Data, action: any) => {
  switch (action.type) {
    case 'addName': {
      return {
        contacts: {
          ...state.contacts,
          name: action.payload
        }
      };
    }

    default:
      return state;
  }
}
