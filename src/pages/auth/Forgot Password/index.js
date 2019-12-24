import React from 'react';


/************ Local Imports *************/
import { PageTitle, Section } from '../../../components/Shared';
import { ForgotPasswordPasswordForm } from '../../../components/Auth';

const ForgotPassword = () => {
  return (
    <Section>
      <PageTitle>Forgot Password</PageTitle>
      <ForgotPasswordPasswordForm />
    </Section>
  )
}

export default ForgotPassword;