import React from 'react';
import './Book.css'

export default function Book(props){
    const {title, description, authors, imageLinks, publisher, publishedDate, averageRating, infoLink} = props.book;
    console.log(props.book)
    return (
        <div className="Book">
            <h2 className="title">
                <span role="img" aria-label="books">&#128215;</span>{title} <span role="img" aria-label="books">&#128215;</span>
            </h2>
            <a href={infoLink} target="_new">
                <img src={imageLinks ? imageLinks.smallThumbnail : ''} alt='book_preview' className="highlight"/>
            </a>
            
            {/* <div className="description">{description}</div> */}
            <ul className="authors">Authors: { authors.length > 1 ? 
            authors.map(author => <li key={author}>{author}</li>) : 
            <li> {authors[0]}</li>}
            </ul> 
            <p>Ratings: {averageRating ? averageRating : 'No ratings available'}</p>
            <p>Published by {publisher} in {publishedDate}</p>
        </div>);
}