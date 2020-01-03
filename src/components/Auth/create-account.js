import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/************ Local Imports *************/
import { MainButton, UnStyledLink, ErrorMessage, SquaredButtonSmall } from '../../components/Shared';
import * as ROUTES from '../../utils/constants/routes';
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
  let routerHistory = useHistory();

  const [ first, setFirst ] = useState('');
  const [ last, setLast ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ passwordOne, setPasswordOne ] = useState('');
  const [ passwordTwo, setPasswordTwo ] = useState('');
  const [ error, setError ] = useState(null);

  const resetState = () => {
    setFirst('');
    setLast('');
    setUsername('');
    setEmail('');
    setPasswordOne('');
    setPasswordTwo('');
    setError(null);
  }

  const onSubmit = event => {
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        authUser.updateProfile({
          displayName: `${first} ${last}`
        })
        firebase.createNewUserDocument(
          {
            name: {
              first: first,
              last: last
            },
            username: username
        });
      })
      .catch(error => setError(error));
    
    routerHistory.push(ROUTES.HOME);
    resetState();
    event.preventDefault();
  }

  const isInvalid =
    first === '' ||
    last === '' ||
    username === '' ||
    email === '' ||
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    passwordOne.length < 6;


  const passwordMismatch =
    passwordTwo.length > 5 &&
    passwordOne !== passwordTwo;

  return(
    <FormContainer onSubmit={onSubmit}>
      {/* First Name Input */}
      <FormInput variant="outlined">
        <InputLabel>First Name</InputLabel>
        <OutlinedInput
          type="text"
          value={first}
          onChange={event => setFirst(event.target.value)}
          labelWidth={74}
        />
      </FormInput>

      {/* Last Name Input */}
      <FormInput variant="outlined">
        <InputLabel>Last Name</InputLabel>
        <OutlinedInput
          type="text"
          value={last}
          onChange={event => setLast(event.target.value)}
          labelWidth={74}
        />
      </FormInput>

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
      { error && <ErrorMessage>{error.message}</ErrorMessage> }
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

// END Styled Components

/******************* Create Account Link *******************/
export const CreateAccountLink = () => (
  <p>
    Don't have an account? <UnStyledLink to={ROUTES.CREATE_ACCOUNT}>Create one here!</UnStyledLink>
  </p>
);

/******************* Create Account Button *******************/
export const CreateAccountButton = ({ invertColors }) => {

  let routerHistory = useHistory();

  return (
    <SquaredButtonSmall  variant="text" invertColors={invertColors} onClick={ event => routerHistory.push(ROUTES.CREATE_ACCOUNT) }>Create Account</SquaredButtonSmall>
  )
}