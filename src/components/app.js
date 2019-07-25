"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from './header.js';
import {Home} from './home.js';
import {Books} from './books.js';
import BookStore from '../stores/bookStore';
import PublisherStore from '../stores/publisherStore';
import AuthorStore from '../stores/authorStore';
import { Authors } from './authors.js';
import { Publishers } from './publisher.js';


export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bookList:[],
            authorList: [],
            publisherList: []
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/books' render={(props) => (<Books {...props} bookList={this.state.bookList} />)}/>
                    <Route path='/authors' render={(props) => (<Authors {...props} authorList={this.state.authorList} />)}/>
                    <Route path='/publishers' render={(props) => (<Publishers {...props} publisherList={this.state.publisherList} />)}/>
                </Switch>
            </div>
        );
    }

    componentWillMount(){
        BookStore.addChangeListener(this._onBookChange.bind(this));
        AuthorStore.addChangeListener(this._onAuthorChange.bind(this));
        PublisherStore.addChangeListener(this._onPublisherChange.bind(this));
    }

    componentWillUnmount(){
        BookStore.removeChangeListener(this._onBookChange.bind(this));
        AuthorStore.removeChangeListener(this._onAuthorChange.bind(this));
        PublisherStore.removeChangeListener(this._onPublisherChange.bind(this));
    }

    _onBookChange(){
        this.setState({bookList: BookStore.getAllBooks()});
    }

    _onAuthorChange(){
        this.setState({authorList: AuthorStore.getAllAuthors()});
    }

    _onPublisherChange(){
        this.setState({publisherList: PublisherStore.getAllPublishers()});
    }
}