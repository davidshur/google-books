import React, { Component } from 'react';
import axios from 'axios';
import Results from '../Results';
import Container from 'react-bootstrap/Container';

class Saved extends Component {
    state = {
        books: null,
        loading: false,
        value: ''
    };

    search = () => {
        this.setState({ loading: true });

        this.setState({ loading: false });
    }

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    }

    get renderBooks() {
        if (!this.state.books) {
            return <h4>No saved books.</h4>;
        }
        return <Results title="Saved Books" variant="saved" list={this.state.books} />;
    }

    render() {
        return (
            <Container>
                {this.renderBooks}
            </Container>
        );
    }
};

export default Saved;
