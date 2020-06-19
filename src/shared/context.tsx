import React, { createContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';

// export const Context = createContext();
//
// const ContactsContextProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, [], () => {
//     const localData = localStorage.getItem('contacts');
//     return localData ? JSON.parse(localData) : [];
//   });
//
//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);
//
//   return (
//     <Context.Provider value={{ contacts, dispatch }}>
//   {props.children}
//   </Context.Provider>
//
//   )
// }
export const initialState = {
  contacts: localStorage.getItem('contacts') === null
    ? []
    : JSON.parse(localStorage.getItem('contacts'))
}

export interface Data {
  name: string,
  phone: string,
  email: string,
  birthday: string,
  comment: string,
  id: string
}

type Action = {
  type: string;
  payload: any;
}

export const ContactsContext: Data = {
  name: '',
  phone: '',
  email: '',
  birthday: '',
  comment: '',
  id: ''
};

export const Context = createContext<{contacts: typeof ContactsContext, dispatch: (action: Action) => void}>({
  contacts: ContactsContext,
  dispatch: () => {}
});
