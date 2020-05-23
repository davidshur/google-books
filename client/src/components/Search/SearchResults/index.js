import React from 'react';
import Card from 'react-bootstrap/Card';
import SearchedBook from './SearchedBook';

const SearchResults = (props) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                Results
            </Card.Title>
            {
                props.list.map(book => <SearchedBook book={book} key={book._id} />)
            }
        </Card.Body>
    </Card>
);

export default SearchResults;