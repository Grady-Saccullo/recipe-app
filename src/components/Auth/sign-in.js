import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/************ Local Imports *************/
import * as ROUTES from '../../utils/constants/routes';
import { FirebaseContext } from '../../utils/Firebase';
import googleIcon from '../../assets/icons/google-login.png';
import {
  UnStyledLink,
  ErrorMessage,
  SmallButton,
  SquaredButton
} from '../../components/Shared';

/******************* Material-UI *******************/
import {
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';


/******************* Sign In Form – Email & Password *******************/
export const SignInForm = () => {

  let firebase = useContext(FirebaseContext);
  let routerHistory = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState(null);

  const onSubmit = event => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => routerHistory.push(ROUTES.HOME))
      .catch(error => {setError(error)});
      event.preventDefault();
  }
  
  const fieldsFilled =
    email === '' ||
    password === '' ||
    password.length < 6;

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

      {/* Password Input */}
      <FormInput variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          labelWidth={70}
        />
      </FormInput>
      <SmallButton disabled={fieldsFilled} type="submit" >Sign in</SmallButton>
      { error && <ErrorMessage>{error.message}</ErrorMessage> }
    </FormContainer>
  );
}

// Styled Components - Email & Password
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


/******************* Sign In Button – Google *******************/
export const SignInWithGoogleButton = () => {
  let firebase = useContext(FirebaseContext);
  let routerHistory = useHistory();

  const [ error, setError ] = useState(null);

  const onClick = event => {
    firebase
      .doSignInWithGoogle()
      .then(socialAuthUser =>{
        setError(null);
        routerHistory.push(ROUTES.HOME);
      })
      .catch(error => setError(error));

    event.preventDefault();
  }

  return (
    <>
      <SquaredButton onClick={onClick}>
        <GoogleImageContainer src={googleIcon} />
        Sign In With Google
      </SquaredButton>
      { error && <ErrorMessage>{error.message}</ErrorMessage> }
    </>
  )
}

// Styled Components - Google
const GoogleImageContainer = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

/******************* Sign In Form *******************/
export const SignInLink = () => (
  <p>
    <UnStyledLink to={ROUTES.SIGN_IN}>Sign In</UnStyledLink>
  </p>
);

/******************* Sign In Form *******************/
export const SignInButton = ({ invertColors }) => {

  let routerHistory = useHistory();

  return (
    <SmallButton invertColors={invertColors} onClick={event => routerHistory.push(ROUTES.SIGN_IN)}>SIGN IN</SmallButton>
  )
}