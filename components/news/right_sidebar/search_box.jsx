import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className="section-title">
        <h4>Search</h4>
      </div>
      <form method="post" className="comment_form">
        <div className="input-group bog-src">
          <input
            type="text"
            className="form-control rounded-0"
            placeholder="Type Keyword"
            name="author"
            required
          />
          <button className="btn btn-sarch rounded-0" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
