import Image from 'next/image';
import profilePic from '../../../public/cocktail-svgrepo-com.svg';
export default function Loading() {
  return (
    <div className="load-container">
      <Image
        src={profilePic}
        alt="cocktail Svg loading data"
        className="svg-loading"
      />
    </div>
  );
}
