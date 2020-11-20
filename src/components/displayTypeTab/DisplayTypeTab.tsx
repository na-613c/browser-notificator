import React, { FunctionComponent, useState, useEffect } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs, Typography } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import ModalServiceModel from '../../models/ModalServiceModel';
import TabModel from '../../models/TabModel';

const { Title } = Typography;
const { TabPane } = Tabs;

type Props = { store: StoreT; modalService: ModalServiceModel; tabService: TabModel };

const DisplayTypeTab: FunctionComponent<Props> = ({ store, modalService, tabService }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    switch (tabService.activeTab) {
      case 'DAY':
        setState('1');
        break;
      case 'MONTH':
        setState('2');
        break;
      case 'YEAR':
        setState('3');
        break;
      default:
        setState('4');
        break;
    }
  }, [tabService.activeTab]);

  const style = {
    width: modalService.isEditMode ? '100%' : '80%',
    margin: '0 auto',
    transition: '0.4s',
  };

  return (
    <div style={style} className="card-container">
      <Title level={2}>Выберите тип отображения</Title>
      <Tabs activeKey={state}>
        <TabPane tab={<NavLink to="/day">День</NavLink>} key="1">
          <DateTab store={store} tabService={tabService} modalService={modalService} />
        </TabPane>
        <TabPane tab={<NavLink to="/month">Месяц</NavLink>} key="2">
          <DateTab store={store} tabService={tabService} modalService={modalService} />
        </TabPane>
        <TabPane tab={<NavLink to="/year">Год</NavLink>} key="3">
          <DateTab store={store} tabService={tabService} modalService={modalService} />
        </TabPane>
        <TabPane tab={<NavLink to="/">Всё</NavLink>} key="4">
          <DateTab store={store} tabService={tabService} modalService={modalService} />
        </TabPane>
      </Tabs>

      <Switch>
        <Route
          path="/day"
          component={() => {
            tabService.setTabDay();
            return <></>;
          }}
        />
        <Route
          path="/month"
          component={() => {
            tabService.setTabMonth();
            return <></>;
          }}
        />
        <Route
          path="/year"
          component={() => {
            tabService.setTabYear();
            return <></>;
          }}
        />
        <Route
          exact
          path="/"
          component={() => {
            tabService.setTabAll();
            return <></>;
          }}
        />
      </Switch>
    </div>
  );
};

export default observer(DisplayTypeTab);
