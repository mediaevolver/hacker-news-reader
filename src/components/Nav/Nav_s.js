import styled from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  height: 58px;
  width: 100%;
  box-shadow: 0 1px 0 0 #1d1d1d;
  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 94%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopLink = styled.li`
  letter-spacing: 2px;
  font-size: 11px;
  color: #7e8082;
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: all .5s ease 0s;
  -o-transition: all .5s ease 0s;
  transition: all .5s ease 0s;

  &:hover {
    color: #bb2003;
  }

  &:not(:last-child):after {
    content: " // ";
    color: #ccc;
    font-size: 11px;
    white-space: pre;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 42px;
  margin-right: 8px;
`;