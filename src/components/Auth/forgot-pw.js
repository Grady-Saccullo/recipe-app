import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { FirebaseContext } from '../../utils/Firebase';
import * as ROUTES from '../../utils/constants/routes';
import {
  UnStyledLink,
  SmallButton,
  ErrorMessage,
  SquaredButtonSmall
} from '../Shared';


import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';


/******************* Forgot Password Form *******************/
export const ForgotPasswordPasswordForm = () => {
  let firebase = useContext(FirebaseContext);

  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState(null);

  const onSubmit = event => {
    firebase.doForgotPassword(email)
      .catch(error => setError(error));
  }

  const isInvalid = 
    email === ''

  return (
    <FormContainer onSubmit={onSubmit}>
      {/* E-Mail Input */}

      <FormInput variant="outlined">
        <InputLabel>E-Mail</InputLabel>
        <OutlinedInput
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
          labelWidth={45}
        />
      </FormInput>
      <SmallButton disabled={isInvalid} type="submit" >Send Rest Link</SmallButton>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </FormContainer>
  );
}

// Styled Components
const FormContainer = styled.form`
  width: 275px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FormInput = styled(FormControl)`
  margin-bottom: 10px;
`;

/******************* Forgot Password Button *******************/
export const ForgotPasswordButton = () => {
  let routerHistory = useHistory();

  return (
    <SquaredButtonSmall variant="text" onClick={event => routerHistory.push(ROUTES.FORGOT_PW)}>Forgot password?</SquaredButtonSmall>
  );
}

/******************* Forgot Password Button *******************/
export const ForgotPasswordLink = () => (
  <p>
    <UnStyledLink to={ROUTES.CREATE_ACCOUNT}>Forgot password?</UnStyledLink>
  </p>
);
