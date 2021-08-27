import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: this.props.details,
            selectValue: this.props.details.shelf,
            loaded: false
        }
    }
    handleChange = (book, event) => {
        this.props.handleChange(book, event);
        this.setState(() => ({ selectValue: event.target.value ,loaded:true}));
    }
    componentDidMount() {
        if (this.props.details.shelf === undefined) {
            BooksAPI.get(this.props.details.id)
                .then((book) => this.setState(() => ({ details: book,selectValue:book.shelf,loaded:true })))
                .catch(console.log("book not loaded"));
        } else {
            this.setState(()=>({loaded:true}))
        }
       
    }
    render() {
       
        return (
            
            <li className="bookCard-container">
                <div className="bookCard">
                    {this.state.loaded === false && <div className="LoadingBook"></div>}
                     <div className={` poster  ${this.state.details.imageLinks === undefined?'not-found':''}`} style={this.state.details.imageLinks!== undefined? { "backgroundImage": `url(${ this.state.details.imageLinks.smallThumbnail})` }:{"opacity":"0.8"}}>
                        <p className="book-title">{this.state.details.title}</p>
                    </div>
                     <p className="authors"><b>Authors: </b> {this.state.details.authors!==undefined ? this.state.details.authors.map((auth) => (auth + ". ")):(<span className="alert">NOT FOUND</span>)}</p>
                    <select value={this.state.selectValue} onChange={(event)=>this.handleChange(this.state.details,event)}>
                        <option disabled value="moveTo">move to ..</option>
                        <option  value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want To Read</option>
                        <option value="read">Read</option>
                        <option  value="none">none</option>
                    </select>
                </div>
            </li>
        )
    }
}
