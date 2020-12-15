import React from 'react';
import Collapsible from 'react-collapsible';
import './Book.css'

export default function Book(props){
    const {title, description, authors, imageLinks, publisher, publishedDate, averageRating, infoLink} = props.book;

    return (
        <div className="Book">
            <h2 className="important">
                <span role="img" aria-label="books">&#128215;</span>{title} <span role="img" aria-label="books">&#128215;</span>
            </h2>
            <a href={infoLink} target="_new">
               {imageLinks ? <img src={imageLinks.smallThumbnail ? imageLinks.smallThumbnail : imageLinks.thumbnail} alt='book_preview' className="highlight"/> : ''} 
            </a>
            {averageRating ? <img className="ratings" src={"ratings/" + averageRating + "_star.png"} alt="rating" width="40%" height="10%"/> : <p>No ratings available</p>}
            {description ? <Collapsible trigger="View summary"><span>{description}</span></Collapsible> : ''}
            <div className="info">
               {authors ? <div className="left-section">
                            <ul className="important">
                                Written by 
                                { authors.length > 1 ? 
                                authors.map((author, i) => i === authors.length - 1 ? <li key={author}>{author}</li> :
                                <li key={author}>{author}, </li>) : <li> {authors[0]}</li>
                                }
                            </ul>
                        </div> : ''} 
                <div className="right-section">
                    <p><span className="important">Released in</span> {publishedDate} </p>
                    {publisher ? <p><span className="important">Published by </span>{publisher}</p>: ''}
                </div>
            </div>
            
        </div>);
}