import './App.css';
import { useEffect, useState } from 'react';
// import Card from './components/card';
import Country from './types/country';
import Loader from './components/loading';
import ResultContainer from './components/resultContainer';

function App() {
  // const [data, setDate] = useState<Country[] | null>(null);
  const [data, setDate] = useState<Country[]>([]);
  useEffect(() => {
    const fetchDATA = async () => {
      try {
        const datafetch = await fetch('https://restcountries.com/v3.1/all');
        const res = await datafetch.json();
        setDate(res);
      } catch (error) {
        console.error(error);
      }
      // ((error) => console.log(error));
    };
    fetchDATA();
    // .then((res) => res.json())
    // .then((data) => setDate(data))
    // const dataJson = await datafetch.json();
    // datafetch();
  }, []);
  return (
    <>
      <h1>Country</h1>
      <div className="container">
        {/* {data && data.map((item) => (
          <Card key={item.ccn3} {...item} />
        ))} */}
        <Loader />
        <ResultContainer {...{ data }} />
      </div>
    </>
  );
}

export default App;
