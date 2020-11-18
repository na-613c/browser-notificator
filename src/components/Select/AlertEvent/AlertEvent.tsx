import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react';
import StoreT from '../../../models/StoreModel';
import { AlignLeftOutlined, AlignRightOutlined } from '@ant-design/icons';
import TextLoop from 'react-text-loop';
import { Alert } from 'antd';

type Props = { store: StoreT; keyEvent: string };

const AlertEvent: FunctionComponent<Props> = ({ store, keyEvent }) => {
  let [event] = store.events.filter((e) => e.key === keyEvent);
  if (!event) return <></>;

  let day = event.day.toString().length === 1 ? 0 + event.day.toString() : event.day;
  let month = event.month.toString().length === 1 ? 0 + event.month.toString() : event.month;

  let description = (
    <TextLoop mask>
      <div>
        Время: {day}.{month}.{event.year} {event.time}
      </div>
      <div>Повтор: {event.repeating ? 'Есть' : 'нет'}</div>
      <div>
        Положение: {event.position === 'Left' ? <AlignLeftOutlined /> : <AlignRightOutlined />}
      </div>
      <div>Приоритет: {event.prior}</div>
    </TextLoop>
  );

  return (
    <Alert
      message={event.event.toUpperCase()}
      description={description}
      type="info"
      showIcon
      style={{ textAlign: 'left' }}
    />
  );
};

export default observer(AlertEvent);
