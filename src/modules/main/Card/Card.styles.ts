import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import styled from 'styled-components';

const CardBlock = styled(Flex)`
  position: relative;
  width: 300px;
  margin: 10px;
  padding: 10px;
  
  border: 1px solid var(--c-neutral);
  border-radius: 4px;
  background: #fff;  
`;

const Title = styled(Text)`
  padding: 5px; 
  
  font-family: 'Archivo', sans-serif;  
`;

const RemoveButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 15px;
  height: 15px; 
  color: black;   
  
  &:hover {
    display: block:
  }
  
  &:after {
    content: "×";
  }
`;

export default { CardBlock, Title, RemoveButton };
