import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import baseUrl from "./api.js";
import CauntryItems from "./components/flag-catalog/flag-card.js"

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const fetchCountries = async () => {
    const { data } = await baseUrl.get("all");
    const countries = data;
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
//   ?fields=name,flags,altSpellings,cca2,cca3,idd
  return (
    <div className="App​">
      <div className="container mx-auto px-4 py-3">
        <h1 className="text-3xl font-bold text-center py-4">
          Country Catalog
        </h1>
        <div className="relative my-4 w-1/2 mx-auto">
            <input
                className='pl-4 mr-4 py-3 border w-full px-2'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                type="text"
                placeholder='Search...'
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-white m-2 pl-2"> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
            </div>
        </div>
        <div className="grid gap-4 grid-cols-4">
          {countries.map((country,i) => <CauntryItems key={i} country={country}/>)}
        </div>
      </div>
        
    </div>
  );
}

export default App;
