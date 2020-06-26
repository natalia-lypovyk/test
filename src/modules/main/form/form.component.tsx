import React, { FC, useState, useContext } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { Context } from '../../../shared/context';
import { Contact } from "../../../shared/types";

import Styled from './form.styles';

type FormData = {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  comment: string;
  group: string;
  id: string;
}

export const Form: FC = () => {
  const { state: contacts, dispatch } = useContext(Context);
  const [contact, setContact] = useState<Contact>({} as Contact);  
  const [indexes, setIndexes] = useState<number[]>([]);
  const [counter, setCounter] = useState(0);
  const { register, handleSubmit, errors, getValues, triggerValidation, formState } = useForm<FormData>();

  const onSubmit = (data: Contact) => {
    console.log(data);

    const newContact = {
      ...contact,
      id: uuid()
    }

    dispatch({
      type: 'CREATE_CONTACT',
      payload: {
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

  const addContact = () => {
    setIndexes(prev => [...prev, counter]);
    setCounter(prev => prev + 1);
  }

  const removeContact = (index: number) => () => {
    setIndexes(prev => [...prev.filter(item => item !== index)]);
    setCounter(prev => prev - 1);
  }

  const clearContacts = () => {
    setIndexes([]);
  };

  return (
    <Styled.Form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Styled.Heading>New Contact</Styled.Heading>
      {indexes.map(index => {
        const fieldName = `contacts[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <Styled.Label>
              Full Name:
              <Styled.Input
                name={`${fieldName}.name`}
                ref={register({ required: 'This is required' })}
                placeholder='John Smith'
              />
              <ErrorMessage errors={errors} name='name' as={<Styled.ErrorMessage />} />
            </Styled.Label>

            <Styled.Label>
              Phone:
              <Styled.Input
                name={`${fieldName}.phone`}
                type='tel'
                ref={register}
                placeholder='+380931111111'
              />
            </Styled.Label>

            <Styled.Label>
              Email:
              <Styled.Input
                name={`${fieldName}.email`}
                ref={register({
                  required: true,
                  pattern: /^\S+@\S+\.\S{2,4}$/
                })}
                placeholder='my-mail@gmail.com'
              />
              <ErrorMessage errors={errors} name='email' as={<Styled.ErrorMessage />} />
            </Styled.Label>

            <Styled.Label>
              <Styled.Input
                type='date'
                name={`${fieldName}.birthday`}
                ref={register}
                min='1900-01-01'
                max='2020-06-22'
              />
            </Styled.Label>

            <Styled.Label>
              Add comment:
              <Styled.TextArea
                name={`${fieldName}.comment`}
                ref={register}
                placeholder='Some extra info'
              />
            </Styled.Label>

            <Styled.Label>
              <Styled.Select
                ref={register}
                name={`${fieldName}.group`}
              >
                <option value='family'>Family</option>
                <option value='friends'>Friends</option>
                <option value='work'>Work</option>
              </Styled.Select>
            </Styled.Label>

            <Styled.Button
              type='button'
              onClick={removeContact(index)}
            >
              Remove Contact
            </Styled.Button>
          </fieldset>
        )
      })}

      <Styled.Button
        type='button'
        onClick={addContact}
      >
        Add Contact
      </Styled.Button>

      <Styled.Button
        type='button'
        onClick={clearContacts}
      >
        Clear All Contacts
      </Styled.Button>

      <Styled.Button>Submit</Styled.Button>

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
