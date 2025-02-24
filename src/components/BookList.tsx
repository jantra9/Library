import React from 'react'
import BookCard from './BookCard';

interface Book {
  id: number; // Example property
  title: string;
  author: string;
}

interface Props{
  title:string;
  books:Book[];
  containerClassName?:string;
}

const BookList: React.FC<Props> = ({title, books, containerClassName}) => {
  return (
    <section className='mt-5'>
      <h2 className='font-bebas-neue text-4xl text-light-100'>
        Popular Books
      </h2>
      <ul className='book-list'>
        {books.map((book)=>(
          <BookCard key={book.title} {...book}/>
        ))}
      </ul>
    </section>
  )
}

export default BookList
