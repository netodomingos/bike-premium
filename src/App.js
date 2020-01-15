import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Main from './Pages/Main/Main'
import SearchPage from './Pages/SeachPage/SearchPage'
import Cart from './Pages/Cart/Cart'
import Details from './Pages/Details/Details'
import Default  from './Pages/Default/Default'
import Modal from './Components/modals/Modal'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/search' exact component={SearchPage}/>
          <Route path='/login'  component={Login} />
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/cart' component={Cart} />
          <Route path='/details' exact component={Details}/>
          <Route path='/modal' /> 
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </Router>

    </div>
  );
}

export default App;
