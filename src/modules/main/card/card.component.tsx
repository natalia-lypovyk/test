import React, { FC } from 'react';

import { ContactType } from '../../../core/app.types';

import Styled from './card.styles';

interface Props {
  contact: ContactType;
}

export const Card: FC<Props> = ({ contact }) => {
  return (
    <Styled.CardBlock direction='column'>
      <Styled.RemoveButton  />
      {contact.fullName && (
        <Styled.Title><b>Name:</b> {contact.fullName}</Styled.Title>
      )}

      {contact.phone && (
        <Styled.Title><b>Phone:</b> {contact.phone}</Styled.Title>
      )}

      {contact.email && (
        <Styled.Title><b>Email:</b> {contact.email}</Styled.Title>
      )}

      {contact.birthday && (
        <Styled.Title><b>BDay:</b> {contact.birthday}</Styled.Title>
      )}

      {contact.comment && (
        <Styled.Title><b>Comment:</b> {contact.comment}</Styled.Title>
      )}
    </Styled.CardBlock>
  )
};
