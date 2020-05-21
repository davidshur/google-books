import React from 'react';
import Card from 'react-bootstrap/Card';
import BookCard from './BookCard';

const Results = (props) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {props.title}
            </Card.Title>
            {
                props.list.map(book => <BookCard book={book} key={book.id} variant={props.variant} />)
            }
        </Card.Body>
    </Card>
);

export default Results;