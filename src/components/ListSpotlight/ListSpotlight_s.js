import styled from 'styled-components';

export const ListWrapper = styled.ul`
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media only screen and  (max-width: 768px) {
    display: none;
  }
`;

export const SpotlightWrapper = styled.div`
  border-top: 1px dotted #4b4e53;
  border-bottom: 1px dotted #4b4e53;
  position: fixed;
  right: 0;
  width: 44%;
  margin-top: 50px;
  margin-right: 2%;

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 5px;

      &::after {
        content: " >>";
        letter-spacing: 2px;
        color: #d9d9d9;
        font-size: 18px;
      }
    }

    @media only screen and (max-width: 768px) {
      border: 0;
    }
`;

export const SpotlightFooter = styled.div`
  position: fixed;
  right: 0;
  width: 44%;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    left: 70px;
    top: 0px;
  }
`;


