import React from 'react';

import CFormSearch from '../CFormSearch';

import { MdMenu, MdNotificationsNone, MdAttachMoney } from 'react-icons/md';

import { Topbar, Button } from './styles';

export default function CTopbar() {
  return (
    <Topbar>
      <div className="leftwrap">
        <Button>
          <MdMenu />
        </Button>
        <CFormSearch placeholder="Search" />
      </div>
      <div className="centerwrap">
        <h1>bounty<span>2</span>up</h1>
      </div>
      <div className="rightwrap">
        <Button className="btnmoney">
          <MdAttachMoney />
          <strong>1400</strong>
        </Button>
        <Button>
          <MdNotificationsNone />
        </Button>
        <Button className="btnuser">
          <span>Ryan Drumond</span>
          <img alt="Imagem de perfil" src="https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p160x160/11051782_906875656038026_8186606292459269189_n.jpg?_nc_cat=101&_nc_ohc=vEZFlAsFNtgAX9Je8o7&_nc_ht=scontent.fplu3-1.fna&_nc_tp=6&oh=08396315eafd51dd077a130b4860e0cd&oe=5ECFCF68" />
        </Button>
      </div>
    </Topbar>
  );
}
