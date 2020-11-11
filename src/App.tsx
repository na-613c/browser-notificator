import React, { FunctionComponent } from 'react';
import EventList from './components/EvenList/EventList';
import './App.css';
import StoreT from './models/StoreModel';


type AppProps = { store: StoreT };

const App: FunctionComponent <AppProps> = ({ store }) => {
  return (
    <div className="App">
      <EventList store={store} />
    </div>
  );
};

export default App;
