import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countris = () => {
    const [countris, setCountris] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountris(data))
    },[])
    return (
        <div>
            <h1>Countries : {countris.length} </h1>
            <div>
                {
                    countris.map(country=><Country></Country>)
                }
            </div>
        </div>
    );
};

export default Countris;