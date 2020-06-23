import React, {FC, FormEvent, useState} from 'react';
import { v4 as uuid } from 'uuid';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';

import { ContactType } from '../../../core/app.types';

import Styled from './form.styles';

interface Props {
  addContact: (con: ContactType) => void;
}

export const Form: FC<Props> = ({ addContact }) => {
  const [contact, setContact] = useState<ContactType>({} as ContactType);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addContact({
      ...contact,
      id: uuid()
    });

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
