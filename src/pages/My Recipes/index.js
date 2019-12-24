import React from 'react';

import PostAddIcon from '@material-ui/icons/PostAdd';

import { Section, PageTitle, UnStyledLink } from '../../components/Shared';
import * as ROUTES from '../../utils/constants/routes';
import testImage from '../../assets/images/test-recipe-image.jpg'
import {
  TitleContainer,
  AddButtonContainer,
  HrFull,
  CardsContainer,
  Card,
  CardHeroImg,
  CardContent,
  CardTitle,
  CardDescription
} from './styles';

const MyRecipes = () => (
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
      <Card>
        <CardHeroImg
          image={testImage}
          title="Card Title"
        />
        <CardContent>
          <CardTitle>Dish Title from Firebase Query</CardTitle>
          <CardDescription>Dish description from firebase query</CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeroImg
          src={testImage}
        />
        <CardContent>
          <CardTitle>Dish Title from Firebase Query</CardTitle>
          <CardDescription>Dish description from firebase query</CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeroImg
          src={testImage}
        />
        <CardContent>
          <CardTitle>Dish Title from Firebase Query</CardTitle>
          <CardDescription>Dish description from firebase query</CardDescription>
        </CardContent>
      </Card>
    </CardsContainer>
  </Section>
);

export default MyRecipes;