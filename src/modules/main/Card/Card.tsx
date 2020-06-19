import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

export const Card: FC = () => {
  return (
    <Flex>
      <Text>Name</Text>
      <Text>Phone</Text>
      <Text>Email</Text>
      <Text>Birthday</Text>
      <Text>Comment</Text>
    </Flex>
  )
};
