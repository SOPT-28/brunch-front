import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, SearchPage } from './pages';
import { Header, Footer } from './components';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route path="/">404 not Found</Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
