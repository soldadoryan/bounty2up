import React from 'react';

import { Menu, Button } from './styles';
import {
  FiTrello,
  FiUsers,
  FiArchive,
  FiPackage
} from 'react-icons/fi';

export default function CMenu({ history }) {
  return (
    <Menu>
      <Button to='/boards'>
        <FiTrello />
        <span>Meus quadros</span>
      </Button>
      <Button to='/users'>
        <FiUsers />
        <span>Usuários</span>
      </Button>
      <Button to='/departments'>
        <FiArchive />
        <span>Setor</span>
      </Button>
      <Button to='/categories'>
        <FiPackage />
        <span>Categorias</span>
      </Button>

    </Menu >
  );
}
