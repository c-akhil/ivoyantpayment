import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import TableComponet from './app/table/table';
import ProfileComponet from './app/pages/profiliepage';
import LoginComponet from './app/pages/loginpage';
import ConfigComponent from './app/pages/configpage';
import LayoutComponet from './app/layout/layout';
import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
        <LayoutComponet>
          <Switch>
            <Route exact path="/" component={TableComponet} />
            <Route path="/config" component={ConfigComponent} />
          </Switch>
        </LayoutComponet>
      </div>
    );
  }
}


export default App;
