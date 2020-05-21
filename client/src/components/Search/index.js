import React from 'react';
import BookSearch from './BookSearch';
import Container from 'react-bootstrap/Container';
import Results from './Results';

const Search = () => (
    <Container>
    <BookSearch />
    <Results />
    </Container>
);

export default Search;
