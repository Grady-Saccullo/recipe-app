import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/************ Local Imports *************/
import theme from '../../utils/constants/theme';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.main};
`;

export const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link)`
  font-size: 2.25em;
  font-family: ${theme.text.fonts.accent};
  color: ${theme.text.colors.accent};
  text-decoration: none;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: ${theme.text.fonts.main};
  font-size: 1.25em;
  margin-left: 14px;
  padding: 0 8px;
`;

export const AccountIcon = ({ src, to }) => {
  const Icon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `;

  const AccountLink = styled(LinkItem)`
    height: 30px;
  `

  return (
    <AccountLink to={to}>
      <Icon src={src} />
    </AccountLink>
  )
}