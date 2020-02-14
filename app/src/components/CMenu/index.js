import React from 'react';

import { Menu, Button } from './styles';
import { MdPeopleOutline } from 'react-icons/md';

export default function CMenu() {
  return (
    <Menu>

      <Button>
        <MdPeopleOutline />
        <span>Usuários</span>
      </Button>

    </Menu>
  );
}
