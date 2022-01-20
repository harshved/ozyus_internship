import React, { useEffect, useState } from 'react';

export default function Temp() {
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=857f01ff42a05cbce99d5004419949c4`;
            const res = await fetch(url);
            const resJson = await res.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
  return (
      <>
        <input type="search" value={search} onChange={(event) => {
            setSearch(event.target.value)
        }} id="" />
        {!city  ? (<p>No data found</p>) : (
            <div className="info">
                <h2>{search}</h2>
                <h1>{city.temp} C</h1>
                <h3>Min : {city.temp_min} C | Max : {city.temp_max} C</h3>    
            </div>
        )}
      </>
  );
}
