import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import styled from 'styled-components';

const RemoveButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px; 
  color: #c94c63;   
  font-size: 20px;
  font-weight: bold;
  
  &:hover {
    display: block;
  }
  
  &:after {
    content: "×";
  }
`;

const CardBlock = styled(Flex)`
  position: relative;
  width: 300px;
  margin: 10px 0;
  padding: 10px;
  
  border: 1px solid var(--c-neutral);
  border-radius: 4px;
  background: #fff;  
  
  &:hover {
    ${RemoveButton} {
      display: block;
    }
  }
`;

const Title = styled(Text)`
  padding: 5px;   
  font-family: 'Archivo', sans-serif;  
`;

export default { CardBlock, Title, RemoveButton };
