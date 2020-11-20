import React, { FunctionComponent, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import DisplayTypeTab from './components/DisplayTypeTab/DisplayTypeTab';
import ModController from './components/Modifire/ModController';
import EditModal from './components/EditModal/EditModal';
import SelectEvent from './components/Select/SelectEvent';
import EventMessage from './components/EventMessage/EventMessage';
import StoreT from './models/StoreModel';
import './App.css';
import { Typography, Space } from 'antd';

const { Title } = Typography;

type AppProps = { store: StoreT };

const App: FunctionComponent<AppProps> = ({ store }) => {
  useEffect(() => {
    store.eventService.getEvents();
  }, []);

  console.log(store.modalService);

  return (
    <HashRouter>
      <div className="App">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title style={{ paddingTop: 20 }}>BROWSER NOTIFICATOR</Title>
          <ModController modalService={store.modalService} />
          <SelectEvent eventService={store.eventService} />
        </Space>
        <DisplayTypeTab
          tabService={store.tabService}
          eventService={store.eventService}
          modalService={store.modalService}
        />
        <EditModal eventService={store.eventService} modalService={store.modalService} />
        <EventMessage eventService={store.eventService} />
      </div>
    </HashRouter>
  );
};

export default App;
