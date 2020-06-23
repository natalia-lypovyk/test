import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { ContactType } from '../../core/app.types';

import { Card } from "./card";

interface Props {
  contacts: ContactType[];
  removeContact: (contactId: string) => void;
}

export const Main: FC<Props> = ({ contacts, removeContact }) => {
  return (
    <Flex direction='column'>
      {
        contacts.length ? (
          <>
            {contacts.map(contact => <Card key={contact.id} contact={contact} removeContact={removeContact} />)}
          </>
        ) : (
          <Text align='center'>No contacts to show. Add someone!</Text>
        )
      }
    </Flex>
  )
};
