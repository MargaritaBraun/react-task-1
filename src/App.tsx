import './App.css';
import {
  ChangeEventHandler,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import Country from './types/country';
import Loader from './components/loading';
import ResultContainer from './components/resultContainer';
import DataFetcher from './utils/Datafetcher';
import ErrorContainer from './components/errorContainer';
import stylesFilter from './styles/filters.module.css';
import regionValues from './types/region';
import { RegionValuesType } from './types/region';
import quckSortByPopulation from './utils/sortByPopulation';

type Status = 'loading' | 'good' | 'error';

function App() {
  const [dataALL, setDataALL] = useState<Country[]>([]);
  const [status, setStatys] = useState<Status>('loading');
  const [region, setRegion] = useState('No select');
  const [search, setSearch] = useState('');
  const [sortByPopulation, setsortByPopulation] = useState('none');

  useEffect(() => {
    const fetchDATA = async () => {
      const result = await DataFetcher();
      if (result.error) {
        setStatys('error');
      } else {
        setDataALL(result.data);
        setStatys('good');
      }
    };
    fetchDATA();
  }, []);

  const sortedData: Country[] = useMemo(() => {
    let filteredData = [...dataALL];

    if (region !== 'No select') {
      const newdata = filteredData.filter((item) => item.region === region);
      filteredData = newdata;
    }

    if (search !== '' || !search) {
      const reger = new RegExp(`^${search}`, 'i');
      const newData = filteredData.filter((item) =>
        reger.test(item.name.common.toLowerCase())
      );
      filteredData = newData;
    }

    if (sortByPopulation !== 'none') {
      if (sortByPopulation === 'ascending') {
        const sorted = quckSortByPopulation(
          filteredData,
          'population',
          'ascending'
        );
        filteredData = sorted;
      } else if (sortByPopulation === 'descending') {
        const sorted = quckSortByPopulation(
          filteredData,
          'population',
          'descending'
        );
        filteredData = sorted;
      }
    }
    return filteredData;
  }, [dataALL, region, search, sortByPopulation]);

  const handlerRegionFilter: ChangeEventHandler<HTMLSelectElement> =
    useCallback((event) => {
      const newValue = event.target.value as RegionValuesType;
      setRegion(() => newValue);
    }, []);

  const handlerSearchFilter: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const newValue = event.target.value;
      setSearch(newValue);
    },
    []
  );

  const handlersortByPopulationFilter: ChangeEventHandler<HTMLSelectElement> =
    useCallback((event) => {
      const newValue = event.target.value;
      setsortByPopulation(() => newValue);
    }, []);

  return (
    <>
      <h1>Country</h1>
      <div className="container">
        {status === 'loading' && <Loader />}
        {status === 'error' && <ErrorContainer message="Error is lost" />}
        {status === 'good' && (
          <>
            <div>
              <label className={stylesFilter.label}>
                <span className={stylesFilter.labelSpan}>Region</span>
                <select
                  className={stylesFilter.select}
                  onChange={handlerRegionFilter}
                  value={region}
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

              <label className={stylesFilter.label}>
                <span className={stylesFilter.labelSpan}>Population</span>
                <select
                  className={stylesFilter.select}
                  onChange={handlersortByPopulationFilter}
                  value={sortByPopulation}
                >
                  <option className={stylesFilter.option} value="none">
                    None
                  </option>
                  <option className={stylesFilter.option} value="ascending">
                    Ascending
                  </option>
                  <option className={stylesFilter.option} value="descending">
                    Descending
                  </option>
                </select>
              </label>
            </div>
            <ResultContainer {...{ sortedData }} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
