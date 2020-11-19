import React, { FunctionComponent } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Switch } from 'antd';
import StoreT from '../../../../models/StoreModel';
import eventT from '../../../../models/EventModel';
import moment from 'moment';

type Props = { store: StoreT; form: any };

const { Option } = Select;

const UpdForm: FunctionComponent<Props> = ({ store, form }) => {
  let initData: eventT = store.showModal.event;

  let initialValues = {
    position: initData.position,
    prior: initData.prior,
    event: initData.event,
  };

  form.setFieldsValue(initialValues);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      <Form.Item label="Повтор" name="repeating" hasFeedback>
        <Switch defaultChecked={initData.repeating} />
      </Form.Item>

      <Form.Item label="Время" name="time-picker">
        <TimePicker
          style={{ width: 160 }}
          defaultValue={moment(initData.time, 'HH:mm:ss')}
          format={'HH:mm:ss'}
          placeholder="Выбертите время"
        />
      </Form.Item>

      <Form.Item name="date-picker" label="Дата">
        <DatePicker
          defaultValue={moment(`${initData.year}-${initData.month}-${initData.day}`, 'YYYY-MM-DD')}
          format={'YYYY-MM-DD'}
          placeholder="Выбертите дату"
        />
      </Form.Item>

      <Form.Item label="Позиция" name="position" hasFeedback>
        <Select style={{ width: 120 }}>
          <Option value="Left">Лево</Option>
          <Option value="Right">Право</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Приоритет" name="prior" hasFeedback>
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
