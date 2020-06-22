import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import { css } from 'styled-components';

//import { ContactType } from '../../core/App.types';

import { CardList } from '../main/CardList';

export const Main: FC = () => {

  return (
    <Flex direction='column'>
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
      <CardList />
    </Flex>
  )
};
