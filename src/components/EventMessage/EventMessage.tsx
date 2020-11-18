import React, { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react';
import StoreT from '../../models/StoreModel';
import eventT from '../../models/EventModel';
import { notification } from 'antd';

type Props = { store: StoreT };

const EventMessage: FunctionComponent<Props> = ({ store }) => {
  useEffect(() => {
    let a: eventT[] = [];

    a = store.events.filter((e) => e.key === store.eventCome);

    console.log(a, 'event &!');

    a.forEach((e) => {
      openNotification(`top${e.position}`, e);
    });
  }, [store.eventCome]);

  const openNotification = (placement: any, e: any) => {
    notification.open({
      message: e.event,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement,
    });
  };

  return <></>;
};

export default observer(EventMessage);
