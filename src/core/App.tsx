import React, { FC, useEffect, useState } from 'react';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';

import { Main } from '../modules/main';
import { Form } from '../modules/main/Form';

import { ContactType } from './App.types';

const App: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts') as string)
      : [];

    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (contact: ContactType) => {
    localStorage.setItem('contacts', JSON.stringify(contact));

    setContacts([
      ...contacts,
      contact
    ])
  };

  return (
    <Grid
      md={{
        alignment: {
          horizontal: 'center'
        }
      }}
      padding={{
        top: 'large',
        left: 'large',
        right: 'large'
      }}
    >
      <Cell
        xl={{ size: 3 }}
        lg={{ size: 2 }}
      >
        <Main contacts={contacts} />
      </Cell>

      <Cell
        xl={{ size: 1 }}
      >
        <Form addContact={addContact} />
      </Cell>
    </Grid>
  );
}

export default App;
