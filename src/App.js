import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header'
import BottomNav from './components/bottomNav'
import './App.css';
import router from './router';


const routers = router.map((t, i) => {
  return <Route path={t.path} exact={t.exact} component={t.component} key={i}></Route>
})

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          {routers}
          <Redirect from="/" to="/index"></Redirect>
        </Switch>
        <BottomNav />
      </Router>
      <p className="bottom-tip"> <img src={require('./imgs/logo.png')}/> ジェイオート精工株式会社</p>
    </div>
  );
}

export default App;
