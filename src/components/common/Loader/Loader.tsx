const Loader = (): JSX.Element => {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
    </div>
  );
};

export default Loader;
