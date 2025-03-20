import Country from '../types/country';

interface answerState {
  data: Country[];
  loader: boolean;
  error: null | string;
}

const DataFetcher = async () => {
  const answer: answerState = {
    data: [],
    loader: true,
    // error: false,
    error: null,
  };
  const urlGetAllData = 'https://restcountries.com/v3.1/all';
  try {
    const res = await fetch(urlGetAllData);
    const getData = await res.json();
    answer.data = getData;
    answer.loader = false;
    answer.error = null;
  } catch (error) {
    console.log('error', error);
    answer.error = 'Error for getResponce';
  }
  return answer;
};

export default DataFetcher;
