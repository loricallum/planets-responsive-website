import React from 'react';
import {useState} from 'react';
import {planetInfo} from '../../PlanetInfo';
import source from '../../icon-source.svg';
import planetimg from './Images/planet-earth.svg';
import internal from './Images/planet-earth-internal.svg';
import surface from './Images/geology-earth.png';


const Earth = () => {

    const planet = planetInfo[2];
    let [button, setButton] = useState(1);

    return (
        <main>
            <section className='top-section'>
                <div className={planet.name + '-buttons mobile'}>
                    <button onClick={() => setButton(1)}
                    className={button === 1 ? 'button active': 'button'}
                    id={1}>
                        Overview
                    </button>
                    <button onClick={() => setButton(2)}
                    className={button === 2 ? 'button active': 'button'}>
                        Structure
                    </button>
                    <button onClick={() => setButton(3)}
                    className={button === 3 ? 'button active': 'button'}>
                        Surface
                    </button>
                </div>
                <div className={planet.name + '-container'}>
                    <img src={button === 2 ? internal : planetimg} 
                    alt=''
                    className='planet-img'></img>
                    <img src={surface} 
                    alt=''
                    className={button === 3 ? 'surface active' : 'surface'} />
                </div>
                <div className='info-container'>
                    <div className='planet-info'>
                        <h2>{planet.name}</h2>
                        <p className='desc'>
                            {button === 1 ?planet.descover : button === 2 ? planet.descstruc : planet.descsurf}
                        </p>
                        <div className='link'>
                            <p>Source : &nbsp;</p>
                            <a href={planet.wiki}>Wikipedia</a>
                            <img src={source} alt=''></img>
                        </div>
                    </div>
                    <div className={planet.name + '-buttons'}>
                        <button onClick={() => setButton(1)}
                        className={button === 1 ? 'button active': 'button'}>
                            <span>01</span> Overview
                        </button>
                        <button onClick={() => setButton(2)}
                        className={button === 2 ? 'button active': 'button'}>
                            <span>02</span> Internal Structure
                        </button>
                        <button onClick={() => setButton(3)}
                        className={button === 3 ? 'button active': 'button'}>
                            <span>03</span> Surface
                        </button>
                    </div>
                </div>
            </section>
            <section className='planet-stats'>
                <ul>
                    <li className='rotate'>
                        <h3>Rotation Time</h3>
                        <p>{planet.rotate}</p>
                    </li>
                    <li>
                        <h3>Revolution Time</h3>
                        <p>{planet.revolution}</p>
                    </li>
                    <li>
                        <h3>Radius</h3>
                        <p>{planet.radius}</p>
                    </li>
                    <li className='temp'>
                        <h3>Average Temp.</h3>
                        <p>{planet.temp}</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}
 
export default Earth;