import React, { useEffect, useState } from "react";
import Checkbox from "../shared/checkbox/Checkbox";
import Fetch from '../../service/fetch/fetch';
import mainConfig from '../../configs/mainConfig';


const Filters = ({ selectedFilters, setSelectedFilters }) => {
    const [cuisine, setCuisine] = useState([]);
    useEffect(() => {

        // Firebase.getCuisine().then(res => setCuisine([...res]))
        Fetch.get(`${mainConfig.connection.databaseURL}/cuisine.json`).then(res => setCuisine([...res]))

    }, []);


    return (
        <div className="filtered-container">
            {
                cuisine.map(el => (
                    <Checkbox
                        isChecked={selectedFilters[el.id]}
                        key={el.id}
                        name={el.name}
                        onChange={() => setSelectedFilters(val => ({...val, [el.name]: !val[el.name]}))}
                    />
                ))
            }
        </div>
    )
}


export default Filters
