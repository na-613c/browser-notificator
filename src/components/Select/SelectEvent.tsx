import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react';
import AlertEvent from './AlertEvent/AlertEvent';
import NoData from '../Common/NoData';
import EventServiceModel from '../../models/EventServiceModel';
import { Row, Col, Select } from 'antd';

const { Option } = Select;

type Props = { eventService: EventServiceModel };

const SelectEvent: FunctionComponent<Props> = ({ eventService }) => {
  let eventsTitl = eventService.events.map((e) => (
    <Option value={e.key} key={e.key}>
      {e.event}
    </Option>
  ));

  const onChange = (value: string) => {
    setKey(value);
  };

  const [key, setKey] = useState('');

  return (
    <>
      <Row justify="space-around" align="middle">
        <Col xs={24} sm={12} md={8} lg={7} xl={6} xxl={5}>
          <Select
            allowClear
            showSearch
            style={{ width: 200, textAlign: 'left' }}
            placeholder="Выберите событие"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            loading={eventService.loading}
            notFoundContent={<NoData />}>
            {eventsTitl}
          </Select>
        </Col>
        <Col xs={24} sm={12} md={8} lg={7} xl={6} xxl={5}>
          <AlertEvent eventService={eventService} keyEvent={key} />
        </Col>
      </Row>
    </>
  );
};

export default observer(SelectEvent);
