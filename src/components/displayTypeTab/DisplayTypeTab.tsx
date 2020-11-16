import React, { FunctionComponent } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs } from 'antd';
import { Typography } from 'antd';
import { observer } from 'mobx-react';
import { NavLink, Route } from 'react-router-dom';
const { Title } = Typography;
const { TabPane } = Tabs;

type Props = { store: StoreT };

const DisplayTypeTab: FunctionComponent<Props> = ({ store }) => {
  return (
    <div className="card-container">
      <Title level={2}>Выберите тип отображения</Title>
      <Tabs
        defaultActiveKey="1"
        onChange={(activeKey: string) => {
          switch (activeKey) {
            case '1':
              return store.setTabDay();
            case '2':
              return store.setTabMonth();
            default:
              return store.setTabYear();
          }
        }}>
        <TabPane tab={<NavLink to="/day">День</NavLink>} key="1">
          <Route path="/day" component={() => <DateTab store={store} />}></Route>
        </TabPane>
        <TabPane tab={<NavLink to="/month">Месяц</NavLink>} key="2">
          <Route path="/month" component={() => <DateTab store={store} />}></Route>
        </TabPane>
        <TabPane tab={<NavLink to="/year">Год</NavLink>} key="3">
          <Route path="/year" component={() => <DateTab store={store} />}></Route>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default observer(DisplayTypeTab);
