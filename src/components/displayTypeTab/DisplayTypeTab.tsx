import React, { FunctionComponent, useState } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs, Typography } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';

const { Title } = Typography;
const { TabPane } = Tabs;

type Props = { store: StoreT };

const DisplayTypeTab: FunctionComponent<Props> = ({ store }) => {
  const [state, setState] = useState('1');

  return (
    <div
      style={{ width: store.isEditMode ? '100%' : '80%', margin: '0 auto', transition: '0.4s' }}
      className="card-container">
      <Title level={2}>Выберите тип отображения</Title>
      <Tabs activeKey={state}>
        <TabPane tab={<NavLink to="/day">День</NavLink>} key="1">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab={<NavLink to="/month">Месяц</NavLink>} key="2">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab={<NavLink to="/year">Год</NavLink>} key="3">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab={<NavLink to="/">Всё</NavLink>} key="4">
          <DateTab store={store} />
        </TabPane>
      </Tabs>

      <Switch>
        <Route
          path="/day"
          component={() => {
            setState('1');
            store.setTabDay();
            return <></>;
          }}
        />
        <Route
          path="/month"
          component={() => {
            setState('2');
            store.setTabMonth();
            return <></>;
          }}
        />
        <Route
          path="/year"
          component={() => {
            setState('3');
            store.setTabYear();
            return <></>;
          }}
        />
        <Route
          exact
          path="/"
          component={() => {
            setState('4');
            store.setTabAll();
            return <></>;
          }}
        />
      </Switch>
    </div>
  );
};

export default observer(DisplayTypeTab);
