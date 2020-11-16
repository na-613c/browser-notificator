import React, { FunctionComponent } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Switch } from 'antd';

type Props = { form: any };

const { Option } = Select;

const AddForm: FunctionComponent<Props> = ({ form }) => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      <Form.Item initialValue={false} label="Повтор" name="repeating" hasFeedback>
        <Switch />
      </Form.Item>
      <Form.Item label="Время" name="time-picker" hasFeedback>
        <TimePicker />
      </Form.Item>
      <Form.Item label="Дата" name="date-picker" hasFeedback>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Позиция" name="position" hasFeedback>
        <Select style={{ width: 120 }}>
          <Option value="left">Лево</Option>
          <Option value="right">Право</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Приоритет" name="prior" hasFeedback>
        <Select style={{ width: 120 }}>
          <Option value="высокий">Высокий</Option>
          <Option value="средний">Средний</Option>
          <Option value="низкий">Низкий</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Событие" name="event" hasFeedback>
        <Input placeholder="Описание события" />
      </Form.Item>
    </Form>
  );
};

export default AddForm;
