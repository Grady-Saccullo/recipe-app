import styled from 'styled-components';

export const Section = styled.div`
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionFullWidth = styled.div`
  width: 100%;
`;

export const DivGap = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`

export const SpanGap = styled.span`
  width: ${props => props.width};
  height: ${props => props.height};
`