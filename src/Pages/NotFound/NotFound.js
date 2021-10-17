import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className="w-50" src={notfound} alt="404-not-found" />
            <br />
            <Link to="/home"><button className="btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default NotFound;