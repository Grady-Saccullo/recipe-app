import React from 'react';
import { Section, PageTitle } from '../../components/Shared'

const Recipe = (props) => {


  const recipe = props.location.state.data;

  return (
    <Section>
      <PageTitle>{recipe.title}</PageTitle>
    </Section>
  );
};

export default Recipe;