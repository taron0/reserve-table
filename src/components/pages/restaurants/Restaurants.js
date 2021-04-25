import React, {useEffect, useState} from 'react';
import imgContact from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import './restaurants.css'
import Checkbox from "../../shared/checkbox/Checkbox";
import Firebase from '../../../service/firebase/firebase'
import Posts from "../../pagination/posts";
import Pagination from "../../pagination/pagination";

const Restaurants = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);


    useEffect
    (() => {
        Firebase.getDataBase(data, setData, setLoading)
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    // console.log("indexOfLastPost: ", indexOfLastPost);

    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // console.log("indexOfFirstPost: ", indexOfFirstPost);

    const currentPosts = loading && data[0].slice(indexOfFirstPost, indexOfLastPost);
    console.log(data, 'datamata ::::::::::')
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };
    console.log("currentPosts: ", currentPosts);

    // console.log('::::', data)
    return (
        <>
            <div className={'wrapper-resturants'} style={{backgroundImage: `url(${imgContact})`}}>
                <Header/>
                <div className={'contact-text'}>
                    <h1>RESTAURANTS</h1>
                    <p>Booking online is Easy.</p>
                </div>

            </div>
            <div className={'filtred-container'}>
                <div>
                    Cuisine:
                </div>
                <div className={'countries'}>
                    <div>
                        <span>Armenian</span>
                        <span>
                            <Checkbox name='Armenian'/>
                        </span>

                    </div>
                    <div>
                        <span>Chinese </span>
                        <span>
                             <Checkbox name='Chinese'/>
                      </span>

                    </div>
                    <div>
                        <span>European</span>
                        <span>
                            <Checkbox name=' European'/>
                        </span>

                    </div>
                    <div>
                        <span>Caucasian</span>
                        <span>
                              <Checkbox name=' Caucasian'/>
                        </span>

                    </div>
                    <div>
                        <span> Georgian</span>
                        <span>
                              <Checkbox name=' Georgian'/>
                        </span>

                    </div>
                    <div>
                        <span>Italian</span>
                        <span>
                            <Checkbox name='Italian'/>
                        </span>

                    </div>
                    <div>
                        <span> Russian</span>
                        <span>
                             <Checkbox name=' Russian'/>
                        </span>

                    </div>
                    <div>
                        <span>Mexican</span>
                        <span>
                             <Checkbox name=' Mexican'/>
                        </span>

                    </div>
                </div>
            </div>

            <div className={'container-restaurants'}>
                {loading ? (
                    <>
                        <div className={'post-data'}>
                            <Posts posts={currentPosts} loading={loading}/>
                        </div>

                   <div className={'pagination-pages'}>
                    <Pagination
                        paginate={paginate}
                        postsPerPage={postsPerPage}
                        totalPosts={data[0].length}
                    />
                    </div>
                    </>
                ): 'Loading...'}



            </div>
        </>
    )
}

export default Restaurants