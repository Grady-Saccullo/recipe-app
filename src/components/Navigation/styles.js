import styled from 'styled-components';
import { Link } from 'react-router-dom';

/************ Local Imports *************/
import theme from '../../constants/theme';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.main};
`;

export const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${theme.text.colors.accent};
  font-family: ${theme.text.fonts.main};
  font-size: 1.25em;
  padding: 0 15px;
`;

export const Title = styled(Link)`
  font-size: 2.25em;
  font-family: ${theme.text.fonts.accent};
  color: ${theme.text.colors.accent};
  text-decoration: none;
  padding-left: 10px;
`;
