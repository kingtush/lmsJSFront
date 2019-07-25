"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';
import { AddAuthorForm } from './AddAuthorForm';


export class AuthorList extends React.Component{

    createAuthorRow(author){
        
        return (
            <tr key={author.author_id}>
                <td> {author.author_id} </td>
                <td> {author.first_name} </td>
                <td> {author.last_name} </td>
                <td>
                <button className="btn btn-info btn-md">Update</button>
                <button className="btn btn-danger btn-md" onClick={() => AuthorActions.deleteAuthor(author.author_id)}>Delete</button>
                </td>
            </tr>
        );
    }

    componentDidMount(){
        AuthorActions.readAuthors();
    }

    render() {
        console.log('IM HERE');
        return(
            <div>
                <h1>Authors</h1>
                <button type="button" className="btn btn-primary">Add Author</button>
                <AddAuthorForm />
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authorList.map(this.createAuthorRow, this)}
                    </tbody>    
                </table>
            </div>
        );
        
    }
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};



