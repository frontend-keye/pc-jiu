import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header'
import './App.css';
import router from './router';


const routers = router.map((t, i) => {
  return <Route path={t.path} component={t.component} key={i}></Route>
})

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          {routers}
          <Redirect from="/" to="/index"></Redirect>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
