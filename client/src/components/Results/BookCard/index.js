import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ResultCard = (props) => (
  <Card>
    <Card.Body>
      <div className='float-right'>
        <a href={props.book.volumeInfo.infoLink}><Button variant="outline-secondary" className="mr-2">View</Button></a>
        {
          props.variant === 'search'
            ? <Button variant="secondary">Save</Button>
            : <Button variant="secondary">Delete</Button>
        }
      </div>
      <Card.Title>
        {props.book.volumeInfo.title}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Written by {props.book.volumeInfo.authors}
      </Card.Subtitle>
      {
        props.book.volumeInfo.imageLinks === undefined
          ? <span></span>
          : <img className="float-left mr-4" src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title} />
      }
      <Card.Text>
        {props.book.volumeInfo.description}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ResultCard;
