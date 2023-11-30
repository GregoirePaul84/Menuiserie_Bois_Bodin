import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Success from './Components/Contact/Success';
import AllServices from './Components/Services/AllServices';
import Cgv from './Pages/Cgv';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menuiserie_bois_bodin/' element={<Home />}></Route>
        <Route path='/menuiserie_bois_bodin/all_services/:string' element={<AllServices />}></Route>
        <Route path='/menuiserie_bois_bodin/success' element={<Success />}></Route>
        <Route path='/menuiserie_bois_bodin/cgv' element={<Cgv/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
