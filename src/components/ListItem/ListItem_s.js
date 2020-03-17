import styled from 'styled-components';

export const Item = styled.li`
  border-bottom: 1px solid #fff;
  padding: 14px 24px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #1d1d1d;

  &:hover {
    background-color: #ffff00;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
`;

export const Host = styled.span`
  color: #7e8082;
  font-size: 12px;
  margin-right: 20px;
`;

export const ExternalLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #1d1d1d;
`;

export const Description = styled.div`
  font-size: 12px;
  color: '#7e8082';
`;

export const CommentLink = styled.a`
  color: #bb2003;
  margin-right: 30px;
  margin-left: 5px;

  &:visited {
    color: #7c1717;
  }
`;
