import React, {useEffect, useState} from "react";
import Checkbox from "../shared/checkbox/Checkbox";
import Firebase from '../../service/firebase/firebase'


const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState({}); // [id]: true
    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {
        // TODO get filters data++
        Firebase.getCuisine().then(res => setCuisine([...res]))
    console.log(cuisine,'cuisine ASADSADDASF')
    }, []);



    return (
        <div className="filtred-container">
            {
                cuisine.map(el => (
                    console.log(el, 'elements data')
                    // <Checkbox
                    //     isChecked={selectedFilters[el.id]}
                    //     key={el.id}
                    //     name={el.name}
                    //     onChange={() => setSelectedFilters(val => ({...val, [el.id]: !val[el.id]}))}
                    // />

                ))
            }
            {console.log(cuisine, 'adsadsadasd')}
        </div>

    )
}


            export default Filters
