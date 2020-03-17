import React, { Component } from 'react';
import { Header, NavList, TopLink, Content, Logo } from './Nav_s';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Content>
          <Logo src="img/logo.png" />
          <NavList>
            <TopLink onClick={() => this.props.goLatest()}>{'LATEST'}</TopLink>
            <TopLink onClick={() => this.props.goPoints()}>{'POINTS'}</TopLink>
          </NavList>
        </Content>
      </Header>
    )
  }
}

export default Nav;