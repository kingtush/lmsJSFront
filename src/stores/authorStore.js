import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';


const CHANGE_EVENT = 'change';

let _authorStore = {
  authors: []
};

class AuthorStoreClass extends EventEmitter{

    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getAllAuthors(){
        return _authorStore.authors;
    }

}

const AuthorStore = new AuthorStoreClass();

Dispatcher.register( (action) => {

    switch (action.actionType){
        case 'read_authors':
            _authorStore.authors = action.data;
            AuthorStore.emitChange();
            break;
        
        case 'delete_author':
                            //_authorStore.authors = action.data;
            AuthorStore.emitChange();
            break;
        
        case 'add_author':
                    //_authorStore.authors = action.data;
            console.log(action.data)
            AuthorStore.emitChange();
            break;
        default:
            return;
    }
} );

export default AuthorStore;