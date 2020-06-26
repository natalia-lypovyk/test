import React, { FC, useContext, MouseEvent, Fragment } from 'react';
import { useForm, ErrorMessage, useFieldArray, Controller } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import TextInput from 'ustudio-ui/components/Input/TextInput';

import { Context } from '../../../shared/context';
import { Contact, Phone } from '../../../shared/types';

import Styled from './form.styles';

type FormData = {
  name: string;
  phones: Phone[];
  email: string;
  birthday: string;
  comment: string;
  id: string;
}

export const Form: FC = () => {
  const { state: contacts, dispatch } = useContext(Context);
  const { register, handleSubmit, errors, getValues, triggerValidation, control, reset } = useForm<FormData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'phones' });

  const onSubmit = (data: Contact) => {
    console.log(data);

    const newContact = {
      ...data,
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

    reset();
  };

  if (fields.length === 0) {
    append({});
  }

  return (
    <Styled.Form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Styled.Heading>New Contact</Styled.Heading>
      <Styled.Label>
        Full Name:
        <Controller
          as={TextInput}
          name='name'
          prefix={<Styled.NameIcon />}
          control={control}
          rules={{ required: true, minLength: 3 }}
          placeholder='Steve Jobs'
        />
        <ErrorMessage errors={errors} name='name'>
          {({ message }) => <Styled.ErrorMessage>You should enter name</Styled.ErrorMessage>}
        </ErrorMessage>
      </Styled.Label>

      {fields.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <Styled.Label>
              Phone:
              <Controller
                as={TextInput}
                id={`phones[${index}]`}
                name={`phones[${index}].phone`}
                prefix={<Styled.PhoneIcon />}
                control={control}
                placeholder='+380931111111'
              />
            </Styled.Label>
            <Styled.Button
              type='button'
              onClick={() => remove(index)}
            >
              Remove
            </Styled.Button>
          </Fragment>
        )
      })}

      <Styled.Button
        type='button'
        onClick={(e: MouseEvent) => {
          e.preventDefault();
          append({});
        }}
      >
        Add phone
      </Styled.Button>

      <Styled.Label>
        Email:
        <Controller
          as={TextInput}
          name='email'
          prefix={<Styled.EmailIcon />}
          control={control}
          rules={{
            required: true,
            pattern: /^\S+@\S+\.\S{2,4}$/
          }}
          placeholder='my-mail@gmail.com'
        />
        {errors?.email?.type === 'required' && (
          <Styled.ErrorMessage>You should enter email</Styled.ErrorMessage>
        )}
        {errors?.email?.type === 'pattern' && (
          <Styled.ErrorMessage>You should enter valid email</Styled.ErrorMessage>
        )}
      </Styled.Label>

      <Styled.Label>
        <input
          type='date'
          name='birthday'
          ref={register}
          min='1900-01-01'
          max='2020-06-22'
        />
      </Styled.Label>

      <Styled.Label>
        Add comment:
        <Styled.TextArea
          name='comment'
          ref={register}
          placeholder='Some extra info'
        ></Styled.TextArea>
      </Styled.Label>

      <Styled.Button>Submit</Styled.Button>

      {/*<Styled.Button*/}
      {/*  type='button'*/}
      {/*  onClick={() => {*/}
      {/*    setValue('name', 'Frodo');*/}
      {/*    setValue('email', 'frodo@gmail.com');*/}
      {/*    setValue('comment', 'Coming to Mount Doom, as usual');*/}
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
    </Styled.Form>
  )
};
