import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: 'Open Sans', sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      background-color: fff;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a {
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }

    .infinite-scroll-component {
      border: 1px dotted #4b4e53;
      width: 50%;
      margin-top: 50px;
      float: left;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }

    h2 {
      font-family: 'Open Sans', sans-serif;
      font-weight: 500;
      margin: 10px 0 7px 24px;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 5px;
    }
  `;

export default GlobalStyles;
