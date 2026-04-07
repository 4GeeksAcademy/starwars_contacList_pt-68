import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardPeople } from "../components/CardPeople.jsx";



export const Starwars = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    //   const { store, dispatch } = useGlobalReducer()

    // fetch("https://www.swapi.tech/api/people/")
    //     .then(res => res.json())
    //     .then(data => console.log(data.results))
    //     .catch(err => console.error(err))


    return (
        <div className="container">
            <h2>Starwars </h2>
            <h3>People</h3>
            <CardPeople />
            <h3>Planets</h3>
            {/* <componente_carta_planets/> */}
            <h3>Vehicles</h3>
            {/* <componente_carta_vehicles/> */}


            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
