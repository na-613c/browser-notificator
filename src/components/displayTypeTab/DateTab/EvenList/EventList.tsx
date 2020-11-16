import React, { FunctionComponent } from 'react';
import { Table, Popconfirm } from 'antd';
import EventModel from '../../../../models/EventModel';
import StoreT from '../../../../models/StoreModel';

import { observer } from 'mobx-react';

type Props = { event: EventModel[]; store: StoreT };

type eventT = {
  key: string;
  day: number;
  month: number;
  year: number;
  time: string;
  event: string;
  repeating: string;
  position: string;
  prior: string;
};

const getPrior = (element: string) => {
  switch (element) {
    case 'высокий':
      return 3;
    case 'средний':
      return 2;
    default:
      return 1;
  }
};

const EventList: FunctionComponent<Props> = ({ event, store }) => {
  const eventData = event.map((i) => {
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
      sorter: (a: eventT, b: eventT) => getPrior(b.prior) - getPrior(a.prior),
    },
    {
      title: !!store.isEditMode && 'Действия',
      dataIndex: 'operation',
      render: (_: any, row: eventT) => {
        return (
          !!store.isEditMode && (
            <span>
              <a
                onClick={() => store.updModal({ ...row, repeating: 'да' === row.repeating })}
                style={{ marginRight: 8 }}>
                Изменить
              </a>
              <Popconfirm
                title="Действительно удалить?"
                okText="Удалить"
                cancelText="Отмена"
                onConfirm={() => store.deleteEvent(row.key)}>
                <a>Удалить</a>
              </Popconfirm>
            </span>
          )
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={eventData} />;
};

export default observer(EventList);
