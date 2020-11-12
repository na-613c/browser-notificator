import React, { FunctionComponent } from 'react';
import DisplayTypeTab from './components/DisplayTypeTab/DisplayTypeTab';
import './App.css';
import StoreT from './models/StoreModel';


type AppProps = { store: StoreT };

const App: FunctionComponent <AppProps> = ({ store }) => {
  return (
    <div className="App">
      <DisplayTypeTab store={store} />
    </div>
  );
};

export default App;
