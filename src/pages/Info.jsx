import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState} from "react";

export const Info = () => {

    const { store, dispatch } = useGlobalReducer()

    const [message, setMessage] = useState("")

    return (
        <div className="text-center mt-5">
            <h1>Hello Info!</h1>


            <p>{store.saludo}</p>

            <input type="text" onChange={(e)=>{setMessage(e.target.value)}} />

            <button className="btn btn-success"
                onClick={() => dispatch({
                    type: "change_saludo",
                    payload: {message: message}
                })}
            >cambiar saludo</button>




            <div><Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link></div>


        </div>
    );
}; 