import React, {useState} from 'react';
import Rating from 'react-verdict';
import './Book.css';

export default function Book(props){
    const [readMore, setReadMore]= useState(false);
    const {title, description, authors, imageLinks, publishedDate, averageRating, infoLink} = props.book;

    return (
        <div className="Book">
            <h2 className="book-title">
                <span role="img" aria-label="books">&#128215;</span>
                {title} 
                <span role="img" aria-label="books">&#128215;</span>
            </h2>
            <a href={infoLink} target="_new">
               {imageLinks ? <img src={imageLinks.smallThumbnail ? imageLinks.smallThumbnail : imageLinks.thumbnail} alt='book_preview' className="highlight"/> : ''} 
            </a>
            {description && !readMore ? <span onClick={()=> setReadMore(true)}>View summary</span> : ''}
            {description && readMore ? <span onClick={()=> setReadMore(false)}>{description}</span> : ''}
            {averageRating ? <div style={{display:'flex', justifyContent: 'center'}}><Rating value={averageRating} /></div> : <p>No ratings available</p>}
            <div className="info">
            {publishedDate ? <p style={{width: '100%', textAlign: 'center'}}><span className="important">Released date</span> {publishedDate} </p> : ''}
            {authors ?  <p style={{width: '100%', textAlign: 'center'}}> 
                            <span className="important">Written by { authors.length > 1 ? 
                                authors.map((author, i) => i === authors.length - 1 ? 
                                <span key={author}>{author}</span> :
                                <span key={author}>{author}, </span>) : 
                                <span> {authors[0]}</span>
                                }   
                            </span>
                        </p> : 
            ''}
            </div>         
        </div>);
}