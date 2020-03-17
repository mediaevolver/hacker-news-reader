import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const AppWrapper = styled.div`
  width: 100%;
`;

export const BodyWrapper = styled.div`
  width: 94%;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${tablet} {
    width: 92%;
  }
`;
