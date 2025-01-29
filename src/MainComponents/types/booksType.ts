interface BookInterface {
  author_key: string[];
  author_name: string[];
  ebook_access: string;
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  first_publish_year: number;
  has_fulltext: boolean;
  key: string;
  language: string[];
  last_modified_i: number;
  lcc: string[];
  lccn: string[];
  number_of_pages_median: number;
  oclc: string[];
  public_scan_b: boolean;
  publish_date: number[];
  publish_place: string[];
  publish_year: number[];
  publisher: string[];
  seed: string[];
  title: string;
  title_suggest: string;
  title_sort: string;
  type: string;
  time: string[];
  person: string[];
  publisher_facet: string[];
  person_key: string[];
  time_facet: string[];
  person_facet: string[];
  _version_: number;
  lcc_sort: string;
  author_facet: string[];
  time_key: string[];
}

export default BookInterface;

// {
//     "author_key": [
//         "OL195233A"
//     ],
//     "author_name": [
//         "Rafael Santos Torroella"
//     ],
//     "ebook_access": "no_ebook",
//     "ebook_count_i": 0,
//     "edition_count": 1,
//     "edition_key": [
//         "OL6139969M"
//     ],
//     "first_publish_year": 1952,
//     "has_fulltext": false,
//     "key": "/works/OL1709751W",
//     "language": [
//         "spa"
//     ],
//     "last_modified_i": 1600478119,
//     "lcc": [
//         "ND-0813.00000000.D3 S35"
//     ],
//     "lccn": [
//         "53019097"
//     ],
//     "number_of_pages_median": 62,
//     "oclc": [
//         "3009718"
//     ],
//     "public_scan_b": false,
//     "publish_date": [
//         "1952"
//     ],
//     "publish_place": [
//         "Madrid"
//     ],
//     "publish_year": [
//         1952
//     ],
//     "publisher": [
//         "A. Aguado"
//     ],
//     "seed": [
//         "/books/OL6139969M",
//         "/works/OL1709751W",
//         "/authors/OL195233A",
//         "/subjects/person:salvador_dalí",
//         "/subjects/time:1904-"
//     ],
//     "title": "Salvador Dalí",
//     "title_suggest": "Salvador Dalí",
//     "title_sort": "Salvador Dalí",
//     "type": "work",
//     "time": [
//         "1904-"
//     ],
//     "person": [
//         "Salvador Dalí"
//     ],
//     "publisher_facet": [
//         "A. Aguado"
//     ],
//     "person_key": [
//         "salvador_dalí"
//     ],
//     "time_facet": [
//         "1904-"
//     ],
//     "person_facet": [
//         "Salvador Dalí"
//     ],
//     "_version_": 1795862449430200300,
//     "lcc_sort": "ND-0813.00000000.D3 S35",
//     "author_facet": [
//         "OL195233A Rafael Santos Torroella"
//     ],
//     "time_key": [
//         "1904-"
//     ]
// }
