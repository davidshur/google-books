import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = () => ();


  render() {
    return (
      <Card className="mb-2">
        <Card.Body>
          <div className='float-right'>
            <a href={this.props.book.volumeInfo.infoLink}><Button variant="outline-secondary" className="mr-2">View</Button></a>
            <Button variant="secondary" onClick={this.saveBook}>Save</Button>
          </div>
          <Card.Title>
            {this.props.book.volumeInfo.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Written by {this.props.book.volumeInfo.authors}
          </Card.Subtitle>
          {
            this.props.book.volumeInfo.imageLinks === undefined
              ? <span></span>
              : <img className="float-left mr-4" src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title} />
          }
          <Card.Text>
            {this.props.book.volumeInfo.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

};

export default SearchedBook;
