import React from 'react';


/************ Local Imports *************/
import { ButtonsContainer, SocialLoginTitle } from './styles';
import { PageTitle, Section, DivGap } from '../../../components/Shared';
import { SignInForm, CreateAccountButton, SignInWithGoogleButton, ForgotPasswordButton } from '../../../components/Auth';

const SignIn = () => {
  return (
    <Section>
      <PageTitle>Sign In</PageTitle>
      <SignInForm />
      <ButtonsContainer>
        <CreateAccountButton />
        <DivGap width={"25px"} />
        <ForgotPasswordButton />
      </ButtonsContainer>
      <SocialLoginTitle>Social Logins</SocialLoginTitle>
      <SignInWithGoogleButton />
    </Section>
  )
}

export default SignIn;