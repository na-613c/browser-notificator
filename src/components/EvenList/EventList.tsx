import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

type dataT = {
  key: string;
  event: string;
  date: string;
  time: string;
  prior: string;
};

const data: Array<dataT> = [
  {
    key: '1',
    event: 'событие1',
    date: new Date('12.10.2020').toLocaleDateString(),
    time: new Date('12:30').toLocaleTimeString(),
    prior: 'высокий',
  },
  {
    key: '2',
    event: 'событие12',
    date: new Date('12.10.2020').toLocaleDateString(),
    time: new Date('12:30').toLocaleTimeString(),
    prior: 'средний',
  },
  {
    key: '3',
    event: 'событие123',
    date: new Date('12.10.2020').toLocaleDateString(),
    time: new Date(12, 10, 2020, 12, 30).toLocaleTimeString(),
    prior: 'низкий',
  },
  {
    key: '4',
    event: 'событие4',
    date: new Date('12.10.2020').toLocaleDateString(),
    time: new Date('12:30').toLocaleTimeString(),
    prior: 'высокий',
  },
];

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

const EventList = () => {
  const columns = [
    {
      title: 'Событие',
      dataIndex: 'event',
      key: 'event',
      width: '40%',
      sorter: (a: dataT, b: dataT) => a.event.length - b.event.length,
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      width: '20%',
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      width: '20%',
    },
    {
      title: 'Приоритет',
      dataIndex: 'prior',
      key: 'prior',
      width: '20%',
      sorter: (a: dataT, b: dataT) => sortPrior(a.prior, b.prior),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default EventList;
