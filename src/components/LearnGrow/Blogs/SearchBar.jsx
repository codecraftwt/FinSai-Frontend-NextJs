import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const styles = {
    container: {
      padding: '10px',
      backgroundColor: 'rgba(73, 109, 171, 0.08)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80px',
      width: '100%',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      borderRadius: '5px',
    },
    searchForm: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '5px',
      overflow: 'hidden',
      width: '100%',
    },
    searchInput: {
      flex: 1,
      padding: '12px 16px',
      backgroundColor: 'rgba(73, 109, 171, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      color: '#8b96a5',
      fontSize: '14px',
      outline: 'none',
    },
    searchButton: {
      padding: '16px 16px',
      backgroundColor: 'rgba(73, 109, 171, 0.18)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      borderRadius: '5px',
      color: '#6b7d99',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSearch} style={styles.searchForm} className='h-full'>
        <input
          type="text"
          placeholder="Search Here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <div style={styles.searchButton} onClick={handleSearch}>
          <Search size={24} color="#496DAB" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
