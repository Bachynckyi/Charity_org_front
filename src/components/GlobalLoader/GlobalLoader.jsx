import { ThreeDots } from 'react-loader-spinner';
import scss from './GlobalLoader.module.scss';

const GlobalLoader = () => {
  return (
    <div className={scss.container}>
      <ThreeDots
      height="110" 
      width="110" 
      radius="9"
      color="#FC0" 
      ariaLabel="three-dots-loading"
      visible={true}
      />
    </div>
  );
};

export default GlobalLoader;