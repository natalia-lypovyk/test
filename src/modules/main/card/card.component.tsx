import React, { FC, useContext } from 'react';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Flex from'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import { css } from'styled-components';

import { Contact } from '../../../shared/types';
import { Context } from '../../../shared/context';

import Styled from './card.styles';

export const Card: FC<{ contact: Contact }> = ({ contact }) => {
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
        <Grid
          margin={{
            bottom: 'medium'
          }}
        >
          <Cell>
            <b>Name:</b>
          </Cell>

          <Cell>{contact.name}</Cell>
        </Grid>
      )}

      {contact.phones && (
        <Grid
          margin={{
            bottom: 'medium'
          }}
        >
          <Cell>
            <Text
              styled={{
                Text: css`
                margin-right: 15px;
            `,
              }}
            >
              <b>Phones:</b>
            </Text>
          </Cell>

          <Cell>
            <Flex direction='column'>
              {contact.phones.map(({ phone }) => {
                return (
                  <Text key={phone}>{phone}</Text>
                )
              })}
            </Flex>
          </Cell>
        </Grid>
      )}

      {contact.email && (
        <Grid
          margin={{
            bottom: 'medium'
          }}
        >
          <Cell>
            <b>Email:</b>
          </Cell>

          <Cell>{contact.email}</Cell>
        </Grid>
      )}

      {contact.birthday && (
        <Grid
          margin={{
            bottom: 'medium'
          }}
        >
          <Cell>
            <b>Birthday:</b>
          </Cell>

          <Cell>{contact.birthday}</Cell>
        </Grid>
      )}

      {contact.comment && (
        <Grid>
          <Cell>
            <b>Comment</b>
          </Cell>

          <Cell>{contact.comment}</Cell>
        </Grid>
      )}
    </Styled.CardBlock>
  )
};
