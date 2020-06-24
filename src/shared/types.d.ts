export interface Contact {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  comment: string;
  id: string;
}

type Action = {
  type: 'CREATE_CONTACT';
  payload: {
    contact: Contact
  };
} | {
  type: 'DELETE_CONTACT';
  payload: {
    id: string;
  };
} | {
  type: 'UPDATE_CONTACT';

}
