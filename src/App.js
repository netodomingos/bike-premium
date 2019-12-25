import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Index from './Pages/index/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/' exact component={Index}/>
      </Router>
    </div>
  );
}

export default App;
