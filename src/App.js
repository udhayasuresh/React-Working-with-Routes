import React from 'react';
import {BrowserRouter, Route, Link,NavLink, Switch, Redirect} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postitem';
import NotFound from './components/404.js';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
			<header>
			<div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 md-3 border-bottom">
			<h5 className="my-0 mr-md-auto font-weight-normal">MyApp</h5>
			<nav className="my-2 my-md-0 mr-md-3">

               <NavLink to="/" className="p-2 text-dark"
               activeStyle={{fontWeight:'bold'}}
                activeClassName="selected">Home</NavLink>

               <NavLink to ="/posts" className="p-2 text-dark"
               activeStyle={{fontWeight:'bold'}}
                activeClassName="selected">Posts</NavLink>

               <NavLink to ={{pathname:'/profile',
               hash:'#udhaya',search:'?profile=true'}} className="p-2 text-dark"
               activeStyle={{fontWeight:'bold'}}
                activeClassName="selected">Profile</NavLink><br/>

			</nav>
			</div>
			  
			</header>
			<div className="container">
			<Switch>
             <Route  path="/" component={Home} exact/>
             <Route path="/posts" component={Posts} exact/>
             <Route path="/posts/:id" component={PostItem} exact/>
             <Route path="/profile" component={Profile} exact/>
			 <Route render={()=><h3>Opp page not found</h3>} />
			</Switch>
			</div>
			</BrowserRouter>
			)
	}
}
export default App;