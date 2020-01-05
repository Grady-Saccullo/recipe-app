import React, { useState, useContext, useEffect, useCallback } from 'react';

import PostAddIcon from '@material-ui/icons/PostAdd';

import { Section, PageTitle, UnStyledLink } from '../../components/Shared';

import {
  TitleContainer,
  AddButtonContainer,
  HrFull,
  CardsContainer,
  CardLink,
  Card,
  CardHeroImg,
  CardContent,
  CardTitle,
  CardDescription
} from './styles';

import * as ROUTES from '../../utils/constants/routes';
import { FirebaseContext } from '../../utils/Firebase';
import { AuthUserContext } from '../../utils/context/user-context';


const MyRecipes = () => {

  const firebase = useContext(FirebaseContext)
  const authUser = useContext(AuthUserContext);

  const [ recipesState, setRecipesState ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const getRecipes = useCallback(() => {
    let currentRecipes = recipesState;
    firebase.getFSUserDocument(authUser.authData.uid, recipes => {
      recipes.forEach(recipe => {
        let tmpData = recipe.data();
        tmpData = {
          ...tmpData,
          id: recipe.id
        }
        currentRecipes.push(tmpData);
      });
      setIsLoading(false);
    });
    setRecipesState(currentRecipes);
  },[firebase, authUser.authData.uid, recipesState]);

  useEffect(() => {
    getRecipes();
  },[getRecipes]);

  return (
    <Section>
      <TitleContainer>
        <PageTitle>My Recipes</PageTitle>
        <UnStyledLink to={ROUTES.NEW_RECIPE}>
          <AddButtonContainer>
            <PostAddIcon fontSize="large" />
          </AddButtonContainer>
        </UnStyledLink>
      </TitleContainer>
      <HrFull />

      <CardsContainer>
        {!isLoading ? (
          recipesState.map((recipe, index) => (
            <CardLink key={index} to={{ pathname: `${ROUTES.MY_RECIPES}/${recipe.title}`, state: {data: recipe} }}>
            <Card>
              <CardHeroImg
                image={recipe.heroImageURL}
                title="Card Title"
              />
              <CardContent>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardContent>
            </Card>
          </CardLink>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </CardsContainer>
    </Section>
  )
};

export default MyRecipes;