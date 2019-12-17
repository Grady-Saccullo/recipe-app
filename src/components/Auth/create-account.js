import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/************ Local Imports *************/
import theme from '../../constants/theme';
import { MainButton } from '../../components/Shared';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../../utils/Firebase';

/******************* Material-UI *******************/
import {
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';


/******************* Create Account Form *******************/
export const CreateAccountForm = () => {

  let firebase = useContext(FirebaseContext)

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ passwordOne, setPasswordOne ] = useState('');
  const [ passwordTwo, setPasswordTwo ] = useState('');
  const [ error, setError ] = useState(null);

  const resetState = () => {
    setUsername('');
    setEmail('');
    setPasswordOne('');
    setPasswordTwo('');
    setError(null);
  }

  const onSubmit = event => {
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => resetState())
      .catch(error => setError(error));

    event.preventDefault();
  }

  const isInvalid =
    email === '' ||
    username === '' ||
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    passwordOne.length < 5;


  const passwordMismatch =
    passwordTwo.length > 5 &&
    passwordOne !== passwordTwo;

  return(
    <FormContainer onSubmit={onSubmit}>
      {/* Username Input */}
      <FormInput variant="outlined">
        <InputLabel>Username</InputLabel>
        <OutlinedInput
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          labelWidth={74}
        />
      </FormInput>

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

      {/* Password Input – p1 */}
      <FormInput variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          error={passwordMismatch}
          type="password"
          value={passwordOne}
          onChange={event => setPasswordOne(event.target.value)}
          labelWidth={70}
        />
      </FormInput>

      {/* Password Input – p2 */}
      <FormInput variant="outlined">
        <InputLabel>Confirm Password</InputLabel>
        <OutlinedInput
          error={passwordMismatch}
          type="password"
          value={passwordTwo}
          onChange={event => setPasswordTwo(event.target.value)}
          labelWidth={132}
        />
      </FormInput>
      <MainButton disabled={isInvalid} type="submit" >CreateAccount</MainButton>
      { error && <ErrorMessage>{error.message}</ErrorMessage>}
    </FormContainer>
  );
};

// Styled Components – Create Account Form
const FormContainer = styled.form`
  min-width: 275px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FormInput = styled(FormControl)`
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  color: ${theme.text.colors.error};
`;


/******************* Create Account Link *******************/
export const CreateAccountLink = () => (
  <p>
    Don't have an account? <UnStyledLink to={ROUTES.CREATE_ACCOUNT}>Create one here!</UnStyledLink>
  </p>
);

// Styled Components – Create Account Form
const UnStyledLink = styled(Link)`
  text-decoration: underline;
  color: ${theme.text.colors.main};
  font-family: ${theme.text.fonts.main};
  font-size: 1em;

  :hover {
    font-weight: bold;
  }
`;