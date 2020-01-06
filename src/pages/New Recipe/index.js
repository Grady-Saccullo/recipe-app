import React, { useState, useContext } from 'react';

import AddIcon from '@material-ui/icons/Add';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

/* ========== Component Specific Styles ========== */
import {
  EditableContent,
  Title,
  Description,
  SectionTitle,
  Item,
  ItemInputField,
  ItemSelectField
} from './styles';

/* ========== Shared ========== */
import { FirebaseContext } from '../../utils/Firebase';

import {
  SectionNarrowWidth,
  SquaredButtonSmall,
  DivGap,
} from '../../components/Shared';

/* ========== Main Page Component ========== */
const NewRecipe = () => {

  const firebase = useContext(FirebaseContext);

  const [ state, setState ] = useState({
    title: '',
    description: '',
    heroImage: null,
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
  };

  const addIngredients = ( ingredients ) => {
    let tempList = state.ingredients;
    tempList.push(ingredients);
    setState({ ...state, ingredients: tempList });
  };

  const addStep = ( step ) => {
    let tempList = state.steps;
    tempList.push(step);
    setState({ ...state, steps: tempList });
  };

  const onSubmit = event => {
    firebase
      .createNewRecipe({
        title: title,
        description: description,
        food: food,
        drink: drink,
        ingredients: ingredients,
        steps: steps
      }, docRef => {
        firebase.uploadRecipeImage(
          docRef.id,
          heroImage.name,         // replace with title
          heroImage,
          progess => console.log(progess),
          downloadURL => {
            docRef.update({ heroImageURL: downloadURL });
        });
      });

    setState({
      title: '',
      description: '',
      notes: '',
      food: false,
      drink: false,
      ingredients: [],
      steps: []
    });

    event.preventDefault();
  }

  const onFileChange = event => {
    // add in preview for image...
    setState({ ...state, heroImage: event.target.files[0]});
  }

  const { title, description, heroImage, food, drink, ingredients, steps } = state;

  const isInvalid =
    state.title === '' ||
    (state.food === false && state.drink === false) ||
    state.ingredients.length <= 0 ||
    state.steps.length <= 0;
    
  return (
    <SectionNarrowWidth>
      <EditableContent onSubmit={onSubmit}>
        <div className="text-content">
          <Title
            name="title"
            value={title}
            placeholder="Title"
            onChange={event => handleFieldChange(event)}
          />
          <Description
            name="description"
            value={description}
            placeholder="Description (Optional)"
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
                  color="default"
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
                  color="default"
                  checked={drink}
                  value="drink"
                  onChange={handleTypeChange('drink')}
                />
              }
            />
          </FormGroup>
        </FormControl>

        <FormControl>
          <label>Recipe Image</label>
          <input
            name="fileUpload"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={event => onFileChange(event)}
          />
        </FormControl>

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
                        <td>{ingredient.type !== 'none' ? ingredient.type + (ingredient.qty > 1 ? 's' : '') : ''}</td>
                        <td>{ingredient.description}</td>
                      </tr>
                    ))
                  }
              </tbody>
              </table>
            ) : ( null )
        }
        <Ingredient onClick={addIngredients} />
        <SectionTitle>Steps</SectionTitle>
        <RecipeStep onClick={addStep} currentNumberSteps={steps.length} someLen={0} />
        {steps.length > 0
          ? (
            steps.map(( step, index ) => (
              <div key={index} style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '0' }}>Step {index + 1}.</h3>
                <hr style={{color: 'black'}} />
                <p style={{ fontSize: '1.5em' }}>{step.description}</p>
              </div>
            ))

          ) : ( null )
        }
        <button disabled={isInvalid} type="submit">Add Recipe</button>
      </EditableContent>
    </SectionNarrowWidth>
  );
}

/* ========== New Recipe Ingredient ========== */
const Ingredient = ({ onClick }) => {
  const [ingredients, setIngredients] = useState({
    qty: '',
    type: '',
    description: '',
    notes: ''
  });

  const onChange = event => {
    setIngredients({ ...ingredients, [event.target.name]: event.target.value })
  };

  const onClickAdd = event => {
    onClick(ingredients);
    setIngredients({
      qty: '',
      type: '',
      description: '',
      notes: '',
    });
    event.preventDefault();

  }

  const addS = () => (`${ ingredients.qty > 1 ? 's' : '' }`);

  const isInvalid =
    ingredients.qty === '' ||
    ingredients.type === '' ||
    ingredients.description === '';

  return (
    <Item>

      <div style={{
        minWidth:  '40px',
        width: '10%',
        paddingRight: '10px' 
      }}>
      <FormControl fullWidth>
        <InputLabel>Qty</InputLabel>
        <ItemInputField
          name="qty"
          fullWidth
          value={ingredients.qty}
          onChange={event => onChange(event)}
        />
      </FormControl>
      </div>

      <div style={{
          minWidth: '115px',
          width: '25%',
          paddingRight: '10px'
      }}>
      <FormControl fullWidth>
        <InputLabel>Measurement</InputLabel>
        <ItemSelectField
          fullWidth
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
      </div>

      <div style={{
        minWidth: '150px',
        width: '65%',
      }}>
      <FormControl fullWidth>
        <InputLabel>Description</InputLabel>
        <ItemInputField
          name="description"
          fullWidth
          value={ingredients.description}
          onChange={event => onChange(event)}
        />
      </FormControl>
      </div>

      <FormControl fullWidth>
        <InputLabel>Notes (Optional)</InputLabel>
        <ItemInputField
          name="notes"
          fullWidth
          value={ingredients.notes}
          onChange={event => onChange(event)}
        />
      </FormControl>
      <DivGap height="20px" width="100%" />
      <SquaredButtonSmall
        disabled={isInvalid}
        onClick={onClickAdd}
        size="small"
      >
        <AddIcon />Add
      </SquaredButtonSmall>
    </Item>
  );
}

/* ========== New Recipe Step ========== */
const RecipeStep = ({ onClick, currentNumberSteps }) => {

  const [ step, setStep ] = useState({
    description: '',
    number: currentNumberSteps + 1,
  });

  const onClickAdd = event => {
    if (step.number === '') setStep({ ...step, number : currentNumberSteps + 1 })
    onClick(step);
    setStep({
      description: '',
      number: currentNumberSteps + 2
    });
    event.preventDefault();
  }

  const onChange = event => {
    setStep({ ...step, [event.target.name] : event.target.value});
  }
  const isInvalid = step.description === '';
  return (
    <Item>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }}>
      <div style={{
        width: '40px',
      }}>
      <Description
        name="number"
        placeholder={(currentNumberSteps + 1).toString()}
        value={step.number}
        onChange={event => onChange(event)}
      />
      </div>
      <FormControl fullWidth>
        <InputLabel>Information</InputLabel>
        <ItemInputField
          name="description"
          multiline
          fullWidth
          value={step.description}
          onChange={event => onChange(event)}
        />
      </FormControl>
      </div>
      <DivGap height="20px" width="100%" />
      <SquaredButtonSmall
        disabled={isInvalid}
        onClick={onClickAdd}
        size="small"
      >
        <AddIcon /> Add
      </SquaredButtonSmall>
    </Item>
  );
}

export default NewRecipe;