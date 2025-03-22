interface Country {
  name: NameObj;
  tld: string[];
  postalCode: {
    format: string;
    regex: string;
  };
  fifa: string;
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;

  status: string;
  unMember: boolean;
  currencies: currenciesObj[];
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: languagesObj[];
  translations: translationsObj;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonym: {
    [key: string]: {
      [key: string]: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: 'right' | 'left' | string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };

  coatOfArms?: {
    png: string;
    svg: string;
  };

  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  borders?: string[];
  subregion?: string;
}

interface options {
  official: string;
  common: string;
}

interface NativeNameObj {
  [key: string]: options;
}

interface NameObj {
  common: string;
  official: string;
  nativeName?: NativeNameObj;
}

interface currenciesObj {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface languagesObj {
  [key: string]: string;
}

interface translationsObj {
  [key: string]: options;
}

export default Country;
