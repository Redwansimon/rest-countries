
import { useState } from 'react'
import './Countries.css'
import { useEffect } from 'react';
import { Count } from '../country/Count';




export const Countries = () => {
    const [countries, setcountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setcountries(data))
    }, [])
    const [visitedcount, setvisitedcount] = useState([]);
    const handelvisitedcount = count => {
        const newvisitedcountry = [...visitedcount , count];
        setvisitedcount(newvisitedcountry);
        console.log(newvisitedcountry);
    }
    return (
    
        <div>
            <div>
                <h2>visited countries list {visitedcount.length}</h2>
                {
                  visitedcount.map(c=> (
                    <li key ={c.cca3} >{c.name.common}</li>
                  ))  
                }
                {/* <Count props={visitedcount} ></Count> */}

            </div>
            <h3>All countries count {countries.length} </h3>
            <div className="country-container">
                {
                    countries.map((country) => <Count
                        key={country.cca3}
                        props={country}
                        handelvisitedcount ={handelvisitedcount}
                        >
                    </Count>)
                }
            </div>


        </div>
    )
}
