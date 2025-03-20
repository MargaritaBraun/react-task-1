import Country from '../types/country';
import Card from './card';
import EmptyContainer from './emptyContainer';

const resultContainer = (props: { data: Country[] }) => {
  const { data } = props;
  return (
    <>
      {data.length > 0 ? (
        // item.ccn3
        data.map((item) => <Card key={item.cca2} {...item} />)
      ) : (
        <EmptyContainer />
      )}
    </>
  );
};

export default resultContainer;
