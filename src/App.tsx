import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filter from './components/Filter';
import { Book } from './types';
import './index.css';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filter, setFilter] = useState<{ genre: string; author: string }>({ genre: '', author: '' });

  const addBook = (book: Book) => setBooks([...books, book]);

  const updateBook = (updatedBook: Book) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id: number) => setBooks(books.filter((book) => book.id !== id));

  const filteredBooks = books.filter(
    (book) =>
      (filter.genre === '' || book.genre === filter.genre) &&
      (filter.author === '' || book.author === filter.author)
  );

  return (
    <div className="container">
      {/* Filter Fields */}
      <div className="filter-container">
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      {/* Main App Card */}
      <div className="app">
        <h1>The Book Store</h1>
        <BookForm addBook={addBook} />
      </div>

      {/* Book List */}
      <ul className="book-list">
        <BookList books={filteredBooks} updateBook={updateBook} deleteBook={deleteBook} />
      </ul>
    </div>
  );
};

export default App;
