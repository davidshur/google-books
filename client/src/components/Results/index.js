import React from 'react';
import Card from 'react-bootstrap/Card';
import SavedBook from './SavedBook';
import SearchedBook from './SearchedBook';

const Results = (props) => (
    <Card className="mb-4">
        { props.variant === 'search' ?
            <Card.Body>
                <Card.Title>Results</Card.Title>
                {
                    props.list.map(book => <SearchedBook book={book} key={book.id} />)
                }
            </Card.Body>
            :
            <Card.Body>
                <Card.Title>Saved Books</Card.Title>
                {
                    props.list.map(book => <SavedBook book={book} key={book._id} />)
                }
            </Card.Body>
        }
    </Card>
);

export default Results;