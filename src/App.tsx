import React from 'react';
import "./App.css"
import Providers from './contexts/userContexts';
import Routes from './routes';
import Global from './styles/global';

const App = () => (
  <>
  <Global />
  <Providers>
      <Routes />
    </Providers>
  </>
);
export default App;
