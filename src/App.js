import React from 'react';
import axios from 'axios';
import './App.css';
import Book from './components/Book'

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {title: '', bookList: [], notFound: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }  
    handleChange(e){
      this.setState({title: e.target.value})
    }
    handleSubmit(e){
      e.preventDefault();
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}`)
      .then(result =>{
        if(result !== 'undefined'){
          this.setState({title: '', bookList: result.data.items})
        }
        else{
          this.setState({title:'', notFound: true})
        }
      })
      .catch(err => console.error(err))
    }
    render(){
      let {title, bookList, notFound} = this.state;

      return (
        <div className="App">
          <header className="App-header">
            <h1><span role="img" aria-label="books">&#128218;</span> Book Finder</h1>
    
            <form onSubmit={this.handleSubmit}>
              <input type="text" 
              placeholder="Enter book title here ..." 
              value={title}
              onChange={this.handleChange}
              />
              <button className="myButton" type="submit">Search</button>
            </form>
          </header>   
        {notFound ? <p>No book was found matching the search term</p> : ''}
          <div className='Books'>
            {bookList.length > 1 ? 
            bookList.map(book => <Book book={book.volumeInfo} key={book.id}/> ) : 
            <p> This page will update as soon as you begin your search for a good read <span role="img" aria-label="books">&#128215;</span></p>}
          </div>     
        </div>
      );
    }
}