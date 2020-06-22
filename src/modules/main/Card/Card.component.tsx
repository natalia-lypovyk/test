import React, { FC } from 'react';
import Text from 'ustudio-ui/components/Text';

import { CardProps } from './Card.types';

import Styled from './Card.styles';
//import { ContactType } from "../../../core/App.types";

export const Card: FC = () => {
  return (
    <Styled.CardBlock direction='column'>
      <Styled.Title>Name:</Styled.Title>
      <Styled.Title>Phone:</Styled.Title>
      <Styled.Title>Email:</Styled.Title>
      <Styled.Title>BDay:</Styled.Title>
      <Styled.Title>Comment:</Styled.Title>
    </Styled.CardBlock>
  )
};
