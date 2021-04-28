import React, {useEffect, useState} from 'react';
import imgContact from "../../../assets/cover-image.jpg";
import './restaurants.css'
import Firebase from '../../../service/firebase/firebase'
import Posts from "../../pagination/posts";
import Pagination from "../../pagination/pagination";
import Header from "../../header/Header";

import { filteredData } from "../../../helpers/filtredData";
import Filters from "../../filters";



const Restaurants = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [filtered, setFiltered] = useState([]);



    useEffect(() => {
        setLoading(true);
        Firebase.getRestaurants()
            .then((val => {
                setData(val);
                setLoading(false);
            }))
    }, []);




    const handleCheck = (e) => {
       if(e.target.checked ) {

       }else {
           // let i = checked.indexOf(e.target.name);

       }
        // setFiltered([...filteredData(checked, data)])

    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loading ? [] : data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);

    };



    return (
        <>
            <div className={'wrapper-resturants'} style={{backgroundImage: `url(${imgContact})`}}>
                <Header />
                <div className={'contact-text'}>
                    <h1>RESTAURANTS</h1>
                    <p>Booking online is Easy.</p>
                </div>

            </div>
        <div className='filters-container'>
            <Filters />
        </div>


            <div className={'container-restaurants'}>
                {!loading ? (
                    <>
                        <div className={'post-data'}>

                            <Posts
                                posts={currentPosts}
                                loading={loading}
                            />
                        </div>

                   <div className={'pagination-pages'}>
                    <Pagination
                        paginate={paginate}
                        postsPerPage={ postsPerPage}
                        totalPosts={data.length}
                    />
                    </div>
                    </>
                ): 'Loading...'}
            </div>
        </>
    )
}

export default Restaurants