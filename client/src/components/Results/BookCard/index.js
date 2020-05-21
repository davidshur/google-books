import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ResultCard = (props) => (
  <Card>
    <Card.Body>
      <Card.Title>
        {props.book.title}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Written by {props.book.authors}
      </Card.Subtitle>
      <Card.Img src={props.book.image} alt={props.book.title} />
      <Card.Text>
        {props.book.description}
      </Card.Text>
      <div className='float-right'>
        <a href={props.book.link}><Button variant="outline-secondary" className="mr-2">View</Button></a>
        {
          props.variant === 'search'
            ? <Button variant="secondary">Save</Button>
            : <Button variant="secondary">Delete</Button>
        }
      </div>
    </Card.Body>
  </Card>
);

export default ResultCard;
