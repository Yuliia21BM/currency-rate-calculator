import { CirclesWithBar } from 'react-loader-spinner';

export const Spinner = ({ color }) => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
};
