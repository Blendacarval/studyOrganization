import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import Agenda from './paginas/Agenda';
import Escolas from './paginas/escolas';
import Forum from './paginas/Forum';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Registrar} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/escolas" component={Escolas} />
      <Route path="/forum" component={Forum} />
    </Switch>
  </div>
);

export default App;
