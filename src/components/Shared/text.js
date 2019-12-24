import styled from 'styled-components';
import theme from '../../utils/constants/theme';

export const PageTitle = styled.h1`
  font-size: 3em;
  font-family: ${theme.text.fonts.accent};
  text-align: center;
  margin-bottom: 0;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: ${theme.text.colors.error};
`;