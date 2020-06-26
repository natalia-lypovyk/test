export interface Contact {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  comment: string;
  id: string;
}

export type Action = {
  type: 'CREATE_CONTACT';
  payload: {
    contact: Contact;
  }; 
} | {
  type: 'REMOVE_CONTACT';
  payload: {
    id: string;
  };
} | {
  type: 'UPDATE_CONTACT';  
}
