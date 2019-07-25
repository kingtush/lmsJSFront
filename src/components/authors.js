"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import {AuthorList} from '../components/AuthorList';

export class Authors extends React.Component{

    render() {
        return(
            <div>
                <AuthorList authorList = {this.props.authorList} />
            </div>
        );
    }
}

Authors.propTypes = {
    authorList: PropTypes.array.isRequired
};
