import React from 'react';
import '../App.css';

const Header = () => {

       

        return (
        <nav>
           
            <div className="header">
                <h1>Hiking Here we Go!</h1>
                <p>We are here to help you enjoy nature near you.</p>
                <ul className='difficulties'>
                    <p className='easy'>Green = Easy</p>
                    <p className='intermediate'>Blue = Intermediate</p>
                    <p className='hard'>Black = Difficult</p>
                    
                </ul>
               
                
            </div>
        
        </nav>
        );
    }

export default Header;
