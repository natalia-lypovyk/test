import React, { FC, useContext } from 'react';

import { Contact } from '../../../shared/types';
import { Context } from '../../../shared/context';

import Styled from './card.styles';

interface Props {
  contact: Contact;
}

export const Card: FC<Props> = ({ contact }) => {
  const { dispatch } = useContext(Context);

  return (
    <Styled.CardBlock direction='column'>
      <Styled.RemoveButton  
        type='button'
        onClick={() => dispatch({
          type: 'REMOVE_CONTACT',
          payload: {
            id: contact.id
          }
        })}
      />
      {contact.name && (
        <Styled.Title><b>Name:</b> {contact.name}</Styled.Title>
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
