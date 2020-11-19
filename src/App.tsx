import React, { FunctionComponent, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import DisplayTypeTab from './components/DisplayTypeTab/DisplayTypeTab';
import ModController from './components/Modifire/ModController';
import EditModal from './components/EditModal/EditModal';
import SelectEvent from './components/Select/SelectEvent';
import EventMessage from './components/EventMessage/EventMessage';
import './App.css';
import StoreT from './models/StoreModel';
import { Typography, Space } from 'antd';

const { Title } = Typography;

type AppProps = { store: StoreT };

const App: FunctionComponent<AppProps> = ({ store }) => {
  useEffect(() => {
    store.getEvents();
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title style={{ paddingTop: 20 }}>BROWSER NOTIFICATOR</Title>
          <ModController store={store} />
          <SelectEvent store={store} />
        </Space>
        <DisplayTypeTab store={store} />
        <EditModal store={store} />
        <EventMessage store={store} />
      </div>
    </HashRouter>
  );
};

export default App;
