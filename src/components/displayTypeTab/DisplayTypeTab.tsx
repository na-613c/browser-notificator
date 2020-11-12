import React, { FunctionComponent } from 'react';
import { Tabs } from 'antd';
import EventList from './EvenList/EventList';
import StoreT from '../../models/StoreModel';

const { TabPane } = Tabs;

type AppProps = { store: StoreT };

const DisplayTypeTab: FunctionComponent<AppProps> = ({ store }) => {
  return (
    <div className="card-container">
      <h2>Выберите тип отображения</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="День" key="1">
          <EventList store={store} />
        </TabPane>
        <TabPane tab="Месяц" key="2">
          <EventList store={store} />
        </TabPane>
        <TabPane tab="Год" key="3">
          <EventList store={store} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DisplayTypeTab;
