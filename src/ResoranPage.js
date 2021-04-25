import React from 'react';
 import {useParams} from 'react-router-dom'

const ResoranPage = () => {
    const {name} = useParams()
    console.log(name)
    return (
        <div>
          helo vord
        </div>
    );
};

export default ResoranPage;