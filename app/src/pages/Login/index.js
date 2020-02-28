import React, { useState } from 'react';
import api from '../../services/api-no-auth';

import { toast } from 'react-toastify';

import CInput from '../../components/CInput';
import CButton from '../../components/CButton';

import { Section, FormLogin } from './styles';
import { sessionSet, sessionAdd } from '../../session';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
    e.preventDefault();

    const response = (await api.post('/sessions', { email, password })).data;

    if (response.error)
      toast.error(response.error);

    if (response.success) {
      sessionSet(response.user);
      sessionAdd('token', response.token);
      history.push('/inicial');
    }
  };

  return (
    <Section>
      <FormLogin onSubmit={login}>
        <h1>Login</h1>
        <CInput type="text" label="E-mail" val={email} change={setEmail} />
        <CInput type="password" label="Senha" val={password} change={setPassword} />
        <CButton type="submit" cstyle="primary" title="Login" />
      </FormLogin>
    </Section>
  );
}
