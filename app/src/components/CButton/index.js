import React from 'react';

import { Button } from './styles';

export default function CButton({ type, cstyle, click, title, disabled }) {
  return (
    <>
      {(type === 'submit') ? (
        <Button type={type} disabled={disabled} onClick={click} className={cstyle}>
          {title}
        </Button>
      ) : (
          <Button type={type} disabled={disabled} onClick={click} className={cstyle}>
            {title}
          </Button>
        )}
    </>
  );
}
