import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline, StylesProvider } from '@material-ui/core';

/************** Style Sheet **************/
import { AppWrapper } from './styles';

/*********** Component & Page Imports ***********/
import Navigation from '../components/Navigation';
import LandingPage from '../pages/Landing';
import HomePage from '../pages/Home';
import MyRecipesPage from '../pages/My Recipes';
import AccountPage from '../pages/Account';
import SignInPage from '../pages/auth/Sign In';
import CreateAccountPage from '../pages/auth/Create Account';
import ForgotPasswordPage from '../pages/auth/Forgot Password';

import * as ROUTES from '../constants/routes';

/****************** App ******************/
const App = () => (
  <>
    <CssBaseline />
    <Router>
      <AppWrapper>
        <StylesProvider injectFirst>
          <Navigation />
          
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.MY_RECIPES} component={MyRecipesPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.CREATE_ACCOUNT} component={CreateAccountPage} />
          <Route path={ROUTES.FORGOT_PW} component={ForgotPasswordPage} />
        </StylesProvider>
      </AppWrapper>
    </Router>
  </>
);

export default App;