"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import PublisherActions from '../actions/publisherActions';
import { AddPublisherForm } from './AddPublisherForm';


export class PublisherList extends React.Component{

    createPublisherRow(publisher){
        console.log('CREATE PUB ROW');
        return (
            <tr key={publisher.publisher_id}>
                <td> {publisher.publisher_id} </td>
                <td> {publisher.publisher_name} </td>
                <td>
                <button className="btn btn-info btn-md" >Update</button>
                <button className="btn btn-danger btn-md" onClick={() => PublisherActions.deletePublisher(publisher.publisher_id)}>Delete</button>
                </td>
            </tr>
        );
    }

    componentDidMount(){
        PublisherActions.readPublishers();
    }

    render() {
        console.log('IM HERE');
        return(
            <div>
                <h1>Publishers</h1>
                <AddPublisherForm />
                <button type="button" className="btn btn-primary">Add Publisher</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Publisher Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.publisherList.map(this.createPublisherRow, this)}
                    </tbody>    
                </table>
            </div>
        );
    }
}

PublisherList.propTypes = {
    publisherList: PropTypes.array.isRequired
};



