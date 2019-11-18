import React, { useState } from 'react';
import { Switch, Route, Router, withRouter, RouteComponentProps, HashRouter } from 'react-router-dom';
import './App.sass';
import NavigationHead from './component/NavigationHead';
import NavigationSideBar from './component/NavigationSideBar';
import RwdGrid from './pages/RwdGrid';
import TableViewTemplate from './pages/TableViewTemplate';
import ModelTemplate from './pages/ModelTemplate';

const App: React.FC = (props) => {

  const [IsSidebarOpen, setIsSidebarOpen] = useState(false)

  const onOpenMenu = () => {
    console.log('open')
    setIsSidebarOpen(true)
  }
  return (
    <div className="App">
      <HashRouter>
        <NavigationHead onMenuClick={onOpenMenu} />
        <NavigationSideBar active={IsSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main>
          <Switch>
            <Route path="/rwdGrid">
              <RwdGrid />
            </Route>
            <Route path="/tableView">
              <TableViewTemplate />
            </Route>
            <Route path="/model">
              <ModelTemplate />
            </Route>
          </Switch>
        </main>
        <footer className="container gray">
          <div className="col-xs-12 col-sm-4 ">6</div>
          <div className="col-xs-12 col-sm-4 ">7</div>
          <div className="col-xs-12 col-sm-4 ">8</div>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
