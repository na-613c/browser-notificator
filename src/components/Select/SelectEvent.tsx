import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react';
import StoreT from '../../models/StoreModel';
import AlertEvent from './AlertEvent/AlertEvent';
import { Select } from 'antd';
import { Typography, Row, Col } from 'antd';

const { Option } = Select;

type Props = { store: StoreT };

const SelectEvent: FunctionComponent<Props> = ({ store }) => {
  let eventsTitl = store.events.map((e) => <Option value={e.key}>{e.event}</Option>);

  const onChange = (value: string) => {
    setKey(value);
  };

  const [key, setKey] = useState('');

  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={8}>
          <Select
            showSearch
            style={{ width: 200, textAlign: 'left' }}
            placeholder="Выберите событие"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
            {eventsTitl}
          </Select>
        </Col>
        <Col span={8}>
          <AlertEvent store={store} keyEvent={key} />
        </Col>
      </Row>
    </>
  );
};

export default observer(SelectEvent);
