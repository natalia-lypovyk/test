import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import styled from 'styled-components';

const CardBlock = styled(Flex)`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid var(--c-neutral);
  border-radius: 4px;
  background: #fff;  
`;

const Title = styled(Text)`
  font-family: 'Archivo', sans-serif;
  padding: 5px; 
`;

export default { CardBlock, Title };
