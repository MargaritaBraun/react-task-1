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
