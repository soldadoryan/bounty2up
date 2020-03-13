import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormBoards from '../../components/Boards/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Users() {
    const [boards, setBoards] = useState([]);
    const [board, setBoard] = useState({});

    useEffect(() => {
        getBoards();
    }, []);

    const getBoards = async () => {
        const response = (await api.get('/boards')).data;

        setBoards(response);
    };

    return (
        <Page>
            <CHeader />
            <Container className="containerboard">

                <TitlePage>Quadros de Tarefas</TitlePage>

                <Painel className="painelboard">
                    <CTable
                        titles={['#', 'Título', 'Setor']}
                        values={boards}
                        indexes={['id', 'title', 'department.name']}
                        indexesSearch={['title', 'department.name']}
                        load={getBoards}
                        FormCustom={FormBoards}
                        setItem={setBoard}
                        actionDelete='/boards'
                    />
                </Painel>
            </Container>
        </Page>
    );
}
