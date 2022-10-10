 import './App.css';
import Home from './component/Home/Home';
import Nav from './component/Nav/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

  function App() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []); 
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
