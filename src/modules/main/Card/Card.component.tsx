import React, { FC } from 'react';

import { ContactType } from "../../../core/App.types";

import Styled from './Card.styles';

interface Props {
  contact: ContactType;
}

export const Card: FC<Props> = ({ contact }) => {
  return (
    <Styled.CardBlock direction='column'>
      <Styled.RemoveButton />
      <Styled.Title><b>Name:</b> {contact.name}</Styled.Title>
      <Styled.Title><b>Phone:</b> {contact.phone}</Styled.Title>
      <Styled.Title><b>Email:</b> {contact.email}</Styled.Title>
      <Styled.Title><b>BDay:</b> {contact.birthday}</Styled.Title>
      <Styled.Title><b>Comment:</b> {contact.comment}</Styled.Title>
    </Styled.CardBlock>
  )
};
