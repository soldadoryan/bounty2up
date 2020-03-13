import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        setTitle(item.title);
        setValue(item.value);
    }, [item]);

    const submitForm = async e => {
        e.preventDefault();

        let response;

        if (item.id) {
            response = (await api.put(`/categories/${item.id}`, {
                title,
                value,
            })).data;
        } else {
            response = (await api.post('/categories', {
                title,
                value,
            })).data;
        }

        if (response.success) {
            toast.success(response.message);
            success();
            close();
        } else {
            toast.error(response.message);
        }
    };

    return (
        <WrapForm onSubmit={submitForm}>
            <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de categoria`}</h2>
            <CInput val={title} required={true} change={e => setTitle(e)} type='text' label='Título' />
            <CInput val={value} required={true} change={e => setValue(e)} type='text' label='Valor' />
            <CButton title='Salvar' cstyle='primary small' />
        </WrapForm>
    );
}
