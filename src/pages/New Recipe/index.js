import React, { useState, useContext, useEffect } from 'react';

import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import {
  EditableContent,
  Title,
  Description,
  SectionTitle,
  Item,
  ItemField
} from './styles';
import { SectionNarrowWidth } from '../../components/Shared';



const NewRecipe = () => {

  const [ textFields, setTextFields ] = useState({
    title: '',
    description: '',
  });

  const [ recipeType, setRecipeType ] = useState({
    food: false,
    drink: false,
  });

  const [ ingredientsList, setIngredientsList ] = useState([]);

  const handleTypeChange = name => event => {
    setRecipeType({ ...recipeType, [name]: event.target.checked });
  };

  const handleFieldChange = event => {
    setTextFields({ ...textFields, [ event.target.name ]: event.target.value });
  }

  const addIngredients = ( ingredients ) => {
    let tempList = ingredientsList;
    tempList.push(ingredients);
    setIngredientsList(tempList);
  }

  const { title, description } = textFields;
  const { food, drink } = recipeType;

  

  return (
    <SectionNarrowWidth> 
      <EditableContent>
        <div className="text-content">
          <Title
            name="title"
            value={title}
            placeholder="Title*"
            onChange={event => handleFieldChange(event)}
          />
          <Description
            name="description"
            value={description}
            placeholder="Description"
            onChange={event => handleFieldChange(event)}
          />
        </div>
        <FormControl>
          <FormLabel>Recipe Type</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Food"
              disabled={drink}
              control={
                <Checkbox
                  checked={food}
                  value="food"
                  onChange={handleTypeChange('food')}
                  />
              }
            />
            <FormControlLabel
            label="Drink"
            disabled={food}
              control={
                <Checkbox
                  checked={drink}
                  value="drink"
                  onChange={handleTypeChange('drink')}
                />
              }
            />
          </FormGroup>
        </FormControl>
        <div>IMAGE UPLOADED GOES HERE</div>

        <SectionTitle>Ingredients</SectionTitle>
        {
          ingredientsList !== undefined
            ? (
              ingredientsList.map(ingredient => (
                  <>
                    <div>{ingredient.qty}</div>
                    <div>{ingredient.type}</div>
                    <div>{ingredient.description}</div>
                  </>
                ))
            ) : ( console.log('in false') )
        }
        <Ingredients onClick={addIngredients} />
        <SectionTitle>Steps</SectionTitle>
        <Item>list type box at bottom for next element</Item>
      </EditableContent>
    </SectionNarrowWidth>
  );
}

const Ingredients = ({ onClick }) => {
  const [ingredients, setIngredients] = useState({
    qty: '',
    type: '',
    description: ''
  });

  const onChange = event => {
    setIngredients({ ...ingredients, [ event.target.name ]: event.target.value })
  };

  const onAddClick = event => {
    onClick(ingredients);
    setIngredients({
      qty: '',
      type: '',
      description: ''
    });
    event.preventDefault();
  }

  const addS = () => (
    `${
      ingredients.qty > 1
        ? 's'
        : ''
    }`
  );

  const isInvalid =
    ingredients.qty === '' ||
    ingredients.type === '' ||
    ingredients.description === '';

  return (
    <Item>
      <FormControl>
      <InputLabel>Qty</InputLabel>
      <ItemField
        name="qty"
        width="75px"
        value={ingredients.qty}
        onChange={event => onChange(event)}
      />
      </FormControl>
      <FormControl>
        <InputLabel>Measurement</InputLabel>
        <Select
          name="type"
          value={ingredients.type}
          onChange={event => onChange(event)}
        >
          <MenuItem value="none"><em>None</em></MenuItem>
          <MenuItem value="cup">Cup{addS()}</MenuItem>
          <MenuItem value="pint">Pint{addS()} </MenuItem>
          <MenuItem value="gram">gram{addS()}</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <ItemField
          name="description"
          width="300px"
          value={ingredients.description}
          onChange={event => onChange(event)}
        />
      </FormControl>
      <button disabled={isInvalid} onClick={onAddClick}>Add</button>
    </Item>
  );
}

export default NewRecipe;