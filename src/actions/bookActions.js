
//import BookApi from '../api/bookApi';
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
import Config from '../config';

//Here add all crud actions for Books

const BooksActions = {
    readBooks: function(){
        axios.get(Config.api + '/books')
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_books',
                data: res.data
            });
        });
    }
}

module.exports = BooksActions;