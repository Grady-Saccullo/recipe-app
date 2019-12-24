import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from '../Firebase';

/****************** AuthUserContext ******************/
export const AuthUserContext = React.createContext(null);

/****************** AppWrapper ******************/
const AppWrapper = ({ children }) => {

  let firebase = useContext(FirebaseContext);
  let initialState;
  const localUserData = JSON.parse(localStorage.getItem('userData'));
  localUserData === null
    ? initialState = { isAuth: false }
    : initialState = localUserData;

  const [userData, setUserData] = useState(initialState);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authData => {
      setUserData(prevState => ({
        ...prevState,
        isAuth : authData === null ? false : true,
        authData
      }));
    });
    
    // Set local storage to userData state
    return function cleanup() {
      localStorage.removeItem('userData');
    }
  },[firebase.auth]);

  localStorage.setItem('userData', JSON.stringify(userData));

  return(
    <AuthUserContext.Provider value={ userData }>
      <FontImport>
        {children}
      </FontImport>
    </AuthUserContext.Provider>
  );
};

// Styled Components – App Wrapper
const FontImport = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto+Condensed:400,700&display=swap');

  * {
    font-family: 'Roboto Condensed';
  }
`;

export default AppWrapper;