import React, { FunctionComponent, useState, useEffect } from 'react';
import { Modal, Checkbox, DatePicker, TimePicker, Select, Input, Form, Button, Switch } from 'antd';
import { observer } from 'mobx-react';
import StoreT from '../../../models/StoreModel';
import eventT from '../../../models/EventModel';

type Props = { store: StoreT; form: any };

const { Option } = Select;

const EventForm: FunctionComponent<Props> = ({ store, form }) => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      <Form.Item initialValue={false} label="repeating" name="repeating" hasFeedback>
        <Switch />
      </Form.Item>
      <Form.Item label="time-picker" name="time-picker" hasFeedback>
        <TimePicker />
      </Form.Item>
      <Form.Item label="date-picker" name="date-picker" hasFeedback>
        <DatePicker />
      </Form.Item>
      <Form.Item label="position" name="position" hasFeedback>
        <Select style={{ width: 120 }}>
          <Option value="лево">Лево</Option>
          <Option value="право">Право</Option>
        </Select>
      </Form.Item>
      <Form.Item label="prior" name="prior" hasFeedback>
        <Select style={{ width: 120 }}>
          <Option value="высокий">Высокий</Option>
          <Option value="средний">Средний</Option>
          <Option value="низкий">Низкий</Option>
        </Select>
      </Form.Item>
      <Form.Item label="event" name="event" hasFeedback>
        <Input placeholder="Basic usage" />
      </Form.Item>
      <Form.Item>
      </Form.Item>
    </Form>
  );
};

export default observer(EventForm);
