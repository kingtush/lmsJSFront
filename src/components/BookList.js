"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/bookActions';


export class BookList extends React.Component{

    createBookRow(book){
        return (
            <tr key={book.book_id}>
                <td> {book.book_id} </td>
                <td> {book.book_title} </td>
                <td> {book.author_id} </td>
                <td>
                <button className="btn btn-info btn-md">Update</button>
                <button className="btn btn-danger btn-md">Delete</button>
                </td>
            </tr>
        );
    }

    componentDidMount(){
        BookActions.readBooks();
    }

    render() {
        return(
            <div>
                <h1>Books</h1>
                <button type="button" className="btn btn-primary">Add Book</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookList.map(this.createBookRow, this)}
                    </tbody>    
                </table>
            </div>
        );
    }
}

BookList.propTypes = {
    bookList: PropTypes.array.isRequired
};



