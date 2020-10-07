import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router,Route, Switch} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Form from './components/Form/Form';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/signup" component={Form}/>
      </Switch>
    </Router>
   
      </>
      
  );
}

export default App;
