import React, { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react';
import StoreT from '../../models/StoreModel';
import eventT from '../../models/EventModel';
import { notification } from 'antd';
import { ThunderboltOutlined, BulbOutlined, StarOutlined } from '@ant-design/icons';

type Props = { store: StoreT };

const EventMessage: FunctionComponent<Props> = ({ store }) => {
  useEffect(() => {
    let a: eventT[] = store.events.filter((e) => e.key === store.eventCome);

    a.forEach((e) => {
      openNotification(`top${e.position}`, e);
    });
  }, [store.eventCome]);

  const openNotification = (placement: any, e: eventT) => {
    let notificationStyle;
    switch (e.prior) {
      case 'высокий':
        notificationStyle = {
          icon: <ThunderboltOutlined style={{ color: '#ff4d4f' }} />,
          style: {
            background: '#fff2f0',
            border: '1px solid #ffccc7',
          },
        };

        break;
      case 'средний':
        notificationStyle = {
          icon: <BulbOutlined style={{ color: '#faad14' }} />,
          style: {
            background: '#fffbe6',
            border: '1px solid #ffe58f',
          },
        };
        break;
      default:
        notificationStyle = {
          icon: <StarOutlined style={{ color: '#52c41a' }} />,
          style: {
            background: '#f6ffed',
            border: '1px solid #b7eb8f',
          },
        };
        break;
    }

    notification.open({
      message: e.event,
      placement,
      ...notificationStyle,
    });
  };

  return <></>;
};

export default observer(EventMessage);
