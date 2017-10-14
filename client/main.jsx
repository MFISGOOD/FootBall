import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render} from 'react-dom';
import  {Route, Link, Switch , BrowserRouter }  from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from '../imports/ui/Home.jsx';
import New from '../imports/ui/New.jsx';
import Lost from '../imports/ui/Lost.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/new' component={New} />
    <Route path='*' component={Lost} />
  </Switch>
)


Meteor.startup(()=>{
  render((
    <BrowserRouter >
     <App/>
    </BrowserRouter>
  ),document.getElementById('render-target'));
});
