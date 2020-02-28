import React, { useState, useEffect } from 'react';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CButton from '../../CButton';

export default function Form({ user }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user])

  return (
    <WrapForm>
      <h2>{`${(user.id) ? 'Edição' : 'Cadastro'} de usuário`}</h2>
      <CInput val={name} change={e => setName(e)} type='text' label='Nome Completo' />
      <CInput val={email} change={e => setEmail(e)} type='email' label='E-mail' />
      <CInput val={password} change={e => setPassword(e)} type='password' label='Senha' />
      <CInput val={confPassword} change={e => setConfPassword(e)} type='password' label='Confirmar senha' />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
