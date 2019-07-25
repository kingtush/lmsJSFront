import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';


const CHANGE_EVENT = 'change';

let _publisherStore = {
  publishers: []
};

class PublisherStoreClass extends EventEmitter{

    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getAllPublishers(){
        return _publisherStore.publishers;
    }

}

const PublisherStore = new PublisherStoreClass();

Dispatcher.register( (action) => {

    switch (action.actionType){
        case 'read_publishers':
            console.log('READ PUB ACTION');
            _publisherStore.publishers = action.data;
            PublisherStore.emitChange();
            console.log(action.data);
            break;
        
        case 'delete_publisher':
            console.log('DELETE PUB');
            console.log(action.data);
            //_publisherStore.publishers = action.data;
            PublisherStore.emitChange();
            break;
        
        case 'add_publisher':
                    //_publisherStore.publishers = action.data;
            console.log(action.data)
            PublisherStore.emitChange();
            break;
        
        default:
            return;
    }
} );

export default PublisherStore;