import React, { useState } from 'react';

import { Table, Tools } from './styles';
import { MdEdit, MdDelete, MdPlaylistAdd } from 'react-icons/md';

import CButton from '../CButton';
import CFormSearch from '../CFormSearch';
import CModal from '../CModal';

import ConfirmForm from '../ConfirmForm';
import CCheckbox from '../CCheckbox';

export default function CTable({ titles, values, indexes, formCustom, setItem, actionDelete }) {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState('');
  const [selectedItems, setSelectedItems] = useState('');

  const toggleSelectedItems = id => {
    if (selectedItems.includes(id)) {
      let itemIndex = selectedItems.filter(v => v !== id);
      setSelectedItems(itemIndex);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <>
      {(showModal !== '') ? (
        <CModal
          close={() => { setShowModal(''); setItem({}) }}
          form={(showModal === 'add') ? formCustom
            : <ConfirmForm action={actionDelete}
              items={selectedItems}
              close={() => setShowModal('')}
            />}
        />
      ) : ''}

      <Tools>
        <div className='wrapbuttons'>
          <CButton click={() => { setShowModal('add'); setItem({}); }} cstyle='success small' title={(<><MdPlaylistAdd /> Adicionar</>)} />
          <CButton
            disabled={!(selectedItems.length > 0)}
            click={() => setShowModal('delete')} cstyle='danger small'
            title={(<><MdDelete /> Excluir</>)}
          />
        </div>
        <CFormSearch cstyle='dark' value={search} change={value => setSearch(value)} />
      </Tools>
      <Table>

        <thead>
          <tr>
            <td></td>
            {titles.map(title => <td key={title}>{title}</td>)}
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
            <tr key={value.id}>
              <td>
                <CCheckbox
                  active={(selectedItems.includes(value.id)) ? 'in' : ''}
                  click={() => toggleSelectedItems(value.id)}
                />
              </td>
              {Object.keys(value).map(el => <td key={value[el]}>{value[el]}</td>)}
              <td className='actionstable'>
                <CButton click={() => { setItem(value); setShowModal('add'); }} cstyle="default small" title={(<><MdEdit /> Editar</>)} />
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
    </>
  );
}
