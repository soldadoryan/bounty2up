import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormDepartments from '../../components/Departments/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState({});

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    const response = (await api.get('/departments')).data;

    setDepartments(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containerdepartment">

        <TitlePage>Lista de Setores</TitlePage>

        <Painel className="paineldepartment">
          <CTable
            titles={['#', 'Nome']}
            values={departments}
            indexes={['id', 'name']}
            indexesSearch={['name']}
            load={getDepartments}
            FormCustom={FormDepartments}
            setItem={setDepartment}
            actionDelete='/departments'
          />
        </Painel>

      </Container>
    </Page>
  );
}
