import './searchbar.css';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value.toLowerCase().trim());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      alert('Enter movie title');
      return;
    }

    onSubmit(query);
  };
  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchForm-button"></button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          // autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
