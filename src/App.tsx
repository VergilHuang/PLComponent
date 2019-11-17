import React, { useState } from 'react';
import './App.sass';
import NavigationHead from './component/NavigationHead';
import NavigationSideBar from './component/NavigationSideBar';
import PLInput from './component/PLInput';
import PLButton from './component/PLButton';

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
          <div className="col-xs-12 yellow">
            <PLInput defaultValue="" holderLabel={"請輸入姓名"} options={{
              rules: [{
                message: '長度不可以超過6',
                maxLength: 6
              }, {
                patern: /^[0-9a-zA-Z]*$/,
                message: "只能輸入英數字"
              }]
            }} />
          </div>
          <div className="col-lg-12 black">
            <PLButton style={{
              backgroundColor: "rgb(55,55,55)",
              border: "1px solid #9300FF",
              color: "#fff"
            }}>
              很大的按鈕
            </PLButton>
          </div>
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
    </div >
  );
}

export default App;
