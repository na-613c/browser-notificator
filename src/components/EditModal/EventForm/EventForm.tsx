import React, { FunctionComponent, useState, useEffect } from 'react';
import { Modal, Checkbox, DatePicker, TimePicker, Select, Input, Form, Button, Switch } from 'antd';
import StoreT from '../../../models/StoreModel';
import eventT from '../../../models/EventModel';

type Props = { store: any; form: any };

const { Option } = Select;

const EventForm: FunctionComponent<Props> = ({ store, form }) => {
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

export default EventForm;
