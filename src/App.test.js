import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
  test('page title renders', () => {
    render(<App />);
    expect(screen.getByText('Book Finder')).toBeInTheDocument();
  })
  test('Search input renders', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter a book title here ...')).toBeInTheDocument();
  })
  test('Submit button renders', () => {
    render(<App />);
    expect(screen.getByRole('button'));
  })
  // test('fetches books from Google API and displays them', async () => {
  //   const stories = [
  //     { 
  //       id: '1', 
  //       volumeInfo: {
  //         title:"To Kill a Mockingbird by Harper Lee",
  //         authors:["Lukas"],
  //         publisher:"Strelbytskyy Multimedia Publishing",
  //         publishedDate:"2019-01-18",
  //         description:"This book is written for the students who study a famous all over the world work, written by Harper Lee, To Kill a Mockingbird An essay contains basic facts from the writer’s biography, the plot of the book To Kill a Mockingbird is retold, and the main characters and ideas are characterized. It is also shown how the book influenced the literary process and other writers.",
  //         industryIdentifiers:[{"type":"OTHER","identifier":"PKEY:SMP2300000065961"}],
  //         readingModes:{"text":true,"image":true},
  //         printType:"BOOK","categories":["Fiction"],
  //         maturityRating:"NOT_MATURE",
  //         allowAnonLogging:true,
  //         contentVersion:"1.1.1.0.preview.3",
  //         panelizationSummary:{"containsEpubBubbles":false,"containsImageBubbles":false},
  //         imageLinks:{"smallThumbnail":"http://books.google.com/books/content?id=lpaEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  //         thumbnail:"http://books.google.com/books/content?id=lpaEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
  //         language:"en",
  //         previewLink:"http://books.google.nl/books?id=lpaEDwAAQBAJ&pg=PP4&dq=mockingbird&hl=&cd=1&source=gbs_api",
  //         infoLink:"https://play.google.com/store/books/details?id=lpaEDwAAQBAJ&source=gbs_api",
  //         canonicalVolumeLink:"https://play.google.com/store/books/details?id=lpaEDwAAQBAJ"
  //       }
  //     },
  //   ];
 
  //   axios.get.mockImplementationOnce(() =>
  //     Promise.resolve({ data: { hits: stories } })
  //   );

  //   render(<App />);

  //   await userEvent.click(screen.getByRole('button'));
  //   const items = await screen.findAllByRole('listitem');
  //   expect(items).toHaveLength(2);
  // })
})

