import React, {useState} from 'react';
import axios from 'axios';
import coverImage from './book-pick.png'
import './App.css';
import Book from './components/Book/Book';

export default function App() {
    const [title, setTitle] = useState('');
    const [booklist, setBooklist] = useState([]);
    const [notfound, setNotfound] = useState(false);

   const handleChange = (e) => setTitle(e.target.value);
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
        
        if(result !== 'undefined'){
          setTitle('');
          setBooklist(result.data.items);
        }
        else{
          setTitle('');
          setNotfound(true);
        }
      }
      catch(err){
        console.error(err);
      }
    }
    
      return (
        <div className="App">
          <header className="App-header">
            <h1><span role="img" aria-label="books">&#128218;</span> Book Finder</h1>
    
            <form onSubmit={handleSubmit}>
              <input type="text" 
              placeholder="Enter a book title here ..." 
              value={title}
              onChange={handleChange}
              />
              <button className="myButton" type="submit">Search</button>
            </form>
          </header>   
          
          {notfound ? <p>No book was found matching the search term</p> : ''}

        <div className={booklist.length === 0 ? 'Books description' : 'Books'}>
            {booklist.length > 1 ? 
              booklist.map(book => <Book book={book.volumeInfo} key={book.id}/> ) : 
              <div style={{width: '400px'}}>
                <p>This application uses Google API to find books whose title match what you've entered in the search bar, you can click on any book that you wish to purchase :)</p>
                <br/>
                <img src={coverImage} alt="Guzel_Maksutova" width="300px" height="200px"/>
                <br/>
                <p> The page will update as soon as you begin your search for a good read <span role="img" aria-label="books">&#128215;</span></p>
              </div>}
          </div> 
          <footer className={booklist.length === 0 ? 'App-footer absolute' : 'App-footer'}>
              Made with <span role="img" aria-label="love">&#129505;</span> by King Code
          </footer>    
        </div>
      );
}