import { useState } from 'react';
import './Count.css'
export const Count = ( {props , handelvisitedcount} ) => {
    const [visited , setvisited]=useState(false);
    const {name,flags,coatOfArms,population}=props;
    return (
        <div className={`count ${visited?'white':'blue'}`}>
            
            <h1>Country Name : {name?.common}</h1>
            <h3>name:{props.capital}</h3>
            <h3>Language :{props.continents} </h3>
            <div className="flags">
                <img className='flag' src={flags?.png}
                    alt="" />
                <img className='flag' src={coatOfArms?.png} alt="" />
            </div>
            <p>Population is : {population}</p>
            <button onClick={()=>handelvisitedcount(props)} >Addtovisitedlist</button>
            <br />
            <br />

            <button onClick={()=>setvisited(!visited)}>{visited?'visited':'next target'}</button>
            {visited?'i am already visite this site':'wanna go to visite'}
        </div>
    );
};