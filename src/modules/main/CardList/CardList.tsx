import React, {FC, useContext} from 'react';
import Text from 'ustudio-ui/components/Text';

import {Context} from "../../../shared/context";

import { Card } from '../Card';

export const CardList: FC = () => {
  const { contacts } = useContext(Context);

  return contacts.length ? (
    <>
      {contacts.map(contact => <Card contact={contact} />)}
    </>
  ) : (
    <Text>No contacts to show. Add someone!</Text>
  )
};
