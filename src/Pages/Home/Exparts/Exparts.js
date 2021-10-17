import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg'
import Expart from '../Expart/Expart';

const exparts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: mechanic5,
        name: 'Lio Tamer',
        expertize: '-Alrounder Expert-'
    },
]

const Exparts = () => {

    return (
        <div className="container" id="exparts-sec">
            <h1 className="text-primary mt-5">Our Experts</h1>
            <div className="row">
                {
                    exparts.map((expart, indx) => <Expart
                        key={indx}
                        expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;