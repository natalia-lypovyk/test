import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { Contact } from '../../shared/types';

import { Card } from './card';

export const Main: FC<{ contacts:Contact[] } > = ({ contacts }) => {
  return (
    <Flex direction='column'>
      {
        contacts? (
          <>
            {contacts.map(contact => <Card key={contact.id} contact={contact} />)}
          </>
        ) : (
          <Text align='center'>No contacts to show. Add someone!</Text>
        )
      }
    </Flex>
  )
};
