import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro}/>
      </Router>
    </div>
  );
}

export default App;
