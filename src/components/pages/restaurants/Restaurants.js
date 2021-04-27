import React, {useEffect, useState} from 'react';
import imgContact from "../../../assets/cover-image.jpg";
import './restaurants.css'
import Checkbox from "../../shared/checkbox/Checkbox";
import Firebase from '../../../service/firebase/firebase'
import Posts from "../../pagination/posts";
import Pagination from "../../pagination/pagination";
// import  { filteredData } from '../../../helpers/filtredData'



const Restaurants = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const checkedValues = [];

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
            checkedValues.push(e.target.name);
        }else {

        }

        console.log(checkedValues, 'checked values new')

    }


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loading ? [] : data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    console.log(checkedValues, 'checked values')


    return (
        <>
            <div className={'wrapper-resturants'} style={{backgroundImage: `url(${imgContact})`}}>
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
                            <Checkbox name='Armenian' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                    <div>
                        <span>Chinese </span>
                        <span>
                             <Checkbox name='Chinese' onChange={(e) => handleCheck(e)}/>
                      </span>

                    </div>
                    <div>
                        <span>European</span>
                        <span>
                            <Checkbox name=' European' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                    <div>
                        <span>Caucasian</span>
                        <span>
                              <Checkbox name=' Caucasian' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                    <div>
                        <span> Georgian</span>
                        <span>
                              <Checkbox name=' Georgian' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                    <div>
                        <span>Italian</span>
                        <span>
                            <Checkbox name='Italian' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                    <div>
                        <span> Russian</span>
                        <span>
                             <Checkbox name=' Russian' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                    <div>
                        <span>Mexican</span>
                        <span>
                             <Checkbox name=' Mexican' onChange={(e) => handleCheck(e)}/>
                        </span>

                    </div>
                </div>
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