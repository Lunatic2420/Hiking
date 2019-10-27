import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const HikeList = (props) => {
    
    return (
        <div className="hikelist">

            {props.trails.map((trail, index)=> (
                <ul key={trail.id} className='card'>
                    <h3 className='hikeName'>{trail.name}</h3>
                    <Link to= {`/hikedetails/${trail.id}`}  params = {{id: trail.id}}><img src={trail.imgSmallMed} alt="" className='hlImage'/> </Link>
                    <p className= 'trailName'>{trail.summary}</p>
                    <p className='status'>Difficulty: {trail.difficulty}</p>

                </ul>
            ))}

        </div>
    );
}
export default HikeList;
