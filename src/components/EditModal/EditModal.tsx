import React, { FunctionComponent, useState } from 'react';
import { Modal } from 'antd';
import { observer } from 'mobx-react';
import StoreT from '../../models/StoreModel';
import Form from './EventForm/EventForm';

type Props = { store: StoreT };

const EditModal: FunctionComponent<Props> = ({ store }) => {
  return (
    <Modal
      title="Редактирование"
      visible={store.isShowModal}
      onOk={() => store.setModal()}
      onCancel={() => store.setModal()}>
      <Form store={store} />
    </Modal>
  );
};

export default observer(EditModal);
