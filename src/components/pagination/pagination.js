import React from 'react'
import { Link } from "react-router-dom";
import './pagination.css'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    // const location = useHistory()
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <Link to={`/resturants/page-${number}`}
                                onClick={() => paginate(number)}

                                className="page-link"
                            >
                                {number}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    );
};


export default Pagination