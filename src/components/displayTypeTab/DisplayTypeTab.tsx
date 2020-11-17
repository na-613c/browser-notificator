import React, { FunctionComponent, useState } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs } from 'antd';
import { Typography } from 'antd';
import { observer } from 'mobx-react';
import { NavLink, Route, Switch } from 'react-router-dom';
const { Title } = Typography;
const { TabPane } = Tabs;

type Props = { store: StoreT };

const DisplayTypeTab: FunctionComponent<Props> = ({ store }) => {
  const [state, setstate] = useState('1');

  return (
    <div className="card-container">
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
            setstate('1');
            store.setTabDay();
            return <></>;
          }}></Route>
        <Route
          path="/month"
          component={() => {
            setstate('2');
            store.setTabMonth();
            return <></>;
          }}></Route>
        <Route
          path="/year"
          component={() => {
            setstate('3');
            store.setTabYear();
            return <></>;
          }}></Route>
        <Route
          exact
          path="/"
          component={() => {
            setstate('4');
            store.setTabAll();
            return <></>;
          }}></Route>
      </Switch>
    </div>
  );
};

export default observer(DisplayTypeTab);
