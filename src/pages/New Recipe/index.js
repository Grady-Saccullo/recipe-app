import React, { useState, useContext, useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Fab,
  IconButton
} from '@material-ui/core';

import {
  EditableContent,
  Title,
  Description,
  SectionTitle,
  Item,
  ItemInputField,
  ItemSelectField
} from './styles';

import {
  SectionNarrowWidth,
  SpanGap
} from '../../components/Shared';



const NewRecipe = () => {

  const [ state, setState ] = useState({
    title: '',
    description: '',
    notes: '',
    food: false,
    drink: false,
    ingredients: [],
    steps: []
  });

  const handleTypeChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleFieldChange = event => {
    setState({ ...state, [ event.target.name ]: event.target.value });
  }

  const addIngredients = ( ingredients ) => {
    let tempList = state.ingredients;
    tempList.push(ingredients);
    setState({ ...state, ingredients: tempList });
  }

  const { title, description, notes, food, drink, ingredients, steps } = state;

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
          ingredients.length > 0
            ? (
              <table>
                <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Measurment</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    ingredients.map((ingredient, index) => (
                      <tr key={index}>
                        <td>{ingredient.qty}</td>
                        <td>{ingredient.type}{ingredient.qty > 1 ? 's' : ''}</td>
                        <td>{ingredient.description}</td>
                      </tr>
                    ))
                  }
              </tbody>
              </table>
            ) : ( null )
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
      <ItemInputField
        name="qty"
        width="75px"
        value={ingredients.qty}
        onChange={event => onChange(event)}
      />
      </FormControl>
      <SpanGap padding="10px" />
      <FormControl>
        <InputLabel>Measurement</InputLabel>
        <ItemSelectField
          width="110px"
          name="type"
          value={ingredients.type}
          onChange={event => onChange(event)}
        >
          <MenuItem value="none"><em>None</em></MenuItem>
          <MenuItem value="cup">Cup{addS()}</MenuItem>
          <MenuItem value="pint">Pint{addS()} </MenuItem>
          <MenuItem value="gram">gram{addS()}</MenuItem>
        </ItemSelectField>
      </FormControl>
      <SpanGap padding="10px" />
      <FormControl>
        <InputLabel>Description</InputLabel>
        <ItemInputField
          name="description"
          width="250px"
          value={ingredients.description}
          onChange={event => onChange(event)}
        />
      </FormControl>
      <IconButton
      disabled={isInvalid} onClick={onAddClick} size="small"><AddIcon /></IconButton>
    </Item>
  );
}

export default NewRecipe;