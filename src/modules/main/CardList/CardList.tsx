import React, { FC, useEffect } from 'react';
import Text from 'ustudio-ui/components/Text';

//import { ContactType } from '../../../core/App.types';

import { Card } from '../Card';

export const CardList: FC = () => {
  return(
    <>
      <Text>No contacts here</Text>
      <Card />
    </>
  )

  // return contacts.length ? (
  //   <>
  //     {contacts.map(contact => <Card contact={contact} />)}
  //   </>
  // ) : (
  //   <Text>No contacts to show. Add someone!</Text>
  // )
};
