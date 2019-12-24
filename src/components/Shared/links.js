import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../utils/constants/theme';


export const UnStyledLink = styled(Link)`
  text-decoration: underline;
  color: ${theme.text.colors.main};
  font-family: ${theme.text.fonts.main};
  font-size: 1em;

  :hover {
    font-weight: bold;
  }
`;