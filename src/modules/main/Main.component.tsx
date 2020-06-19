import React, {FC, useContext, useEffect} from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { Context } from "../../shared/context";
import { CardList } from '../main/CardList';

export const Main: FC = () => {
  const { contacts, dispatch } = useContext(Context);

  // useEffect(() => {
  //   const storedContacts =  localStorage.setItem('contacts', state.name);
  // }, []);

  return (
    <Flex direction='column'>
      <Text variant='h2' align='center'>Contacts</Text>
      <CardList />
    </Flex>
  )
};
