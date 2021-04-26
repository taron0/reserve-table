import React from 'react';
import ResturantsList from "../../helpers/resturantsList/resturantsList";

const Posts = ({posts, loading}) => {

    console.log('posts', posts)


    return (
        <>{
            posts.map(el => {
                return (
                    <div key={el.name}>
                        <ResturantsList el={el}/>
                    </div>
                )
            })
        }


        </>
    )
}

export default Posts