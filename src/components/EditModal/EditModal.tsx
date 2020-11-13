import React, { FunctionComponent, useState } from 'react';
import { Modal, Form } from 'antd';
import { observer } from 'mobx-react';
import StoreT from '../../models/StoreModel';
import EventForm from './EventForm/EventForm';

type Props = { store: StoreT };

const EditModal: FunctionComponent<Props> = ({ store }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Редактирование"
      visible={store.isShowModal}
      onCancel={() => store.setModal()}
      okText="Create"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then((fieldsValue: any) => {
            form.resetFields();

            const value = {
              ...fieldsValue,
              'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
              'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            console.log('Success:', value);
            store.setEvent(value);
          })
          .then(() => store.setModal())
          .catch((info: any) => {
            console.log('Validate Failed:', info);
          });
      }}>
      <EventForm store={store} form={form} />
    </Modal>
  );
};

export default observer(EditModal);
