import { useEffect } from 'react';
import './App.css';
import { AllRoutes } from './Common/AllRoutes';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
