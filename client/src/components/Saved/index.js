import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            books: null,
            loading: false,
            value: '',
            color: 'black'
        };

        this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    deleteBook(id) {
        axios.delete(`/api/books/${id}`)
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
        return (
            <Card className="mb-4">
                <Card.Body>
                    {
                        this.state.color === 'black'
                            ?
                                <Card.Title>
                                    Saved Books
                                </Card.Title>
                            :
                                <Card.Title style={{color: 'red'}}>
                                    Saved Books
                                </Card.Title>
                    }
                    { this.state.books.map(book =>
                        <Card key={book._id} className="mb-2">
                            <Card.Body>
                                <div className='float-right'>
                                <a href={book.link}><Button variant="outline-secondary" className="mr-2">View</Button></a>
                                <Button variant="secondary" onClick={() => this.deleteBook(book._id)}>Delete</Button>
                                </div>
                                <Card.Title>
                                {book.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                Written by {book.authors}
                                </Card.Subtitle>
                                {
                                book.link === undefined
                                    ? <span></span>
                                    : <img className="float-left mr-4" src={book.image} alt={book.title} />
                                }
                                <Card.Text>
                                {book.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Card.Body>
            </Card>
        )
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
