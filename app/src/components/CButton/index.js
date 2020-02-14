import React from 'react';

import { Button } from './styles';

export default function CButton({ type, cstyle, click, title }) {
  return (
    <>
      {(type === 'submit') ? (
        <Button type={type} className={cstyle}>
          {title}
        </Button>
      ) : (
          <Button type={type} className={cstyle} onClick={() => click}>
            {title}
          </Button>
        )}
    </>
  );
}
