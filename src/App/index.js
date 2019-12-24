import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline, StylesProvider } from '@material-ui/core';

/*********** Component & Page Imports ***********/
import Navigation from '../components/Navigation';
import LandingPage from '../pages/Landing';
import HomePage from '../pages/Home';
import AccountPage from '../pages/Account';
// Auth
import SignInPage from '../pages/auth/Sign In';
import CreateAccountPage from '../pages/auth/Create Account';
import ForgotPasswordPage from '../pages/auth/Forgot Password';
// Recipe
import MyRecipesPage from '../pages/My Recipes';
import NewRecipePage from '../pages/New Recipe';
import { AuthUserContext } from '../utils/context/user-context';
import * as ROUTES from '../utils/constants/routes';

/****************** App ******************/
const App = () => {
  let userData = useContext(AuthUserContext);
  return (
        <Router>
            <StylesProvider injectFirst>
              <CssBaseline />

              <Navigation />
              
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.CREATE_ACCOUNT} component={CreateAccountPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.FORGOT_PW} component={ForgotPasswordPage} />

              {
                userData.isAuth
                  ? (
                    <>
                      <Route exact path={ROUTES.HOME} component={HomePage} />
                      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                      <Route exact path={ROUTES.MY_RECIPES} component={MyRecipesPage} />
                      <Route exact path={ROUTES.NEW_RECIPE} component={NewRecipePage} />
                    </>
                  ) : ( null )
              }
            </StylesProvider>
        </Router>
  )
};

export default App;