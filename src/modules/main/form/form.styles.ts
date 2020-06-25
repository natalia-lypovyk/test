import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

import { ReactComponent as Phone} from '../../../assets/image/phone.svg';
import { ReactComponent as Email } from '../../../assets/image/email.svg';
import { ReactComponent as Name } from '../../../assets/image/name.svg';

const Form = styled.form`
  padding: 55px 0 0;  
  position: relative;
`;

const Input = styled.input`
  height: 35px;
  width: 100%;
  display: block;
  background: aliceblue;
  
  border-radius: 4px;
  padding-left: 10px;
  font-size: 1em;
  
  &::placeholder {
    color: #6fa7a9;
  }
  
  &:focus {
    border-bottom: 1.5px solid #399E97;
  }
`;

const TextArea = styled.textarea`
  height: 60px;
  width: 100%;
  background: aliceblue;
  border-radius: 4px;
  padding: 10px;
  
  &::placeholder {
    color: #6da7a9;
  }
  
  &:focus {
    border-bottom: 1.5px solid #399E97;
  }
`;

const Select = styled.select`
  background-color: aliceblue;
  width: 100px;
  height: 30px;
  padding: 5px;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: #c41235;
  margin-left: 15px;  
`;

const Heading = styled(Text)`
  margin: 10px 0 40px;
  
  font-family: 'Julius Sans One', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;  
  text-align: center;  
`;

const PhoneIcon = styled(Phone)`
  width: 15px;
  height: 15px;
`;

const EmailIcon = styled(Email)`
  width: 15px;
  height: 15px;
`;

const NameIcon = styled(Name)`
  width: 15px;
  height: 15px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  margin: 10px auto;
 
  border-radius: 4px; 
  
  background: #399E97;
  color: white; 
  
  font-family: 'Julius Sans One', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;  
  text-align: center;
  
  transition: color 0.4s linear, background 0.4s linear, transform 0.4s linear, box-shadow 0.4s linear;
  
  &:hover {
    background: #2b7879; 
    box-shadow: 0 0 5px 1px rgba(232,240,236,1);
    color: #c6d5b4;
  }
  
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px 1px rgba(232,240,236,1);
    color: #c6d5b4;
  }
`;

const GetSection = styled.fieldset`
  border: 1.5px solid darkcyan;
  border-radius: 4px;
  padding: 5px;
`;

const StateSection = styled.fieldset`
  border: 1.5px solid darkcyan;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  left: -250px;  
  top: 130px;
`;

export default { Form, Input, TextArea, GetSection, StateSection, Select, ErrorMessage, Heading, Label, PhoneIcon, EmailIcon, NameIcon, Button };
