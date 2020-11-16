import React, { FunctionComponent, useState, useEffect } from 'react';
import { Modal, Checkbox, DatePicker, TimePicker, Select, Input, Form, Button, Switch } from 'antd';
import StoreT from '../../../../models/StoreModel';
import eventT from '../../../../models/EventModel';
import moment from 'moment';

type Props = { store: StoreT; form: any };

const { Option } = Select;

const UpdForm: FunctionComponent<Props> = ({ store, form }) => {
  let initData: eventT = store.showModal.event ;

  let initialValues = {
    // repeating: initData.repeating,
    // ['time-picker']: initData.time,
    // ['date-picker']: `${initData.year}-${initData.month}-${initData.day}`,
    position: initData.position,
    prior: initData.prior,
    event: initData.event,
  };

  form.setFieldsValue(initialValues);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      <Form.Item label="Повтор" name="repeating" hasFeedback>
        <Switch
        defaultChecked={initData.repeating}
        />
      </Form.Item>
      <Form.Item label="Время" name="time-picker" hasFeedback>
        <TimePicker
        defaultValue={moment(initData.time, 'HH:mm:ss')} format={'HH:mm:ss'}
        />
      </Form.Item>
      <Form.Item label="Дата" name="date-picker" hasFeedback>
        <DatePicker
          defaultValue={moment(`${initData.year}-${initData.month}-${initData.day}`, 'YYYY-MM-DD')}
          format={'YYYY-MM-DD'}
        />
      </Form.Item>
      <Form.Item label="Позиция" name="position" hasFeedback>
        <Select
          // defaultValue={initData.position}
          style={{ width: 120 }}>
          <Option value="left">Лево</Option>
          <Option value="right">Право</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Приоритет" name="prior" hasFeedback>
        <Select
          // defaultValue={initData.prior}
          style={{ width: 120 }}>
          <Option value="высокий">Высокий</Option>
          <Option value="средний">Средний</Option>
          <Option value="низкий">Низкий</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Событие" name="event" hasFeedback>
        <Input
          // defaultValue={initData.event}
          placeholder="Описание события"
        />
      </Form.Item>
    </Form>
  );
};

export default UpdForm;