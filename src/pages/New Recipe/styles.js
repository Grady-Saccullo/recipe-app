import styled from 'styled-components';

import {
  InputBase,
  OutlinedInput,
  Input,
  Select
} from '@material-ui/core';

export const EditableContent = styled.form`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .text-content .Mui-focused {
    background-color: #e9e9e9;
  }
`;

export const Title = styled(InputBase)`
  font-size: 4em;
  margin: 25px 0 10px;
  padding: 0 10px;
  border-radius: 3px;

  :hover {
    background-color: #e9e9e9;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  width: fit-content;
  border: 1px solid #a1a1a1;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemInputField = styled(Input)`
  width: 100%;
  max-width: ${ props => props.width };
  height: 32px;
  border-radius: 1px solid #a9a9a9;
`;

export const Description = styled(InputBase)`
  font-size: 1.25em;
  width: 100%;
  max-width: 500px;
  margin: 15px 0 10px;
  padding: 0 10px;
  border-radius: 3px;
  
  :hover {
    background-color: #e9e9e9
  }
`;

export const ItemSelectField = styled(Select)`
  width: ${ props => props.width };
`


