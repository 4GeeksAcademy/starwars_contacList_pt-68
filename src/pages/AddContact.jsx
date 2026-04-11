import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState } from "react";

export const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

const formChange =(e)=>{
    setData({...data,[e.target.name]: e.target.value})
}

const FormSubmit =(e)=>{
e.preventDefault()

// fetch POST  https://playground.4geeks.com/contact/agendas/astrid/contacts
       // dispatch({
       //     type: "add_contact"
       // })
}

    return (
        <div className="text-center mt-5">
            <h1>Add a new Contact</h1>


            <form className="row g-3" onSubmit={FormSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"  value={data.email} onChange={formChange} name="email"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" value={data.phone} onChange={formChange} name="phone"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={data.address} onChange={formChange} name="address"/>
                </div>
                <div className="col-12">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" value={data.name} onChange={formChange} name="name" />
                </div>



                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form >

        </div >
    );
}; 