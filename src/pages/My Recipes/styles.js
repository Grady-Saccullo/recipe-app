import styled from 'styled-components';
import { CardActionArea, CardMedia} from '@material-ui/core';

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
`;

export const AddButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
`;

export const HrFull = styled.div`
  height: 1px;
  width: 100%;
  max-width: 900px;
  background-color: #000;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(CardActionArea)`
  width: 100%;
  max-width: 750px;
  height: 280px;
  padding: 20px;
  display: flex;
  border-bottom: 1px solid #a9a9a9;
  align-items: initial;
`;

export const CardHeroImg = styled(CardMedia)`
  height: 240px;
  width: 45%;
`;

export const CardContent = styled.div`
  width: 55%;
  min-height: 100%;
  margin-left: 50px;
`;

export const CardTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 3em;
  margin-top: 0;
`;

export const CardDescription = styled.p`
  width: 100%;
  font-size: 1.5em;
`;