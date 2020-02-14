import React from 'react';
import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Inicial() {
  return (
    <Page>
      <CHeader />
      <Container className="containeruser">

        <TitlePage>Lista de Usuários</TitlePage>

        <Painel className="paineluser">
          <CTable
            titles={['#', 'Nome', 'E-mail', 'Cargo']}
            values={[
              { 'id': 1, 'name': 'Ryan Drumond', 'email': 'ryan@task.com.br', 'cargo': 'Administrador' },
              { 'id': 2, 'name': 'Luanne Ferreira', 'email': 'luanne@task.com.br', 'cargo': 'Administrador' },
            ]}
            indexes={['name', 'email']}
          />
        </Painel>

      </Container>
    </Page>
  );
}
