import React from 'react';

const Expart = ({ expart }) => {
    const { img, name, expertize } = expart;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
            <div className="border border-1 m-3">
                <img className="img-fluid" src={img} alt=".." />
                <h4>{name}</h4>
                <h5 className="text-warning">{expertize}</h5>
            </div>
        </div>
    );
};

export default Expart;