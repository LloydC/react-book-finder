import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {title: '', bookList: []};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }  

    componentDidMount(){
      // axios.get('https://www.googleapis.com/books/v1/volumes?q=the+art+of+war')
      // .then(result =>{
      //   console.log(result.data.items) // generate list of books matching the "search" query
      // })
      // .catch(err => console.error(err))

      // axios.get(' https://www.goodreads.com/book/title.FORMAT?title=harry+potter')
      // .then(result =>{
      //   console.log(result) // generate list of books matching the "search" query
      // })
      // .catch(err => console.error(err))
      // CORS error
      
    }
    handleChange(e){
      this.setState({title: e.target.value})
    }
    handleSubmit(e){
      e.preventDefault();
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}`)
      .then(result =>{
        this.setState({bookList: result.data.items})
        console.log(result.data.items) // generate list of books matching the "search" query
      })
      .catch(err => console.error(err))
    }
    render(){
      let {title, bookList} = this.state;

      return (
        <div className="App">
          <header className="App-header">
            <h1>Book Finder</h1>
    
            <form onSubmit={this.handleSubmit}>
              <input type="text" 
              placeholder="Enter book title here ..." 
              value={title}
                onChange={this.handleChange}
              />
              <button className="myButton" type="submit">Search</button>
            </form>
          </header>   
          {bookList.length > 1 ? bookList.map(book => <p>{book.volumeInfo.title}</p>): 'No entries'}
        </div>
      );
    }
}

export default App;
