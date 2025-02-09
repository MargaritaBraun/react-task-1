import cocktailSvg from './assets/cocktail-svgrepo-com.svg';
import RenderBooks from './MainComponents/resultMain';
import useFetch from './useMyFetch';

const ShowRezult = ({ valueOfSearch }: { valueOfSearch: string }) => {
    const { data, loading, error } = useFetch({ valueOfSearch });

    if (loading) {
        return (
            <div className="load-container">
                <img
                    src={cocktailSvg}
                    alt="cocktail Svg loading data"
                    className="svg-loading"
                />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <RenderBooks results={data || []} />;
}

export default ShowRezult;