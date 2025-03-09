import BookInterface from './booksType';
interface ResponceInterface {
  docs: Array<BookInterface>;
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: boolean | null;
  start: number;
  q: string;
  documentation_url: string;
}
export default ResponceInterface;
