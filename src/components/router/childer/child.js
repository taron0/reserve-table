import  {useParams } from 'react-router'
import Restaurants from "../../pages/restaurants/Restaurants";
function Child() {

    let { id } = useParams();


    return (
        <div>
            <Restaurants />
        </div>
    );
}

export default Child