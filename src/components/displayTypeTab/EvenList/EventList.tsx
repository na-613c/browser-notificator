import React, { FunctionComponent } from 'react';
import { Table, Tabs } from 'antd';
import { observer } from 'mobx-react';
import StoreT from '../../../models/StoreModel';

type AppProps = { store: StoreT };
interface eventT {
  key: string;
  day: number;
  month: number;
  year: number;
  time: string;
  event: string;
  repeating: string;
  position: string;
  prior: string;
}

const { TabPane } = Tabs;

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

  return bPrior - aPrior;
};

const EventList: FunctionComponent<AppProps> = ({ store }) => {
  const eventData = store.events.map((i) => {
    return { ...i, repeating: i.repeating ? 'да' : 'нет' };
  });

  const columns = [
    {
      title: 'Событие',
      dataIndex: 'event',
      key: 'event',
      width: '40%',
      sorter: (a: eventT, b: eventT) => (a.event > b.event ? 1 : -1),
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      width: '20%',
      sorter: (a: eventT, b: eventT) => (a.time < b.time ? 1 : -1),
    },
    {
      title: 'Повтор',
      dataIndex: 'repeating',
      key: 'repeating',
      width: '20%',
    },
    {
      title: 'Приоритет',
      dataIndex: 'prior',
      key: 'prior',
      width: '20%',
      sorter: (a: eventT, b: eventT) => sortPrior(a.prior, b.prior),
    },
  ];

  return <Table columns={columns} dataSource={eventData} />;
};

export default observer(EventList);
