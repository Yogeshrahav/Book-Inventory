import React from 'react';

type FilterProps = {
  filter: { genre: string; author: string };
  setFilter: React.Dispatch<React.SetStateAction<{ genre: string; author: string }>>;
};

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Genre"
        value={filter.genre}
        onChange={(e) => setFilter((prev) => ({ ...prev, genre: e.target.value }))}
        className="filter-genre"
      />
      <input
        type="text"
        placeholder="Filter by Author"
        value={filter.author}
        onChange={(e) => setFilter((prev) => ({ ...prev, author: e.target.value }))}
        className="filter-author"
      />
    </div>
  );
};

export default Filter;
