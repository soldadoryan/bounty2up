import React from 'react';

import { Menu, Button } from './styles';
import {
  MdPeopleOutline,
  MdCardTravel
} from 'react-icons/md';

export default function CMenu({ history }) {
  return (
    <Menu>

      <Button to='/users'>
        <MdPeopleOutline />
        <span>Usuários</span>
      </Button>
      <Button to='/departments'>
        <MdCardTravel />
        <span>Setor</span>
      </Button>

    </Menu >
  );
}
