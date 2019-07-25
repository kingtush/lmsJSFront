
//import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
import Config from '../config';

//Here add all crud actions for Authors

const AuthorsActions = {
    readAuthors: function(){
        axios.get(Config.api + '/authors')
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_authors',
                data: res.data
            });
        });
    },

    deleteAuthor: function(author_id){
        axios.delete(Config.api + '/authors/'+author_id)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'delete_author',
                status: res,
                data: res.data
            });
            this.readAuthors();
        });
    },

    addAuthor: function(author){
        axios.post(Config.api + '/authors/',author)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'add_author',
                status: res,
                data: res.data
            });
            this.readAuthors();
        });
    }
}

module.exports = AuthorsActions;