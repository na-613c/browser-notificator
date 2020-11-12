import React, { FunctionComponent } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

type Props = { store: StoreT };

const DisplayTypeTab: FunctionComponent<Props> = ({ store }) => {
  return (
    <div className="card-container">
      <h2>Выберите тип отображения</h2>
      <Tabs defaultActiveKey="1" onChange={(activeKey)=>{
        switch (activeKey) {
          case '1':
            return store.setTypeDay();
          case '2':
            return store.setTypeMonth();
          default:
            return store.setTypeYear();
        }
      }}>
        <TabPane tab="День" key="1">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab="Месяц" key="2">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab="Год" key="3">
          <DateTab store={store} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DisplayTypeTab;
