import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormUsers from '../../components/Users/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Inicial() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = (await api.get('/users')).data;

    setUsers(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containeruser">

        <TitlePage>Lista de Usuários</TitlePage>

        <Painel className="paineluser">
          <CTable
            titles={['#', 'Nome', 'E-mail', 'Cargo']}
            values={users}
            indexes={['name', 'email']}
            formCustom={(<FormUsers user={user} />)}
            setItem={setUser}
            actionDelete='/users/'
          />
        </Painel>

      </Container>
    </Page>
  );
}
