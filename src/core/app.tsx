import React, { FC, useState, useEffect, useReducer } from 'react';
import { css } from 'styled-components';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { Main } from '../modules/main';
import { Form } from '../modules/main/form';

import { Context, storedContacts } from '../shared/context';
import { reducer } from '../shared/reducer';
import { Contact } from '../shared/types';
import Styled from './app.styles';

const App: FC = () => {
  const [contacts, dispatch] = useReducer(reducer, storedContacts);
  const [query, setQuery] = useState('');

  const filteredContacts = (contacts: Contact[], query: string) => {
    return contacts.filter(contact => contact.name.includes(query))
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]
  );

  return (
    <Context.Provider value={{ state: contacts, dispatch }}>
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
          <Styled.Input
            name='search'
            placeholder='Looking for...'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />          
          <Main contacts={filteredContacts(contacts, query)} />
        </Flex>

      </Cell>

      <Styled.Block
        xl={{ size: 1 }}
      >
        <Form />
      </Styled.Block>
    </Grid>
  </Context.Provider>    
  );
}

export default App;
