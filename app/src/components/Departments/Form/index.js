import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(item.name);
  }, [item]);

  const submitForm = async e => {
    e.preventDefault();

    if (item.id) {
      const response = (await api.put(`/departments/${item.id}`, { name })).data;

      if (response.success) {
        toast.success(response.message);
        success();
        close();
      } else {
        toast.error(response.message);
      }
    } else {
      const response = (await api.post('/departments', { name })).data;

      if (response.success) {
        toast.success(response.message);
        success();
        close();
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <WrapForm onSubmit={submitForm}>
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de setor`}</h2>
      <CInput val={name} change={e => setName(e)} type='text' label='Nome' required={true} />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
