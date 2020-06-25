import styled from 'styled-components';
import Cell from 'ustudio-ui/components/Grid/Cell';

const Block = styled(Cell)`
  padding: 0 10%;
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

export default { Block, Input};
