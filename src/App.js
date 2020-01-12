import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Main from './Pages/Main/Main'
import SearchPage from './Pages/SeachPage/SearchPage'
import Cart from './Pages/Cart/Cart'
import Details from './Pages/Details/Details'
import Default  from './Pages/Default/Default'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/search' component={SearchPage}/>
          <Route path='/login' component={Login} />
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/cart' component={Cart} />
          <Route path='/details' component={Details}/>
          <Route component={Default}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
