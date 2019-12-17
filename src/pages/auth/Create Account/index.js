import React from 'react';


/************ Local Imports *************/
import { } from './styles';
import { PageTitle, Section } from '../../../components/Shared';
import { CreateAccountForm } from '../../../components/Auth';

const CreateAccount = () => {

  return(
    <Section>
      <PageTitle>Create Account</PageTitle>
      <CreateAccountForm />
    </Section>
  )
}

export default CreateAccount;