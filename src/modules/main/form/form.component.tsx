import React, { FC, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { Contact } from '../../../shared/types';

import Styled from './form.styles';
import {Context} from '../../../shared/context';

type FormData = {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  comment: string;
  group: string;
}

export const Form: FC = () => {
  const { dispatch, state: contacts } = useContext(Context);
  const [contact, setContact] = useState<Contact>({} as Contact);
  const { register, handleSubmit, errors, getValues, triggerValidation, formState } = useForm<FormData>();
  const { dirtyFields } = formState;

  const onSubmit = (data: FormData) => {
    console.log(data)
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
      id: '',
      group: ''
    });

    console.log(dirtyFields);
  };

  return (
    <Styled.Form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Styled.Heading>New Contact</Styled.Heading>
      <Styled.Label>
        Full Name:
        <Styled.Input
          name='name'
          ref={register({
            required: true,
            minLength: 3
          })}
          placeholder='John Smith'

          value={contact.name}
          onChange={e => setContact({
            ...contact,
            name: e.target.value
          })}
        />
        {errors.name && errors.name.type === 'required' && (
          <Styled.ErrorMessage>This field is required!</Styled.ErrorMessage>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <Styled.ErrorMessage>Name length should be more than 3 letters</Styled.ErrorMessage>
        )}
      </Styled.Label>

      <Styled.Label>
        Phone:
        <Styled.Input
          name='phone'
          type='tel'
          ref={register}
          placeholder='+380931111111'
          value={contact.phone}
          onChange={e => setContact({
            ...contact,
            phone: e.target.value
          })}
        />
      </Styled.Label>

      <Styled.Label>
        Email:
        <Styled.Input
          name='email'
          ref={register({
            required: true,
            pattern: /^\S+@\S+\.\S{2,4}$/
          })}
          placeholder='my-mail@gmail.com'
          value={contact.email}
          onChange={e => setContact({
            ...contact,
            email: e.target.value
          })}
        />
        {errors.email && errors.email.message}
      </Styled.Label>

      <Styled.Label>
        <Styled.Input
          type='date'
          name='birthday'
          ref={register}
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
        <Styled.TextArea
          name='comment'
          ref={register}
          placeholder='Some extra info'
          value={contact.comment}
          onChange={e => setContact({
            ...contact,
            comment: e.target.value
          })}
        />
      </Styled.Label>

      <Styled.Label>
        <Styled.Select
          ref={register}
          name='group'
          onChange={(e) => {
            setContact({
              ...contact,
              group: e.target.value
            })
          }}
        >
          <option value='family'>Family</option>
          <option value='friends'>Friends</option>
          <option value='work'>Work</option>
        </Styled.Select>
      </Styled.Label>

      <Styled.Button>Add</Styled.Button>

      {/*<Styled.Button*/}
      {/*  type='button'*/}
      {/*  onClick={() => {*/}
      {/*    setValue('name', 'Frodo');*/}
      {/*    setValue('email', 'frodo@gmail.com');*/}
      {/*    setValue('comment', 'Coming to Mount Doom, as usual');*/}
      {/*    setValue('group', 'friends');*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Set values*/}
      {/*</Styled.Button>*/}

      <Styled.Button
        type='button'
        onClick={() => {
          const values = getValues();
          const singleValue = getValues('name');

          console.log('get', values, singleValue)
        }}
      >
        Get Values
      </Styled.Button>

      {/*<Styled.Button*/}
      {/*  type='button'*/}
      {/*  onClick={() => { triggerValidation('name'); }}*/}
      {/*>*/}
      {/*  Trigger validation*/}
      {/*</Styled.Button>*/}

      <Styled.Button
        type='button'
        onClick={async () => {
          const result = await triggerValidation('name');
          if (result) {
            console.log('valid input')
          }
          console.log(result, 'Invalid input, Enter name!')
        }}
      >
        Trigger to console
      </Styled.Button>

      <Styled.GetSection>
        <legend>getValues</legend>
        <pre>{JSON.stringify(getValues(), null, 2)}</pre>
      </Styled.GetSection>

      <Styled.StateSection>
        <legend>formState</legend>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </Styled.StateSection>
    </Styled.Form>
  )
};
