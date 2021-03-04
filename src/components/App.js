import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/main.css';
import HeaderMenu from './HeaderMenu';
import SinglePageNews from './SinglePageNews';
import Login from './Login';
import News from './News';
import Profile from './Profile';
import AddNews from './AddNews';

const App = () => {
  return (
    <Router>
      <div className="App">
        <HeaderMenu/>
        <Route path='/' render={() => <h1 className='text'>Welcome to react app!</h1>} exact/>
        <Route path='/news/' exact component={News}/>
        <Route path='/profile/' component={Profile}/>
        <Route path='/login/' component={Login}/>
        <Route path='/news/:id' exact render={({match}) => {
          const { id } = match.params;
          return <SinglePageNews itemId={id}/>;
        }}/>
        <Route path='/add-news/' component={AddNews}/>
      </div>
    </Router>
  );
};

export default App;
