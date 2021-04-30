import React, {useEffect, useState} from 'react';
import Firebase from '../../../service/firebase/firebase'
import Posts from "../../pagination/posts";
import Pagination from "../../pagination/pagination";
import Header from "../../header/Header";
import Filters from "../../filters";
import imgContact from "../../../assets/cover-image.jpg";
import './restaurants.css';

const LIMIT = 9;

const Restaurants = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filtered, setFiltered] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});

    const cuisines = [...data]; // TODO check+++

    useEffect(() => {
        setLoading(true);
        Firebase.getRestaurants()
            .then((val => {
                setData(val);
                setLoading(false);
                setFiltered(val);
            }));
    }, []);

    useEffect(() => {
        if (Object.keys(selectedFilters).length) {
            handleCuisineFiltration();
        }
    }, [selectedFilters]);

    const indexOfLastPost = currentPage * LIMIT;
    const indexOfFirstPost = indexOfLastPost - LIMIT;

    const currentPosts = loading ? [] : filtered?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const handleCuisineFiltration = () => {
      const cuisinesToBeFiltered = Object.keys(selectedFilters).filter(val=> selectedFilters[val]);
      const isFiltersAvailable = !!cuisinesToBeFiltered.length;

      !isFiltersAvailable && setData(cuisines)
      setFiltered(data.filter((item,index)=> (isFiltersAvailable && cuisinesToBeFiltered.indexOf(item?.Cuisine) >= 0) || !isFiltersAvailable));
    };


    return (
        <>
            <div className='wrapper-restaurants' style={{backgroundImage: `url(${imgContact})`}}>
                <Header/>
                <div className='contact-text'>
                    <h1>RESTAURANTS</h1>
                    <p>Booking online is Easy.</p>
                </div>
            </div>
            <div className='filters-container'>
                <Filters
                    setSelectedFilters={setSelectedFilters}
                    selectedFilters={selectedFilters}
                />
            </div>
            <div className='container-restaurants'>
                {!loading ? (
                    <>
                        <div className='post-data'>
                            <Posts
                                posts={currentPosts}
                                loading={loading}
                            />
                        </div>
                        <div className='pagination-pages'>
                            <Pagination
                                paginate={paginate}
                                postsPerPage={LIMIT}
                                totalPosts={filtered.length ? filtered.length : data?.length  }
                                url={`restaurants/page`}
                            />
                        </div>
                    </>
                ) : 'Loading...'}
            </div>
        </>
    )
};

export default Restaurants;
