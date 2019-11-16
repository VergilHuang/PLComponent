import React, { useState } from 'react';
import './App.sass';
import NavigationHead from './component/NavigationHead';
import NavigationSideBar from './component/NavigationSideBar';
import PLInput from './component/PLInput';

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
        <div className="container black border">
          <div className="col-xs-12 yellow border">1</div>
          <div className="col-xs-12 col-sm-6 container border">
            <div className="col-xs-12 col-sm-12 yellow border">2</div>
            <div className="col-xs-12 col-sm-12 yellow border">3</div>
          </div>
          <div className="col-xs-12 col-sm-6 container border">
            <div className="col-xs-12 col-sm-6 col-md-3 yellow border">4</div>
            <div className="col-xs-12 col-sm-6 col-md-3 yellow border">5</div>
          </div>
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
