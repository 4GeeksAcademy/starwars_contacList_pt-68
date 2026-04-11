import { Link } from "react-router-dom";

export const CardPeople = ({people}) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">

                
                <div className="card" style={{width: "18rem;"}}>
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{people.name}</h5>
                            
                            <Link to={`/character/${people.uid}`} className="btn btn-primary">Go somewhere</Link>
                            <button>fav</button>
                        </div>
                </div>

            </div>
        </nav>
    );
};