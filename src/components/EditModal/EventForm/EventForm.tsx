import React, { FunctionComponent } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Switch } from 'antd';
import eventT from '../../../models/EventModel';
import ModalServiceModel from '../../../models/ModalServiceModel';
import moment from 'moment';

const { Option } = Select;

type Props = { form: any; modalService: ModalServiceModel };

const EventForm: FunctionComponent<Props> = ({ form, modalService }) => {
  const isShow = modalService.showModal.isShowData;
  const initData: eventT = modalService.showModal.event;

  const initialValues = {
    repeating: initData.repeating,
    position: initData.position,
    prior: initData.prior,
    event: initData.event,
    'time-picker': moment(initData.time, 'HH:mm:ss'),
    'date-picker': moment(`${initData.year}-${initData.month}-${initData.day}`, 'YYYY-MM-DD'),
  };

  const initialEmptyValues = {
    repeating: false,
    position: undefined,
    prior: undefined,
    event: undefined,
    'time-picker': undefined,
    'date-picker': undefined,
  };

  form.setFieldsValue(isShow ? initialValues : initialEmptyValues);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      <Form.Item label="Повтор" name="repeating" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Время">
        <Form.Item
          name="time-picker"
          noStyle
          rules={[{ required: true, message: 'Выбертите время !' }]}>
          <TimePicker style={{ width: 160 }} format={'HH:mm:ss'} placeholder="Выбертите время" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Дата">
        <Form.Item
          name="date-picker"
          noStyle
          rules={[{ required: true, message: 'Выбертите дату !' }]}>
          <DatePicker format={'YYYY-MM-DD'} placeholder="Выбертите дату" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Позиция">
        <Form.Item
          noStyle
          name="position"
          rules={[{ required: true, message: 'Выберите позицию !' }]}>
          <Select style={{ width: 170 }} placeholder="Выберите позицию">
            <Option value="Left">Лево</Option>
            <Option value="Right">Право</Option>
          </Select>
        </Form.Item>
      </Form.Item>

      <Form.Item label="Приоритет">
        <Form.Item
          noStyle
          name="prior"
          rules={[{ required: true, message: 'Выберите приоритет !' }]}>
          <Select style={{ width: 180 }} placeholder="Выберите приоритет">
            <Option value="высокий">Высокий</Option>
            <Option value="средний">Средний</Option>
            <Option value="низкий">Низкий</Option>
          </Select>
        </Form.Item>
      </Form.Item>

      <Form.Item label="Событие">
        <Form.Item
          label="Событие"
          name="event"
          noStyle
          rules={[{ required: true, message: 'Введите название события !' }]}>
          <Input placeholder="Описание события" allowClear />
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
