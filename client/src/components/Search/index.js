import React from 'react';
import BookSearch from './BookSearch';
import Container from 'react-bootstrap/Container';
import Results from '../Results';

const Search = () => (
    <Container>
        <BookSearch />
        <Results title="Results" variant="search" />
    </Container>
);

export default Search;
