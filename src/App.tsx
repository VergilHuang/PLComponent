import React, { useState } from 'react';
import './App.sass';
import NavigationHead from './component/NavigationHead';
import NavigationSideBar from './component/NavigationSideBar';

const App: React.FC = () => {

  const [IsSidebarOpen, setIsSidebarOpen] = useState(false)

  const onOpenMenu = () => {
    console.log('open')
    setIsSidebarOpen(true)
  }
  return (
    <div className="App">
      <NavigationHead onMenuClick={onOpenMenu} />
      <NavigationSideBar active={IsSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main>
        <div className="container black">
          <div className="col-xs-12 yellow">1</div>
          <div className="col-xs-12 col-sm-6 col-md-3 yellow">2</div>
          <div className="col-xs-12 col-sm-6 col-md-3 yellow">3</div>
          <div className="col-xs-12 col-sm-6 col-md-3 yellow">4</div>
          <div className="col-xs-12 col-sm-6 col-md-3 yellow">5</div>
        </div>
      </main>
      <footer className="container gray">
        <div className="col-xs-12 col-sm-4 ">6</div>
        <div className="col-xs-12 col-sm-4 ">7</div>
        <div className="col-xs-12 col-sm-4 ">8</div>
      </footer>
    </div>
  );
}

export default App;
