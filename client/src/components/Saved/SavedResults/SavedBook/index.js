import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook() {
    axios.delete(`/api/books/${this.props.book._id}`);
  }

  render() {
    return (
      <Card className="mb-2">
        <Card.Body>
          <div className='float-right'>
            <a href={this.props.book.link}><Button variant="outline-secondary" className="mr-2">View</Button></a>
            <Button variant="secondary" onClick={this.deleteBook}>Delete</Button>
          </div>
          <Card.Title>
            {this.props.book.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Written by {this.props.book.authors}
          </Card.Subtitle>
          {
            this.props.book.link === undefined
              ? <span></span>
              : <img className="float-left mr-4" src={this.props.book.image} alt={this.props.book.title} />
          }
          <Card.Text>
            {this.props.book.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

};

export default ResultCard;
