import React, { useState, useMemo } from 'react';
import { Switch, HashRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './App.sass';
import NavigationHead from './component/NavigationHead';
import NavigationSideBar from './component/NavigationSideBar';
import routeConfig from './model/router/routeConfig';


const App: React.FC = (props) => {

  const [IsSidebarOpen, setIsSidebarOpen] = useState(false)

  const Routers = useMemo(() => {
    const _routers = renderRoutes(routeConfig)
    _routers.props.children.push(<Redirect from="/" to="/TabTemplate"></Redirect>)
    return _routers
  }, [])

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
            {Routers}
          </Switch>
        </main>
        <footer className="container gray">
          <div className="col-xs-12 col-sm-4 ">6</div>
          <div className="col-xs-12 col-sm-4 ">7</div>
          <div className="col-xs-12 col-sm-4 ">8</div>
        </footer>
      </HashRouter>
    </div >
  );
}

export default App;
