import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Results from '../Results';

class Saved extends Component {
    state = {
        books: null,
        loading: false,
        value: ''
    };

    componentDidMount() {
        this.search();
    }

    search = async val => {
        this.setState({ loading: true });
        const res = await axios(
            '/api/books'
        );
        const books = await res.data;
        console.log(res);
        this.setState({ books, loading: false });
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
