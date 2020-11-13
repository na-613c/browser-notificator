import React, { FunctionComponent, useState, useEffect } from 'react';
import { Modal, Checkbox, DatePicker, TimePicker, Select, Input, Form, Button, Switch } from 'antd';
import { observer } from 'mobx-react';
import StoreT from '../../../models/StoreModel';
import eventT from '../../../models/EventModel';

type Props = { store: StoreT };

const { Option } = Select;

const EventForm: FunctionComponent<Props> = ({ store }) => {
  // const [state, setstate] = useState();
  const [form] = Form.useForm();

  function onChangeRepeating(e: any) {
    st.repeating = e.target.checked;
    console.log(st);
  }

  function onChangeTime(value: any, string: string) {
    st.time = string;
    console.log(st);
    return string;
  }

  function onChangeDate(value: any, string: string) {
    let date = new Date(string);
    st.day = date.getDate();
    st.month = date.getMonth() + 1;
    st.year = date.getFullYear();
    console.log(st);
    return string;
  }

  function onChangePosition(value: string) {
    st.position = value;
    console.log(st);
  }

  function onChangePrior(value: string) {
    st.prior = value;
    console.log(st);
  }

  let st: eventT = {
    key: store.events.length.toString(),
    day: 1,
    month: 2,
    year: 3,
    time: '10:30:00',
    event: 'event',
    repeating: false,
    position: 'Право',
    prior: 'средний',
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" onFinish={onFinish}>
      <Form.Item initialValue={false} label="repeating" name="repeating">
        <Switch />
      </Form.Item>
      <Form.Item label="time" name="time">
        <TimePicker onChange={onChangeTime} />
      </Form.Item>
      <Form.Item label="date" name="date">
        <DatePicker onChange={onChangeDate} />
      </Form.Item>
      <Form.Item label="position" name="position">
        <Select style={{ width: 120 }} onChange={onChangePosition}>
          <Option value="Лево">Лево</Option>
          <Option value="Право">Право</Option>
        </Select>
      </Form.Item>
      <Form.Item label="prior" name="prior">
        <Select style={{ width: 120 }} onChange={onChangePrior}>
          <Option value="высокий">высокий</Option>
          <Option value="средний">средний</Option>
          <Option value="низкий">низкий</Option>
        </Select>
      </Form.Item>
      <Form.Item label="event" name="event">
        <Input placeholder="Basic usage" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(EventForm);
