import React from 'react';
import { Book } from '../types';

type BookListProps = {
  books: Book[];
  updateBook: (book: Book) => void;
  deleteBook: (id: number) => void;
};

const BookList: React.FC<BookListProps> = ({ books, updateBook, deleteBook }) => {
  const handleEdit = (book: Book) => {
    const updatedTitle = prompt('Edit Title:', book.title) || book.title;
    const updatedAuthor = prompt('Edit Author:', book.author) || book.author;
    const updatedGenre = prompt('Edit Genre:', book.genre) || book.genre;
    const updatedPrice = parseFloat(prompt('Edit Price:', book.price.toString()) || book.price.toString());
    updateBook({ ...book, title: updatedTitle, author: updatedAuthor, genre: updatedGenre, price: updatedPrice });
  };

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <div>
            <strong>{book.title}</strong> by {book.author} - {book.genre} - ₹{book.price.toFixed(2)}
          </div>
          <div>
            <button onClick={() => handleEdit(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
