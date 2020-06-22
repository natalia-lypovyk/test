import React, { FC } from 'react';

import { ContactType } from "../../../core/App.types";

import Styled from './Card.styles';

interface Props {
  contact: ContactType;
}

export const Card: FC<Props> = ({ contact }) => {
  return (
    <Styled.CardBlock direction='column'>
      <Styled.Title>Name: {contact.name}</Styled.Title>
      <Styled.Title>Phone: {contact.phone}</Styled.Title>
      <Styled.Title>Email: {contact.email}</Styled.Title>
      <Styled.Title>BDay: {contact.birthday}</Styled.Title>
      <Styled.Title>Comment: {contact.comment}</Styled.Title>
    </Styled.CardBlock>
  )
};
