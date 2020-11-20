import React, { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react';
import EventModel from '../../models/EventModel';
import { notification } from 'antd';
import { ThunderboltOutlined, BulbOutlined, StarOutlined } from '@ant-design/icons';
import EventServiceModel from '../../models/EventServiceModel';
import { RedoOutlined } from '@ant-design/icons';

type Props = { eventService: EventServiceModel };

const EventMessage: FunctionComponent<Props> = ({ eventService }) => {
  let currentEvents = eventService.currentEvents;

  useEffect(() => {
    let a: EventModel[] = currentEvents.map((e) => {
      return eventService.events.filter((i) => i.key === e)[0];
    });

    a.forEach((e) => {
      openNotification(`top${e.position}`, e);

      if (e.repeating) {
        let reEvent = {
          ...e,
          'time-picker': e.time,
          'date-picker': `${e.year}-${e.month}-${e.day + 1}`,
        };
        eventService.updateEvent(reEvent, e.key);
      }
      eventService.removePastEvent();
    });
  });

  const openNotification = (placement: any, e: EventModel) => {
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

    let day = e.day.toString().length === 1 ? 0 + e.day.toString() : e.day;
    let month = e.month.toString().length === 1 ? 0 + e.month.toString() : e.month;

    notification.open({
      message: (
        <>
          {e.event.toUpperCase()} {e.repeating ? <RedoOutlined /> : ''}
        </>
      ),
      description: (
        <div>
          Время: {day}.{month}.{e.year} {e.time}
        </div>
      ),
      placement,
      ...notificationStyle,
    });
  };

  return <></>;
};

export default observer(EventMessage);
