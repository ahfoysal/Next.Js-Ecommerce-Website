import React from "react";
import { Search } from 'react-bootstrap-icons';


const SearchComponent = () => {
  return (
    <form action="#" className="search">
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn btn-primary text-white"
          type="submit"
          aria-label="Search"
        >
          <Search />
        </button>
      </div>
    </form>
  );
};
export default SearchComponent;
