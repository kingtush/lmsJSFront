
//import PublisherApi from '../api/publisherApi';
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
import Config from '../config';

//Here add all crud actions for Publishers

const PublishersActions = {
    readPublishers: function(){
        axios.get(Config.api + '/publishers')
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_publishers',
                data: res.data
            });
        });
    },

    deletePublisher: function(publisher_id){
        axios.delete(Config.api + '/publishers/'+publisher_id)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'delete_publisher',
                status: res,
                data: res.data
            });
            this.readPublishers();
        });
    },

    addPublisher: function(publisher){
        axios.post(Config.api + '/publishers/',publisher)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'add_publisher',
                status: res,
                data: res.data
            });
            this.readPublishers();
        });
    }
}


module.exports = PublishersActions;