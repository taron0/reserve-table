import React, { useEffect, useState } from "react";
import Firebase from '../../../service/firebase/firebase';
import imgContact from "../../../assets/cover-image.jpg";
import OrdersList from "./ordersList";
import './orders.css';



const Orders = () => {
    const [data, setData ] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
            Firebase.getReserveTable().then(res => setData([...res]));
        setLoading(false);
    }, []);


    return (
        <>
            <div className='wrapper-restaurants' style={{backgroundImage: `url(${imgContact})`}}>
                <div className='contact-text'>
                    <h1>Orders List</h1>
                </div>
            </div>
            <div className='orders-list'>
                <h1>Reserve Tables</h1>
            </div>
            <div className='tables'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Person</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    {loading ? 'Loading...' : (
                        <>
                            {data.map(el => (
                               <OrdersList list={el} />
                            ))}
                        </>
                    )}
                </table>
            </div>
        </>
    )
};

export default Orders

