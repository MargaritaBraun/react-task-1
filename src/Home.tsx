import { FC } from 'react';
import homeStyles from './navigation.module.css';
import { selectUnformsData } from './redux/formSlice';
import { useSelector } from 'react-redux';
import Card from './components/cardsForm';
import FormData from "./types/formType";

const Home: FC = () => {
  const unformsData = useSelector(selectUnformsData);

  console.log('unformsData', unformsData);

  return (
    <div className={homeStyles.main}>
      <div className={homeStyles.part}>
        <h2>UnForm</h2>
        {unformsData && unformsData.length > 0 ? (
          unformsData.map((data: FormData, index: number) => (
            <Card key={index} {...data} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className={homeStyles.part}>
        <h2>HookForm</h2>
      </div>
    </div>
  );
};

export default Home;

// const Home: FC = () =>{
//   const unformsData = useSelector(selectUnformsData);
//   return (
//     <div className={homeStyles.main}>
//       <div className={homeStyles.part}>
//         <h2>UnForm</h2>
//         {unformsData.map((data: FormData, index: number) => (
//           <Card key={index} data={data} />
//         ))}
//       </div>
//       <div className={homeStyles.part}>
//         <h2>HookForm</h2>
//       </div>
//     </div>
//   );
// }

