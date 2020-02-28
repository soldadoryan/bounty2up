import React from 'react';

import CButton from '../CButton';

import { Form } from './styles';
import { MdDoneAll, MdClose } from 'react-icons/md';

export default function ConfirmForm({ action, close, items }) {
  return (
    <Form>
      <p>Para executar esta ação você precisa confirmar:</p>
      <div className='wrapbuttons'>
        <CButton cstyle='success small' title={(<><MdDoneAll /> Confirmar</>)} />
        <CButton click={close} cstyle='danger small' title={(<><MdClose /> Cancelar</>)} />
      </div>
    </Form>
  );
}
