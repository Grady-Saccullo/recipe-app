import React from 'react';
import styled from 'styled-components';
import { Fab, Button } from '@material-ui/core';

/******************* Local Imports *******************/
import theme from '../../utils/constants/theme';

/******************* MainButton *******************/
export const MainButton = ({ type, disabled, onClick, invertColors, children }) => {

  let borderOn =
    disabled
      ? null
      : `solid 2px ${ invertColors ? theme.colors.accent : theme.colors.main }`;

  const StyledButton = styled(Fab)`
    background-color: ${theme.colors.main};
    color: ${ invertColors ? theme.colors.accent : '#fff'};
    border: ${borderOn};
    text-transform: inherit;

    transition: all .4s ease;
    :hover {
      background-color: ${invertColors ? theme.colors.accent : theme.colors.main};
      color: ${invertColors ? theme.colors.main : theme.colors.accent};
    }
  `;

  const ButtonContainer = styled.div`
    margin: 0 auto;
  `;

  return (
    <ButtonContainer>
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        type={type}
        variant="extended"
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};

/******************* SmallButton *******************/
export const SmallButton = ({ type, disabled, onClick, invertColors, children }) => {
  
  let borderOn = 
    disabled
      ? null
      : `solid 2px ${ invertColors ? theme.colors.accent : theme.colors.main }`;

  const StyledButton = styled(Fab)`
    height: 28px;
    padding: 0 10px;
    text-transform: inherit;
    background-color: ${theme.colors.main};
    color: ${ invertColors ? theme.colors.accent : '#fff' };
    border: ${borderOn};

    transition: all .4s ease;
    :hover {
      background-color: ${invertColors ? theme.colors.accent : theme.colors.main};
      color: ${invertColors ? theme.colors.main : theme.colors.accent};
    }
  `;

  const ButtonContainer = styled.div`
    margin: 0 auto;
  `;

  return (
    <ButtonContainer>
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        type={type}
        variant="extended"
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};

/******************* SocialLoginButton *******************/
export const SquaredButton = ({ type, disabled, onClick, backgroundColor, variant, children }) => {
  const StyledButton = styled(Button)`
    background-color: ${backgroundColor};
    text-transform: inherit;
  `;

  const ButtonContainer = styled.div`
    margin: 0 auto;
  `;

  ////////////////////////////////////////
  const variantType = variant === undefined ? 'outlined' : variant ;

  return(
    <ButtonContainer>
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        type={type}
        variant={variantType}
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  )
}

/******************* SocialLoginButton *******************/
export const SquaredButtonSmall = ({ type, disabled, onClick, backgroundColor, variant, children }) => {
  const StyledButton = styled(Button)`
    background-color: ${backgroundColor};
    text-transform: inherit;
    height: 28px;
    padding: 3px 10px;
  `;

  const ButtonContainer = styled.div`
    margin: 0 auto;
  `;

  ////////////////////////////////////////
  const variantType = variant === undefined ? 'outlined' : variant;

  return (
    <ButtonContainer>
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        type={type}
        variant={variantType}
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  )
}