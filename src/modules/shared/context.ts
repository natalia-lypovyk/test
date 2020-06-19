import React, { createContext } from 'react';

export interface Data {
  contacts: {
    name: string,
    phone: string,
    email: string,
    birthday: string,
    comment: string,
  }
}

type Action = {
  type: string;
  payload: any;
}

export const ContactsContext: Data = {
  contacts: {
    name: '',
    phone: '',
    email: '',
    birthday: '',
    comment: '',
  }
};

export const Context = createContext<{state: typeof ContactsContext, dispatch: (action: Action) => void}>({
  state: ContactsContext,
  dispatch: () => {}
});
