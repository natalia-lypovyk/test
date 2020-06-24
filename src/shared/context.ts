import { createContext } from 'react';

import {Action, Contact} from './types';

export const storedContacts = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts') as string)
  : []

export const Context = createContext<{state: Contact[], dispatch: (action: Action) => void}>({
  state: storedContacts as Contact[],
  dispatch: () => {}
});
