import React, { FunctionComponent } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { observer, inject } from 'mobx-react';
import StoreT from '../../models/StoreModel';
import eventT from '../../models/EventModel';

type AppProps = { store: StoreT };

const sortPrior = (a: string, b: string) => {
  let aPrior: number = 0;
  let bPrior: number = 0;

  let getPrior = (element: string) => {
    switch (element) {
      case 'высокий':
        return 3;
      case 'средний':
        return 2;
      default:
        return 1;
    }
  };

  aPrior = getPrior(a);
  bPrior = getPrior(b);

  return aPrior - bPrior;
};

const EventList: FunctionComponent<AppProps> = ({ store }) => {
  const columns = [
    {
      title: 'Событие',
      dataIndex: 'event',
      key: 'event',
      width: '40%',
      sorter: (a: eventT, b: eventT) => (a.event > b.event ? 1 : -1),
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      width: '20%',
      sorter: (a: eventT, b: eventT) => {
        const aDate = a.date.split('.').reverse().join('-');
        const bDate = b.date.split('.').reverse().join('-');

        return new Date(aDate) < new Date(bDate) ? 1 : -1;
      },
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      width: '20%',
      sorter: (a: eventT, b: eventT) => (a.time < b.time ? 1 : -1),
    },
    {
      title: 'Приоритет',
      dataIndex: 'prior',
      key: 'prior',
      width: '20%',
      sorter: (a: eventT, b: eventT) => sortPrior(a.prior, b.prior),
    },
  ];
  debugger;
  return <Table columns={columns} dataSource={store.events} />;
};

export default observer(EventList);
