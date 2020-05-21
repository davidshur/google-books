import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const BookSearch = () => (
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
                    placeholder="Book Title"
                    aria-label="Book Title"
                    aria-describedby="book-title"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </Card.Body>
    </Card>
);

export default BookSearch;
