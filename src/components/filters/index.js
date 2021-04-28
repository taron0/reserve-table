import React, {useEffect, useState} from "react";
import Checkbox from "../shared/checkbox/Checkbox";
import Firebase from '../../service/firebase/firebase'
import Fetch from '../../service/fetch/fetch'
import mainConfig from '../../configs/mainConfig'


const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState({}); // [id]: true
    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {

        // Firebase.getCuisine().then(res => setCuisine([...res]))
        Fetch.get(`${mainConfig.connection.databaseURL}/cuisine.json`).then(res => setCuisine([...res]))
    console.log(cuisine,'cuisine ASADSADDASF')
    }, []);



    return (
        <div className="filtred-container">
            {
                cuisine.map(el => (
                <Checkbox
                isChecked={selectedFilters[el.id]}
                key={el.id}
                name={el.name}
                onChange={() => setSelectedFilters(val => ({...val, [el.id]: !val[el.id]}))}
                />
                ))
            }
            {console.log(cuisine, 'adsadsadasd')}
            {console.log(selectedFilters, 'selected Filters')}
        </div>

    )
}


            export default Filters
