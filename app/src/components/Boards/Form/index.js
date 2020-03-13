import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {
    const [departments, setDepartments] = useState([]);

    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');

    useEffect(() => {
        setTitle(item.title);
        setDepartment(item['department.id']);
        getDepartments();
    }, [item]);

    const getDepartments = async () => {
        const response = (await api.get('/departments')).data;

        setDepartments(response);
    };

    const submitForm = async e => {
        e.preventDefault();

        let response;

        if (item.id) {
            response = (await api.put(`/boards/${item.id}`, {
                title,
                id_department: department,
            })).data;
        } else {
            response = (await api.post('/boards', {
                title,
                id_department: department,
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
            <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de quadro`}</h2>
            <CInput val={title} required={true} change={e => setTitle(e)} type='text' label='Título' />
            <CSelect label='Setor' val={department} change={e => setDepartment(e)} required={true} items={departments} />
            <CButton title='Salvar' cstyle='primary small' />
        </WrapForm>
    );
}
