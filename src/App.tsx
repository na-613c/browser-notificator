import React, { FunctionComponent } from 'react';
import DisplayTypeTab from './components/DisplayTypeTab/DisplayTypeTab';
import ModController from './components/Commons/ModController';
import './App.css';
import StoreT from './models/StoreModel';
import { Typography } from 'antd';

const { Title } = Typography;

type AppProps = { store: StoreT };

const App: FunctionComponent <AppProps> = ({ store }) => {
  return (
    <div className="App">
      <Title>browser notificator</Title>
      <ModController setEditMode={store.setEditMode} />
      <DisplayTypeTab store={store} />
    </div>
  );
};

export default App;
