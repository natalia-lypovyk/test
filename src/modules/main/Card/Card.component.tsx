import React, {FC, useContext} from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import { css } from 'styled-components';

import { Context } from '../../../shared/context';

interface Props {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  comment: string;
}

export const Card: FC<Props> = ({ contact}) => {
  const { contacts } = useContext(Context);
  return (
    <Flex
      direction='column'
      styled={{
        Flex: css`
          width: 300px;
          margin: 10px;
          padding: 10px;
          border: 1px solid var(--c-neutral);
          border-radius: 4px;
          `,
      }}
    >
      <Text>{contact.name}</Text>
      <Text>{contact.phone}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.birthday}</Text>
      <Text>{contact.comment}</Text>
    </Flex>
  )
};
