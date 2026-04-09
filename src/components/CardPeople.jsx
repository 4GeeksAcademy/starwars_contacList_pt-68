import { Link } from "react-router-dom";

export const CardPeople = ({people}) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">

                
                <div className="card" style={{width: "18rem;"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{people.name}</h5>
                            
                            <Link to={`/character/${people.uid}`} className="btn btn-primary">Go somewhere</Link>
                        </div>
                </div>

            </div>
        </nav>
    );
};