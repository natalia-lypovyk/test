import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

import { ReactComponent as Phone} from '../../../assets/image/phone.svg';
import { ReactComponent as Email } from '../../../assets/image/email.svg';

const Form = styled.form`
  padding: 10px;
  margin: 0 auto;
`;

const Heading = styled(Text)`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 10px;
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

const Label = styled.label`
  display: block;
  margin: 10px 0;
`;

const Button = styled.button`
  display: block;
  margin: 10px auto;
  background: #399E97;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;

export default { Form, Heading, Label, PhoneIcon, EmailIcon, Button };
