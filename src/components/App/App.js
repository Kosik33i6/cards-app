import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import List from '../List/ListContainer';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
import SearchResults from '../SearchResults/SearchResultsContainer';
// import {AnimatedSwitch} from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/info' component={Info}/>
        <Route exact path='/faq' component={Faq}/>
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:searchString" component={SearchResults} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
