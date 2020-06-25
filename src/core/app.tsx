import React, { FC, useState, useEffect } from 'react';
import { css } from 'styled-components';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

//import { Main } from '../modules/main';
import { Form } from '../modules/main/form';

import Styled from './app.styles';

const App: FC = () => {
  const [query, setQuery] = useState('');

  // const storedContacts = localStorage.getItem('contacts')
  //   ? JSON.parse(localStorage.getItem('contacts') as string)
  //   : [];

  // const filteredContacts = (contacts: ContactType[], query: string) => {
  //   return contacts.filter(contact => contact.fullName.includes(query))
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(storedContacts))
  //   }, [storedContacts]
  // )

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
          <Styled.Input
            name='search'
            placeholder='Looking for...'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {/*<Main />*/}
          {/*<Main contacts={filteredContacts(contacts, query)} />*/}
        </Flex>

      </Cell>

      <Styled.Block
        xl={{ size: 1 }}
      >
        <Form />
      </Styled.Block>
    </Grid>
  );
}

export default App;
