import React from 'react';


/************ Local Imports *************/
import { SignOutButton } from '../../components/Auth';
import { Section, PageTitle } from '../../components/Shared';

const Account = () => (
  <Section>
    <PageTitle>Account</PageTitle>
    <SignOutButton />
  </Section>
);

export default Account;