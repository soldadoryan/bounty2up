import React, { useState } from 'react';

import { Table, Tools } from './styles';
import { MdEdit, MdDelete, MdPlaylistAdd } from 'react-icons/md';

import CButton from '../CButton';
import CFormSearch from '../CFormSearch';

export default function CTable({ titles, values, indexes }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <Tools>
        <div className='wrapbuttons'>
          <CButton cstyle='success small' title={(<><MdPlaylistAdd /> Adicionar</>)} />
          <CButton cstyle='danger small' title={(<><MdDelete /> Excluir</>)} />
        </div>
        <CFormSearch cstyle='dark' value={search} change={value => setSearch(value)} />
      </Tools>
      <Table>

        <thead>
          <tr>
            <td></td>
            {titles.map(title => <td>{title}</td>)}
            <td></td>
          </tr>
        </thead>

        <tbody>
          {values.filter(el => {
            let isSearch = false;
            indexes.map(index => {
              if (el[index].includes(search)) {
                isSearch = true;
              }
            });
            return isSearch;
          }).map(value => (
            <tr>
              <td></td>
              {Object.keys(value).map(el => <td>{value[el]}</td>)}
              <td className='actionstable'>
                <CButton cstyle="default small" title={(<><MdEdit /> Editar</>)} />
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
    </>
  );
}
