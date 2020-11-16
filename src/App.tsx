import React, { FunctionComponent } from 'react';
import DisplayTypeTab from './components/DisplayTypeTab/DisplayTypeTab';
import ModController from './components/Commons/ModController';
import EditModal from './components/EditModal/EditModal';
import './App.css';
import StoreT from './models/StoreModel';
import { Typography } from 'antd';
import { BrowserRouter } from 'react-router-dom';
const { Title } = Typography;

type AppProps = { store: StoreT };

const App: FunctionComponent<AppProps> = ({ store }) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Title>BROWSER NOTIFICATOR</Title>
        <ModController store={store} />
        <DisplayTypeTab store={store} />
        <EditModal store={store} />
      </div>
    </BrowserRouter>
  );
};

export default App;
