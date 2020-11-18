import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import DisplayTypeTab from './components/DisplayTypeTab/DisplayTypeTab';
import ModController from './components/Modifire/ModController';
import EditModal from './components/EditModal/EditModal';
import SelectEvent from './components/Select/SelectEvent';
import './App.css';
import StoreT from './models/StoreModel';
import { Typography, Space } from 'antd';

const { Title } = Typography;

type AppProps = { store: StoreT };

const App: FunctionComponent<AppProps> = ({ store }) => {
  store.getEvents();
  return (
    <BrowserRouter>
      <div className="App">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title>BROWSER NOTIFICATOR</Title>
          <ModController store={store} />
          <SelectEvent store={store} />
        </Space>
        <DisplayTypeTab store={store} />
        <EditModal store={store} />
      </div>
    </BrowserRouter>
  );
};

export default App;
