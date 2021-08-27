import React, { Component } from 'react'
import ListOfBooks from './ListOfBooks';
import * as BooksAPI from '../BooksAPI'
import Wait from './wait'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
export default class MainPage extends Component {
     constructor(props) {
    super(props);
    this.state={ListOfBooks:[],successfulConnection:true,loading:true}
    }
    getAllBooks = () => {
    this.setState(() => ({ loading: true }));
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ListOfBooks:books,successfulConnection:true,loading:false}))
      })
      .catch(
      ()=>this.setState({successfulConnection:false,loading: false})
    )
  }
  componentDidMount() {
    
    this.getAllBooks();
  }
  
  handleChange = (book, event) => {
        if (book.shelf !== event.target.value) {
            BooksAPI.update(book, event.target.value)
              .then((res) => {
                this.getAllBooks()                 
              }).catch(()=>(console.log(book.title +"could not be updated!")))
        } 
    }
    render() {
        const  currentlyReadingBooks = this.state.ListOfBooks.filter(book => book.shelf === "currentlyReading");
         const wantToReadBooks = this.state.ListOfBooks.filter(book => book.shelf === "wantToRead");
         const readBooks = this.state.ListOfBooks.filter(book => book.shelf === "read");
        
        return (
            <div>
                  <Link to="/search"
                 className="Search-link"
                  ><FontAwesomeIcon icon={faSearchPlus} /></Link>
                {currentlyReadingBooks.length>0 && ( <ListOfBooks subTitle="Currently Reading" books={currentlyReadingBooks} handleChange={this.handleChange} />)}
                {wantToReadBooks.length>0 &&  (<ListOfBooks subTitle="Want To Read" books={wantToReadBooks} handleChange={this.handleChange} />) }
                {readBooks.length > 0 && (<ListOfBooks subTitle="Read" books={readBooks} handleChange={this.handleChange} />)}
                {this.state.successfulConnection === false && (<p>Connection Lost</p>)}
                {this.state.loading === true && <Wait />}
            </div>
        )
    }
}
