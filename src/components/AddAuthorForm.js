import React from 'react';
import AuthorActions from '../actions/AuthorActions';

export class AddAuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name:'' };

        this.handleFnChange = this.handleFnChange.bind(this);
        this.handleLnChange = this.handleLnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFnChange(event) {
        this.setState({ first_name: event.target.value});
    }

    handleLnChange(event) {
        this.setState({  last_name: event.target.value});
    }

    handleSubmit(event) {
        var author = {
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        AuthorActions.addAuthor(author)
        // alert('A name was submitted: ' + author.first_name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <legend>Add Author</legend>
                <label>
                    First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleFnChange} />
                </label> <br/>
                <label>
                    Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleLnChange} />
                </label>  <br/>
                <input type="submit" value="Add" />
            </form>
        );
    }
}