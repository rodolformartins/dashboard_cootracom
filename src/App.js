import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';


const App = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  

  return (
    <div className="container">
      <Sidebar sidebarOpen={sideBarOpen} closeSideBar={closeSideBar} />
    </div>
  );
}

export default App;
