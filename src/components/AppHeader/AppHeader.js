import React from 'react'
import SearchForm from './SearchForm/SearchForm';

export const AppHeader = () => {
  return (
    <div>
      <header>
        <h1>Welcome to React</h1>
      </header>
      <p >
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <SearchForm />
    </div>
  );
}

export default AppHeader;