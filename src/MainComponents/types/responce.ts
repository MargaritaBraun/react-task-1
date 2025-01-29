import BookInterface from "./booksType";
interface ResponceInterface {
    docs: Array<BookInterface>;
    numFound: number;
    numFoundExact: boolean;
    num_found: number;
    offset: boolean;
    start: number;
    q: string;
}
export default ResponceInterface;