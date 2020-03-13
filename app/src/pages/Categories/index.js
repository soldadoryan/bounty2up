import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormCategories from '../../components/Categories/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({});

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = (await api.get('/categories')).data;

        setCategories(response);
    };

    return (
        <Page>
            <CHeader />
            <Container className="containercategory">

                <TitlePage>Lista de Categorias</TitlePage>

                <Painel className="painelcategory">
                    <CTable
                        titles={['#', 'Título', 'Recompensa']}
                        values={categories}
                        indexes={['id', 'title', 'value']}
                        indexesSearch={['title']}
                        load={getCategories}
                        FormCustom={FormCategories}
                        setItem={setCategory}
                        actionDelete='/categories'
                    />
                </Painel>

            </Container>
        </Page>
    );
}
