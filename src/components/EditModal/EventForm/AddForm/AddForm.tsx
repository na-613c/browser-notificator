import React, { FunctionComponent } from 'react';
import { DatePicker, TimePicker, Select, Input, Form, Switch } from 'antd';

type Props = { form: any };

const { Option } = Select;

const AddForm: FunctionComponent<Props> = ({ form }) => {
  form.resetFields();
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
      
      <Form.Item label="Повтор" name="repeating" hasFeedback>
        <Switch defaultChecked={false} />
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

export default AddForm;
