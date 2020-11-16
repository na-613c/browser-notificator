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
      visible={store.showModal.isShowModal}
      onCancel={() => store.setModal()}
      okText="Добавить"
      cancelText="Отмена"
      onOk={() => {
        form
          .validateFields()
          .then((fieldsValue: any) => {
            form.resetFields();

            let date;
            let time;
            if (store.showModal.isShowData) {
              let initData = store.showModal.event;

              date = fieldsValue['date-picker']
                ? fieldsValue['date-picker'].format('YYYY-MM-DD')
                : `${initData.year}-${initData.month}-${initData.day}`;

              time = fieldsValue['time-picker']
                ? fieldsValue['time-picker'].format('HH:mm:ss')
                : initData.time;
            } else {
              date = fieldsValue['date-picker'].format('YYYY-MM-DD');
              time = fieldsValue['time-picker'].format('HH:mm:ss');
            }

            const value = {
              ...fieldsValue,
              'date-picker': date,
              'time-picker': time,
            };

            if (store.showModal.isShowData) {
              store.updateEvent(value, store.showModal.event.key);
            } else {
              store.setEvent(value);
            }

            console.log('Success:', value);
            store.setModal();
          })
          .catch((info: any) => {
            console.log('Validate Failed:', info);
          });
      }}>
      <EventForm store={store} form={form} />
    </Modal>
  );
};

export default observer(EditModal);
