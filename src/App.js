import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Success from './Components/Contact/Success';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menuiserie_bois_bodin/' element={<Home />}></Route>
        <Route path='/success' element={<Success />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
