import React from 'react';
import './Header.scss';
import {useState} from 'react';
import {planetNames} from './planetNames';
import {Link} from 'react-router-dom';
import hamburger from './icon-hamburger.svg';
import arrow from './icon-chevron.svg';

const Header = () => {

    const [hamburg, setHamburger] = useState(false);

    return (
        <header>
            <h1>The Planets</h1>
            <img src={hamburger} 
            alt='hamburger-menu' 
            onClick={() => setHamburger(!hamburg)}
            className={hamburg ? 'hamburg active' : 'hamburg'} />
            <ul className={hamburg ? 'menu active' : 'menu'}>
                {planetNames.map((item, index) => {
                    return (
                        <li key={index}
                        className={item.name + '-li'}>
                            <Link to={item.name === 'mercury' ? '/' :'/' + item.name} 
                            className={item.name}
                            onClick={() => setHamburger(false)}>
                                {item.name}
                            </Link>
                            <img src={arrow} alt='' className='arrow'></img>
                        </li>
                    )
                })}
            </ul>
        </header>
    );
}
 
export default Header;