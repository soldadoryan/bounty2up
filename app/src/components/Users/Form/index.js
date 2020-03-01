import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {
  const [departments, setDepartments] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  useEffect(() => {
    setName(item.name);
    setEmail(item.email);
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
      response = (await api.put(`/users/${item.id}`, {
        name,
        email,
        id_department: department,
        password,
        confPassword
      })).data;
    } else {
      response = (await api.post('/users', {
        name,
        email,
        id_department: department,
        password,
        confPassword
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
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de usuário`}</h2>
      <CInput val={name} required={true} change={e => setName(e)} type='text' label='Nome Completo' />
      <CInput val={email} required={true} change={e => setEmail(e)} type='email' label='E-mail' />
      <CSelect label='Setor' val={department} change={e => setDepartment(e)} required={true} items={departments} />
      <CInput val={password} required={(item.id) ? false : true} change={e => setPassword(e)} type='password' label='Senha' />
      <CInput val={confPassword} required={(item.id) ? false : true} change={e => setConfPassword(e)} type='password' label='Confirmar senha' />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
