import React, {FC, FormEvent, useState} from 'react';
import { v4 as uuid } from 'uuid';
import TextInput from 'ustudio-ui/components/Input/TextInput';

import { ContactType } from '../../../core/App.types';

import Styled from './Form.styles';

interface Props {
  addContact: (con: ContactType) => void;
}

export const Form: FC<Props> = ({ addContact }) => {
  const obj: Record<string, boolean> = {
    test: true
  }

  const [contact, setContact] = useState<ContactType>({} as ContactType)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [comment, setComment] = useState('');

  //const { dispatch } = useContext(Context);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const contact: ContactType = {
      name,
      phone,
      email,
      birthday,
      comment,
      id: uuid()
    };

    addContact(contact);
    setName('');
    setPhone('');
    setEmail('');
    setBirthday('');
    setComment('');
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Heading>New Contact</Styled.Heading>
      <Styled.Label>
        Full Name:
        <TextInput
          name='name'
          placeholder='John Smith'
          value={name}
          onChange={setName}
        />
      </Styled.Label>
      <Styled.Label>
        Phone:
        <TextInput
          name='phone'
          placeholder='+380931111111'
          prefix={<Styled.PhoneIcon />}
          value={phone}
          onChange={setPhone}
        />
      </Styled.Label>
      <Styled.Label>
        Email:
        <TextInput
          name='email'
          placeholder='my-mail@gmail.com'
          prefix={<Styled.EmailIcon />}
          value={email}
          onChange={setEmail}
        />
      </Styled.Label>
      <Styled.Label>
        <input
          type='date'
          name='birthday'
          min='1900-01-01'
          max='2020-06-22'
          onChange={e => setBirthday(e.target.value)}
          value={birthday}
        />
      </Styled.Label>
      <Styled.Label>
        Add comment:
        <TextInput
          name='comment'
          placeholder='Some extra info'
          value={comment}
          onChange={setComment}
        />
      </Styled.Label>
      <Styled.Button>Add</Styled.Button>
    </Styled.Form>
  )
};
