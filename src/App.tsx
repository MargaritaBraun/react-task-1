import './App.css';
import { ChangeEventHandler, useEffect, useState } from 'react';
import Country from './types/country';
import Loader from './components/loading';
import ResultContainer from './components/resultContainer';
import DataFetcher from './utils/Datafetcher';
import ErrorContainer from './components/errorContainer';
import stylesFilter from './styles/filters.module.css';
import regionValues from './types/region';
import { RegionValuesType } from './types/region';

type Status = 'loading' | 'good' | 'error';
function App() {
  const [data, setDate] = useState<Country[]>([]);
  const [dataALL, setDataALL] = useState<Country[]>([]);
  const [status, setStatys] = useState<Status>('loading');
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchDATA = async () => {
      const result = await DataFetcher();
      if (result.error) {
        setStatys('error');
      } else {
        setDate(result.data);
        setDataALL(result.data);
        setStatys('good');
      }
    };
    fetchDATA();
  }, []);

  useEffect(() => {
    const filteredData = [...dataALL];
    if (region === 'No select' || region === '') {
      // setDate(() => filteredData);
      return;
    } else {
      const newdata = filteredData.filter((item) => item.region === region);
      setDate(() => newdata);
    }
    // setDate(filteredData);
  }, [region, data]);

  // const filterRegion = (valueRegion: RegionValuesType) => {
  //   const copyData = [...data];
  //   copyData.filter((item) => item.region === valueRegion);
  //   return copyData;
  // }

  const handlerRegionFilter: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const newValue: RegionValuesType = event.target.value;
    console.log('newValue', newValue);
    // setRegion(newValue);
    setRegion(() => newValue);
    console.log('region', region);
    // const newData = filterRegion(newValue);
    // setDate(newData);
  };

  const handlerSearchFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    console.log('search', newValue);
    setSearch(newValue);
  };

  return (
    <>
      <h1>Country</h1>
      <div className="container">
        {status === 'loading' && <Loader />}
        {status === 'error' && <ErrorContainer message="Error is lost" />}
        {status === 'good' && (
          <>
            {/* <FilterContainer /> */}
            <div>
              <label className={stylesFilter.label}>
                <span className={stylesFilter.labelSpan}>Region</span>
                <select
                  className={stylesFilter.select}
                  onChange={handlerRegionFilter}
                >
                  {regionValues.map((item) => (
                    <option
                      key={item}
                      className={stylesFilter.option}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className={stylesFilter.label}>
                <span className={stylesFilter.labelSpan}>Search</span>
                <input
                  type="text"
                  onChange={handlerSearchFilter}
                  value={search}
                  className={stylesFilter.inputText}
                ></input>
              </label>
            </div>
            <ResultContainer {...{ data }} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
