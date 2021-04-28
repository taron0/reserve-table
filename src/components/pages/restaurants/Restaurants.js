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
    const [postsPerPage, setPostsPerPage] = useState(8);
    const [filtered, setFiltered] = useState([]);


    const checked = []
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
            checked.push(e.target.name);
       }else {
           let i = checked.indexOf(e.target.name);
           checked.splice(i,1)
       }
        setFiltered([...filteredData(checked, data)])
        console.log(checked,'checked box ban man')
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loading ? [] : data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setFiltered([...filteredData(checked, data)])

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
                                posts={filtered.length ? filtered.slice(indexOfFirstPost, indexOfLastPost) : currentPosts}
                                loading={loading}
                            />
                        </div>
                        {console.log(filtered,' choaskdjasuduio')}
                   <div className={'pagination-pages'}>
                    <Pagination
                        paginate={paginate}
                        postsPerPage={ postsPerPage}
                        totalPosts={filtered.length ? filtered.length : data.length}
                    />
                    </div>
                    </>
                ): 'Loading...'}
            </div>
        </>
    )
}

export default Restaurants