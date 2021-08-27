import React, { Component } from 'react'
import ListOfBooks from './ListOfBooks';
import * as BooksAPI from '../BooksAPI'
import Wait from './wait'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default class SearchPage extends Component {
    constructor(props) {
    super(props);
        this.state = { ListOfBooks: [], successfulConnection: true, loading: false, searchQuery: "" }
    }

     
    handelChange = (event) => {       
        this.getSearhedBook(event.target.value);
        this.setState(() => ({lastSearchQuery:event.target.value}))
    }
    
    getSearhedBook = (query) => {
        
        this.setState(() => ({searchQuery:query, loading: true }))
        if (query === "") {
            this.setState((()=>({ListOfBooks:[],loading: false })))
        } else  {
             BooksAPI.search(query)
            .then((books) =>
            {
                if (Array.isArray(books)) {
                    this.setState(() => ({ ListOfBooks: books, loading: false }))
                }
                else {
                    this.setState(() => ({ ListOfBooks: undefined,loading:false }))
                }
            })
            .catch(() => {
                
                this.setState(() => ({ loading: false }));
            })
             
        }
       
    }
   
      handleSelectChange = (book, event) => {
        if (book.shelf !== event.target.value) {
            BooksAPI.update(book, event.target.value)
              .then((res) => {
                this.getSearhedBook(this.state.searchQuery);                 
              }).catch(()=>(console.log(book.title +"could not be updated!")))
        } 
    }
    render() {
        
        return (

            <div>
                <div className="search-container">
                    <Link to="/" className="back-link" ><FontAwesomeIcon icon={faArrowLeft} /></Link>
                    <input type="text" className="search-input" onChange={this.handelChange} />
                </div>
                
                {Array.isArray(this.state.ListOfBooks) && <ListOfBooks subTitle="Search Results" books={this.state.ListOfBooks} handleChange={this.handleSelectChange} />} 
                {this.state.loading === true && <Wait />}
            </div>
        )
    }
}
