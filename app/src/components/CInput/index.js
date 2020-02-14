import React from 'react';

import { WrapCustomInput, LabelCustomInput, CustomInput } from './styles';

export default function CInput({ type, label, val, change }) {
  return (
    <WrapCustomInput>
      <LabelCustomInput>{label}</LabelCustomInput>
      <CustomInput type={type} value={val} onChange={e => change(e.target.value)} />
    </WrapCustomInput>
  );
}
