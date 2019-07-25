import React from 'react';
import PublisherActions from '../actions/PublisherActions';

export class AddPublisherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { publisher_name:'' };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ publisher_name: event.target.value});
    }

    handleSubmit(event) {
        var publisher = {
            publisher_name: this.state.publisher_name
        }
        PublisherActions.addPublisher(publisher)
        // alert('A name was submitted: ' + publisher.first_name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <legend>Add Publisher</legend>
                <label>
                    Publisher Name:
                        <input type="text" value={this.state.publisher_name} onChange={this.handleNameChange} />
                </label> <br/>
                  
                <input type="submit" value="Add" />
            </form>
        );
    }
}