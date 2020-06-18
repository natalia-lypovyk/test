import React, { FC, useState } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import Button from 'ustudio-ui/components/Button';
import { css } from 'styled-components';

import  { Form } from './Form';

export const Main: FC = () => {
  const [formVisible, setFormVisible] = useState(false);
  const showForm = () => {
    setFormVisible(true);
  };

  return (
    <Flex direction='column'>
      <Text variant='h2' align='center'>Contacts</Text>
      <Button
        onClick={showForm}
        styled={{
          Button: css`
            display: block;
            margin: 10px auto;
           `,
        }}
      >
        Add new contact
      </Button>
      {/*{formVisible && <Form />}*/}
      <Form />
    </Flex>
  )
};
