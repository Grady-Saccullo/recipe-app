import React, { useContext } from 'react';

/**************** Local Imports ****************/
import * as ROUTES from '../../utils/constants/routes';
import { AuthUserContext } from '../../utils/context/user-context';
import { SignInButton } from '../Auth';

/************** Styled Components **************/
import {
  Container,
  Content,
  Title,
  LinksContainer,
  LinkItem,
  AccountIcon,
} from './styles';


/**************** Navigation  *****************/
const Navigation = () => {
  let userData = useContext(AuthUserContext);
  console.log(userData);
  return(
    <Container>
      <Content>
        <Title to={ROUTES.LANDING}>Recipes</Title>
        <LinksContainer>
        {
          userData.isAuth
            ? (
              <>
              <LinkItem to={ROUTES.HOME}>Home</LinkItem>
              <LinkItem to={ROUTES.MY_RECIPES}>My Recipes</LinkItem>
              <AccountIcon to={ROUTES.ACCOUNT} src={userData.authData.photoURL} />
              </>
            ) : (
              <SignInButton invertColors/>
            ) 
        }
        </LinksContainer>
      </Content>
    </Container>
  )
}

export default Navigation;