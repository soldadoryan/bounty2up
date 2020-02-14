import styled from 'styled-components';

export const Menu = styled.nav`
  width: 230px;
  padding:25px;
  height: calc(100vh - 100px);
  box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.1);
  box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 25px;
    margin-right: 10px;
    color: #0066cc;
  }

  span {
    font-size: 14px;
  }
`;
