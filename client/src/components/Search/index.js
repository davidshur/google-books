import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from'react-bootstrap/InputGroup';
import Results from '../Results';

require('dotenv').config();

class Search extends Component {
    state = {
        books: null,
        loading: false,
        value: ''
    };

    search = async val => {
        this.setState({ loading: true });
        const res = await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${val}&key=${process.env.REACT_APP_BOOKS_API_KEY}`
        );
        const books = await res.data.items;

        this.setState({ books, loading: false });
    }

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value })
    }

    get renderBooks() {
        let books = <span></span>
        if (this.state.books) {
            books = <Results title="Results" variant="search" list={this.state.books} />
        }

        return books;
    }

    render() {
        return (
            <Container>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>
                            Book Search
                        </Card.Title>
                        <Card.Subtitle className="mb-2 mt-2 text-muted">
                            Search for your book below, we'll show you what's out there.
                        </Card.Subtitle>
                        <InputGroup>
                            <FormControl
                                value={this.state.value}
                                onChange={e => this.onChangeHandler(e)}
                                placeholder="Book Title"
                                aria-label="Book Title"
                                aria-describedby="book-title"
                            />
                        </InputGroup>
                    </Card.Body>
                </Card>
                {this.renderBooks}
            </Container>
        )
    };
};

export default Search;
