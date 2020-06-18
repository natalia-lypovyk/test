import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';
import FileInput from "ustudio-ui/components/Input/FileInput";
import Button from 'ustudio-ui/components/Button';

import Styled from './Form.styles';

export const Form: FC = () => {
  return (
    <Styled.Container>
      <Text variant='h5' align='center'>New Contact</Text>
      <label>
        Full Name:
        <TextInput />
      </label>
      <label>
        Phone:
        <TextInput />
      </label>
      <label>
        Email:
        <TextInput />
      </label>
      <label>
        Add photo:
        <FileInput
          name='user-photo'
          placeholder='Photo'
        />
      </label>
    </Styled.Container>
  )
}
