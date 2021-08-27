import React, { Component } from 'react'
import Book from './Book';

export default class ListOfBooks extends Component {
    constructor(props) {
        super(props);
        this.state={ListOfBook:this.props.books}
    }
    render() {
        return (
            <section className="list-container">
                <h3>{this.props.subTitle}</h3>
                <ol className="list-of-books">
                    {this.props.books.map((book) => (<Book key={book.id} details={book} handleChange={this.props.handleChange} />))}
                </ol>
            </section>
        )
    }
}
