import React, { useState } from 'react';
import { SectionNarrowWidth } from '../../components/Shared';

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox
} from '@material-ui/core'

import {
  HeroContainer,
  HeroImage,
  HeroTitle,
  HeroText
} from './styles';

const Recipe = (props) => {
  const [ recipe, ] = useState(props.location.state.data);
  
  return (
    <>
    <SectionNarrowWidth smallFullWidth>
    <HeroContainer>
        <HeroImage image={recipe.heroImageURL}/>
        <HeroText>
          <HeroTitle>{recipe.title}</HeroTitle>
        </HeroText>
      </HeroContainer>
    </SectionNarrowWidth>
    <SectionNarrowWidth>
      <div style={{
        width: '100%',
        marginTop: '15px',
        paddingLeft: '25px',
      }}>
      <FormControl>
        <h1>Ingredients</h1>
        <FormGroup row>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} style={{ padding: '0 45px 0 20px' }}>
              <FormControlLabel
                label={`${ingredient.qty} ${ingredient.type} ${ingredient.description}`}
                control={
                  <Checkbox
                    color="default"
                    // checked={food}
                    value=""
                    // onChange={handleTypeChange(value)}
                  />
                }
              />
            </div>
          ))}
        </FormGroup>
      </FormControl>
      </div>
      <div style={{
        width: '100%',
        marginTop: '15px',
        paddingLeft: '25px'
      }}>
        <h1 style={{ marginBottom: '0'}}>Steps</h1>
        {recipe.steps.length > 0
          ? (
            recipe.steps.map((step, index) => (
              <div key={index} style={{ padding: '0 45px 0 20px' }}>
                <h3 style={{ marginBottom: '0' }}>Step {index + 1}.</h3>
                <hr style={{ color: 'black' }} />
                <p style={{ fontSize: '1.5em' }}>{step.description}</p>
              </div>
            ))

          ) : (null)
        }
      </div>
    </SectionNarrowWidth>
    </>
  );
};

export default Recipe;