import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";


export const DetailPeople = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams()

    function detallePersonaje() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => console.log(data.result.properties))
            .catch(err => console.error(err))
    }

useEffect(() => {
        detallePersonaje()

    },[uid])



    return (
        <div className="container">

            <div className="card" style={{ width: "18rem;" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>

            </div>

        </div>
    );
}; 