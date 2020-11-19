import React, { FunctionComponent } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Switch } from 'antd';
import eventT from '../../../../models/EventModel';
import ModalServiceModel from '../../../../models/ModalServiceModel';
import moment from 'moment';

type Props = { form: any; modalService: ModalServiceModel };

const { Option } = Select;

const UpdForm: FunctionComponent<Props> = ({ form, modalService }) => {
  let initData: eventT = modalService.showModal.event;

  let initialValues = {
    position: initData.position,
    prior: initData.prior,
    event: initData.event,
    'time-picker': moment(initData.time, 'HH:mm:ss'),
    'date-picker': moment(`${initData.year}-${initData.month}-${initData.day}`, 'YYYY-MM-DD'),
  };

  form.setFieldsValue(initialValues);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      <Form.Item label="Повтор" name="repeating" shouldUpdate>
        <Switch defaultChecked={initData.repeating} />
      </Form.Item>

      <Form.Item label="Время" name="time-picker">
        <TimePicker style={{ width: 160 }} format={'HH:mm:ss'} placeholder="Выбертите время" />
      </Form.Item>

      <Form.Item name="date-picker" label="Дата">
        <DatePicker format={'YYYY-MM-DD'} placeholder="Выбертите дату" />
      </Form.Item>

      <Form.Item label="Позиция" name="position">
        <Select style={{ width: 120 }}>
          <Option value="Left">Лево</Option>
          <Option value="Right">Право</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Приоритет" name="prior">
        <Select style={{ width: 120 }}>
          <Option value="высокий">Высокий</Option>
          <Option value="средний">Средний</Option>
          <Option value="низкий">Низкий</Option>
        </Select>
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

export default UpdForm;
