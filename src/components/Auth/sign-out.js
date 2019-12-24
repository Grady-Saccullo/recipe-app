 import React, { useContext } from 'react';
import { FirebaseContext } from '../../utils/Firebase';
import { SmallButton } from '../Shared';
import { useHistory } from 'react-router-dom';

export const SignOutButton = ({ invertColors }) => {
  let firebase = useContext(FirebaseContext);
  let routerHistory = useHistory();

  const onClick = () => {
    firebase.doSignOutUser();
    routerHistory.push('/');
  }

  return (
    <SmallButton disabled={false} invertColors={invertColors} onClick={onClick}>Sign Out</SmallButton>
  )
}