import React, { FC, useEffect, useState } from 'react';
import { css } from "styled-components";
import Grid from 'ustudio-ui/components/Grid/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Flex from 'ustudio-ui/components/Flex';
import Text from "ustudio-ui/components/Text";
import TextInput from 'ustudio-ui/components/Input/TextInput';

import { Main } from '../modules/main';
import { Form } from '../modules/main/form';

import { ContactType } from './app.types';
import Styled from './app.styles';

const App: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [query, setQuery] = useState('');

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
    //localStorage.setItem('contacts', JSON.stringify(contact));

    setContacts([
      ...contacts,
      contact
    ])
  };

  const removeContact = (contactId: string) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = (contacts: ContactType[], query: string) => {
    return contacts.filter(contact => contact.name.includes(query));
  }

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
        <Flex
          direction='column'
          styled={{
            Flex: css`
              padding: 10px;
            `,
          }}
        >
          <Text
            variant='h2'
            align='center'
            styled={{
              Text: css`
            font-family: 'Julius Sans One', sans-serif;
            letter-spacing: 2px;
            text-transform: uppercase;                        
           `,
            }}
          >
            Contacts
          </Text>
          <TextInput
            name='search'
            placeholder='Looking for...'
            value={query}
            onChange={setQuery}
          />
          <Main contacts={filteredContacts(contacts, query)} removeContact={removeContact} />
        </Flex>

      </Cell>

      <Styled.Block
        xl={{ size: 1 }}
      >
        <Form addContact={addContact} />
      </Styled.Block>
    </Grid>
  );
}

export default App;
