import styled from 'styled-components';

export const WrapCustomInput = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  transition: border-color .5s;
  
  &:focus-within {
    border-color: #1868dd;

    label {
      color: #1868dd;
    }
  }
`;

export const LabelCustomInput = styled.label`
  background-color: white;
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 14px;
  padding: 0 5px;
  z-index: 1050;
  color: rgba(0, 0, 0, 0.5);
  transition: color .5s;
`;

export const CustomInput = styled.input`
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: .8rem;
  outline: none;
  font-weight: 600;
  color: #444;
`;


