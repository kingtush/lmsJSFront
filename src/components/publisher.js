"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import {PublisherList} from '../components/PublisherList';

export class Publishers extends React.Component{

    render() {
        return(
            <div>
                <PublisherList publisherList = {this.props.publisherList} />
            </div>
        );
    }
}

Publishers.propTypes = {
    publisherList: PropTypes.array.isRequired
};
