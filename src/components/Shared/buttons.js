import React from 'react';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import theme from '../../constants/theme';


export const MainButton = ({ type, disabled, children}) => {
  const StyledButton = styled(Fab)`
    background-color: ${theme.colors.main};
    color: #fff;

    transition: all .4s ease;
    :hover {
      background-color: ${theme.colors.main};
      color: ${theme.colors.accent}
    }
  `;

  const ButtonContainer = styled.div`
    margin: 0 auto;
  `;

  return (
    <ButtonContainer>
      <StyledButton disabled={disabled} type={type} variant="extended">
        {children}
      </StyledButton>
    </ButtonContainer>
  )
}