import './App.css';

import React, { Component } from 'react'
import {Route } from 'react-router-dom'
import MainPage from './BooksComponents/MainPage';
import SearchPage from './BooksComponents/SearchPage';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={ListOfBooks:[],successfulConnection:true,loading:true}
  }
 
  
  
  render() {
    
    return (
      <div>
        <header>
          <h1 className="main-header">My Reads</h1>
        </header>
        <Route exact path="/" component={MainPage} />
        <Route path='/search' component={SearchPage} />
       
      </div>
    )
  }
}


