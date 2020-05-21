import React from 'react';
import Card from 'react-bootstrap/Card';
import ResultCard from './ResultCard';

const books = [
    {
        title: 'The Sorcerer\'s Stone',
        authors: ['J.K. Rowling'],
        description: 'Go on a magical adventure with Harry Potter.',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FHarry-Potter-Sorcerers-Stone-Rowling%2Fdp%2F0590353403&psig=AOvVaw1JG6xUUIXSo_v1Zyq8OPUz&ust=1590178277125000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIits_PhxekCFQAAAAAdAAAAABAD',
        link: 'https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/0590353403'
    },
    {
        title: 'The Chamber of Secrets',
        authors: ['J.K. Rowling'],
        description: 'Go on a magical adventure with a basilisk.',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FHarry-Potter-Sorcerers-Stone-Rowling%2Fdp%2F0590353403&psig=AOvVaw1JG6xUUIXSo_v1Zyq8OPUz&ust=1590178277125000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIits_PhxekCFQAAAAAdAAAAABAD',
        link: 'https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/0590353403'
    }

];


const Results = () => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                Results
            </Card.Title>
            {
                books.map(book => <ResultCard book={book} />)
            }
        </Card.Body>
    </Card>
);

export default Results;