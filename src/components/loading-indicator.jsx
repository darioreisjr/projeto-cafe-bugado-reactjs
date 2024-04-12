const LoadingIndicator = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-opacity-20 flex justify-center items-center z-10">
      <div className="spin-slow rounded-full h-52 w-52 border-b-4 border-amber-800"></div>
    </div>
  );
};

export default LoadingIndicator;
