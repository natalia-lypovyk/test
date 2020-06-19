import React, { FC, FormEvent, useContext, useEffect, useState } from 'react';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import { css } from 'styled-components';

import { Context } from '../../../shared/context';

export const Form: FC = () => {
  const { contacts, dispatch } = useContext(Context);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [comment, setComment] = useState('');

  const addContact = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: 'addContact',
      contact: {
        name,
        phone,
        email,
        birthday,
        comment
      }
      setName: '';
      setPhone: '';
      setEmail: '';
      setBirthday: '';
      setComment: '';
    })
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name])
  // useEffect(() => {
  //   const storedName =  localStorage.setItem('contacts', state.name);
  //   // const storedPhone =  localStorage.setItem('contacts', state.phone);
  //   // const storedEmail =  localStorage.setItem('contacts', state.email);
  //   // const storedBDay =  localStorage.setItem('contacts', state.birthday);
  //   // const storedComment = localStorage.setItem('contacts', state.comment);
  // }, [state.name])

  return (

      <form>
        <Text variant='h5' align='center'>New Contact</Text>
        <label>
          Full Name:
          <TextInput
            name='name'
            placeholder='Enter name'
            value={name}
            onChange={setName}
          />
        </label>
        <label>
          Phone:
          <TextInput
            name='phone'
            placeholder='Enter phone'
            value={phone}
            onChange={setPhone}
          />
        </label>
        <label>
          Email:
          <TextInput
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={setEmail}
          />
        </label>
        <label>
          <input
            type='date'
            name='birthday'
            onChange={e => setBirthday(e.target.value)}
            value={birthday}
          />
        </label>
        <label>
          Add comment:
          <TextInput
            name='comment'
            placeholder='Enter some extra info'
            value={comment}
            onChange={setComment}
          />
        </label>
        <Button
          type='submit'
          onClick={addContact}
          styled={{
            Button: css`
              display: block;
              margin: 10px auto;
             `,
          }}
        >
          Add
        </Button>
      </form>
  )
};
