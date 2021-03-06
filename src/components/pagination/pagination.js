import React from "react";
import { NavLink } from "react-router-dom";
import "./pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, url }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <NavLink
                to={`/${url}/${number}`}
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
