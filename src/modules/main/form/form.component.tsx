import React, {FC, FormEvent, useContext, useState} from 'react';
import { v4 as uuid } from 'uuid';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';

import { Contact } from '../../../shared/types';

import Styled from './form.styles';
import {Context} from '../../../shared/context';

export const Form: FC = () => {
  const { dispatch, state: contacts } = useContext(Context);
  const [contact, setContact] = useState<Contact>({} as Contact);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newContact = {
      ...contact,
      id: uuid()
    }

    dispatch({
      type: 'CREATE_CONTACT',
      payload:  {
        contact: newContact
      }
    });

    localStorage.setItem('contacts', JSON.stringify([
      ...contacts,
      newContact
    ]));

    setContact({
      name: '',
      phone: '',
      email: '',
      birthday: '',
      comment: '',
      id: ''
    });
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Heading>New Contact</Styled.Heading>
      <Styled.Label>
        Full Name:
        <TextInput
          name='name'
          placeholder='John Smith'
          prefix={<Styled.NameIcon />}
          value={contact.name}
          onChange={value => setContact({
            ...contact,
            name: value
          })}
        />
      </Styled.Label>

      <Styled.Label>
        Phone:
        <TextInput
          name='phone'
          placeholder='+380931111111'
          value={contact.phone}
          prefix={<Styled.PhoneIcon />}
          onChange={value => setContact({
            ...contact,
            phone: value
          })}
        />
      </Styled.Label>

      <Styled.Label>
        Email:
        <TextInput
          name='email'
          placeholder='my-mail@gmail.com'
          value={contact.email}
          prefix={<Styled.EmailIcon />}
          onChange={value => setContact({
            ...contact,
            email: value
          })}
        />
      </Styled.Label>

      <Styled.Label>
        <input
          type='date'
          name='birthday'
          min='1900-01-01'
          max='2020-06-22'
          value={contact.birthday}
          onChange={e => setContact({
            ...contact,
            birthday: e.target.value
          })}
        />
      </Styled.Label>

      <Styled.Label>
        Add comment:
        <TextArea
          name='comment'
          placeholder='Some extra info'
          value={contact.comment}
          onChange={value => setContact({
            ...contact,
            comment: value
          })}
        />
      </Styled.Label>
      <Styled.Button>Add</Styled.Button>
    </Styled.Form>
  )
};
