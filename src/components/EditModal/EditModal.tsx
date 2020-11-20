import React, { FunctionComponent } from 'react';
import { Modal, Form } from 'antd';
import { observer } from 'mobx-react';
import EventForm from './EventForm/EventForm';
import ModalServiceModel from '../../models/ModalServiceModel';
import EventServiceModel from '../../models/EventServiceModel';

type Props = { eventService: EventServiceModel; modalService: ModalServiceModel };

const EditModal: FunctionComponent<Props> = ({ eventService, modalService }) => {
  const [form] = Form.useForm();
  const isShow = modalService.showModal.isShowData;

  return (
    <Modal
      title={isShow ? 'Редактирование' : 'Создание'}
      visible={modalService.showModal.isShowModal}
      onCancel={() => modalService.setModal()}
      okText={isShow ? 'Сохранить' : 'Создать'}
      cancelText="Отмена"
      onOk={() => {
        form
          .validateFields()
          .then((fieldsValue: any) => {
            const date = fieldsValue['date-picker'].format('YYYY-MM-DD');
            const time = fieldsValue['time-picker'].format('HH:mm:ss');

            const value = {
              ...fieldsValue,
              'date-picker': date,
              'time-picker': time,
            };

            if (isShow) {
              eventService.updateEvent(value, modalService.showModal.event.key);
            } else {
              eventService.setEvent(value);
            }

            console.log('Success:', value);
            modalService.setModal();
          })
          .catch((info: any) => {
            console.info('Validate Failed:', info);
          });
      }}>
      <EventForm modalService={modalService} form={form} />
    </Modal>
  );
};

export default observer(EditModal);
