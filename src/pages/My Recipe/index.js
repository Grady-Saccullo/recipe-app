import React, { useState } from 'react';
import { SectionNarrowWidth } from '../../components/Shared';

import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'

import {
  HeroContainer,
  HeroImage,
  HeroTitle,
  HeroText
} from './styles';

const Recipe = (props) => {
  const [ recipe, ] = useState(props.location.state.data);
  const [ anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => setAnchorEl(null);
  
  return (
    <>
    <SectionNarrowWidth smallFullWidth>
      <div style={{
        marginTop: '10px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClickMenu}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            style:{
              marginTop: '50px'
            }
          }}
        >
          <MenuItem key="edit" onClick={handleMenuClose}>
            <EditIcon />
          </MenuItem>
          <MenuItem key="new-version" onClick={handleMenuClose}>
            New Version
          </MenuItem>
        </Menu>
      </div>
    </SectionNarrowWidth>
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
        <FormGroup>
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
                <h3 style={{ marginBottom: '0' }}>Step {index + 1}/{recipe.steps.length}</h3>
                <hr style={{ color: 'black' }} />
                <p style={{ fontSize: '1.5em', margin: '10px 20px' }}>{step.description}</p>
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