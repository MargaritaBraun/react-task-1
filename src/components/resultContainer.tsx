import Country from '../types/country';
import Card from './card';
import EmptyContainer from './emptyContainer';

const resultContainer = (props: { sortedData: Country[] }) => {
  const { sortedData } = props;
  return (
    <>
      <div className="block-table">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Region</p>
      </div>
      {sortedData.length > 0 ? (
        // item.ccn3
        sortedData.map((item) => <Card key={item.cca2} {...item} />)
      ) : (
        <EmptyContainer />
      )}
    </>
  );
};

export default resultContainer;
