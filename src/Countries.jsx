import React, { useState } from 'react';
import Style from './countries.module.css';
import { useEffect } from 'react';
import axios from 'axios';

const Countries=()=> {

  const [country,setCountry]=useState([]);
  useEffect(()=>{
           async function getCountry(){

            try{
              let response=await axios.get('https://xcountries-backend.labs.crio.do/all');
              setCountry(()=>response.data);
            }catch(e)
            {
                console.error(e);
            }

           }
           getCountry();
  },[]);
  return (
    
    <div className={Style.container}>
       {
         
         country.map((data,index)=>{ return <div key={index} className={Style.country}><img src={data.flag} alt={data.name}/><p>{data.name}</p></div>})
       }
    </div>
  )
}

export default Countries;