import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import TableComponet from './app/table/table';
import ProfileComponet from './app/pages/profiliepage';
import LoginComponet from './app/pages/loginpage';
import LayoutComponet from './app/layout/layout';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <LayoutComponet>
        <Switch>
          <Route exact path="/" component={TableComponet} />
          <Route path="/login" component={LoginComponet} />
          <Route path="/profile" component={ProfileComponet} />
        </Switch>
      </LayoutComponet>
    </div>
  );
}

export default App;
