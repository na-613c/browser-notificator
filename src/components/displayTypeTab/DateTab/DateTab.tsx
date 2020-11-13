import React, { FunctionComponent } from 'react';
import EventList from './EvenList/EventList';
import StoreT from '../../../models/StoreModel';
import { Tabs } from 'antd';
import { observer } from 'mobx-react';

const { TabPane } = Tabs;

type Props = { store: StoreT };

const DateTab: FunctionComponent<Props> = ({ store }) => {
  const dateTab = store.eventData.map((e, id) => {
    return (
      <TabPane tab={e.title} key={id}>
        <EventList store={e.event} isEditMode={store.isEditMode}/>
      </TabPane>
    );
  });

  return <Tabs defaultActiveKey="0">{dateTab}</Tabs>;
};

export default observer(DateTab);
