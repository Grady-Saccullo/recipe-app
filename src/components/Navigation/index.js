import React from 'react';


/**************** Local Imports ****************/
import * as ROUTES from '../../constants/routes';

/************** Styled Components **************/
import {
  Container,
  Content,
  LinkItem,
  Title,
} from './styles';


/**************** Navigation  *****************/
const Navigation = props => {

  return(
    <Container>
      <Content>
        <Title to={ROUTES.LANDING}>Recipes</Title>
        <div>
          <LinkItem to={ROUTES.HOME}>Home</LinkItem>
          <LinkItem to={ROUTES.MY_RECIPES}>My Recipes</LinkItem>
          <LinkItem to={ROUTES.ACCOUNT}>Account</LinkItem>
        </div>
      </Content>
    </Container>
  )
}

export default Navigation;