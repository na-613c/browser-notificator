import React, { FunctionComponent, useState, useEffect } from 'react';
import { Table, Popconfirm, Button, Input, Space } from 'antd';
import EventModel from '../../../../models/EventModel';
import StoreT from '../../../../models/StoreModel';
import ModalServiceModel from '../../../../models/ModalServiceModel';
import NoData from '../../../Common/NoData';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

type Props = { event: EventModel[]; store: StoreT; modalService: ModalServiceModel };

interface eventT {
  key: string;
  day: string;
  month: string;
  year: string;
  time: string;
  event: string;
  repeating: string;
  position: string;
  prior: string;
}

const EventList: FunctionComponent<Props> = ({ event, store, modalService }) => {
  let events: eventT[] = event.map((i) => {
    return {
      key: i.key,
      day: i.day.toString(),
      month: i.month.toString(),
      year: i.year.toString(),
      time: i.time,
      event: i.event,
      repeating: i.repeating ? 'да' : 'нет',
      position: i.position,
      prior: i.prior,
    };
  });

  const [eventData, setEventData] = useState(events);
  const [state, setState] = useState({
    searchText: '',
    searchedColumn: '',
  });

  useEffect(() => {
    setEventData([...events]);
  }, [event]);

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

  const handleSearch = () => {
    switch (state.searchedColumn) {
      case 'event':
        setEventData(events.filter((e) => e.event === state.searchText));
        console.log(eventData);
        break;
      case 'time':
        setEventData(events.filter((e) => e.time === state.searchText));
        break;
      case 'repeating':
        setEventData(events.filter((e) => e.repeating === state.searchText));
        break;
      case 'prior':
        setEventData(events.filter((e) => e.prior === state.searchText));
        break;
      default:
        setEventData([...events]);
    }

    if (state.searchText === '') setEventData([...events]);
  };

  const handleClear = () => {
    setState({ searchText: '', searchedColumn: '' });
    setEventData([...events]);
  };

  const getColumnSearchProps = (dataIndex: string, title: string) => ({
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Искать ${title}`}
          value={state.searchText}
          onChange={(e) => setState({ searchText: e.target.value, searchedColumn: dataIndex })}
          onPressEnter={() => handleSearch()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Поиск
          </Button>
          <Button size="small" onClick={() => handleClear()}>
            Сбросить
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    render: (text: string) => text,
  });

  const columns = [
    {
      title: 'Событие',
      dataIndex: 'event',
      key: 'event',
      width: modalService.isEditMode ? '30%' : '40%',
      sorter: (a: any, b: any) => (a.event > b.event ? 1 : -1),
      ...getColumnSearchProps('event', 'Событие'),
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      width: '20%',
      sorter: (a: any, b: any) => (a.time < b.time ? 1 : -1),
      ...getColumnSearchProps('time', 'Время'),
    },
    {
      title: 'Повтор',
      dataIndex: 'repeating',
      key: 'repeating',
      width: '20%',
      ...getColumnSearchProps('repeating', 'Повтор'),
    },
    {
      title: 'Приоритет',
      dataIndex: 'prior',
      key: 'prior',
      width: '20%',
      sorter: (a: any, b: any) => getPrior(b.prior) - getPrior(a.prior),
      ...getColumnSearchProps('prior', 'Приоритет'),
    },
    {
      title: modalService.isEditMode && 'Действия',
      dataIndex: 'operation',
      render: (_: any, row: any) => {
        return (
          modalService.isEditMode && (
            <Space>
              <Button
                onClick={() => modalService.updModal({ ...row, repeating: 'да' === row.repeating })}
                type="dashed"
                icon={<EditOutlined />}
                size="large"
              />
              <Popconfirm
                title="Действительно удалить?"
                okText="Удалить"
                cancelText="Отмена"
                onConfirm={() => store.deleteEvent(row.key)}>
                <Button danger type="dashed" icon={<DeleteOutlined />} size="large" />
              </Popconfirm>
            </Space>
          )
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      loading={store.loading}
      dataSource={eventData}
      locale={{ emptyText: <NoData /> }}
      style={{ margin: '0 auto' }}
    />
  );
};

export default observer(EventList);
