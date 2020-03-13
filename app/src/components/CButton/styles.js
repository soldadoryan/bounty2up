import styled from 'styled-components';

import colors from '../../presets/colors';

import { darken, lighten } from 'polished';

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: 700;
  text-transform: uppercase;
  height: 45px;
  color: #333;
  border: 0;
  padding: 0 50px;
  border-radius: 25px;
  letter-spacing: 1px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.29);
  transition: background-color .5s;
  cursor: pointer;
  display: flex;
  outline: none;
  align-items: center;

  &:disabled { background-color: gray !important; }

  svg {
    font-size: 18px;
    margin-right: 5px;
  }

  &.default {
    background: ${colors.btn_default};
    box-shadow: none;
    color: ${colors.btn_text_default};

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      color: ${lighten(0.07, colors.btn_text_default)};
    }
  }

  &.primary {
    background: ${colors.btn_primary};
    color: ${colors.btn_text_primary};

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, colors.btn_primary)}
    }
  }

  &.success {
    background: ${colors.btn_success};
    color: ${colors.btn_text_success};

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, colors.btn_success)}
    }
  }

  &.warning {
    background: ${colors.btn_warning};
    color: ${colors.btn_text_warning};

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, colors.btn_warning)}
    }
  }

  &.danger {
    background: ${colors.btn_danger};
    color: ${colors.btn_text_danger};

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, colors.btn_danger)}
    }
  }
`;
