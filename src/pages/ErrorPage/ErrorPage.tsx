import ErrorMessage from "@components/common/ErrorMessage";

const ErrorPage = (): JSX.Element => {
  return (
    <section className="flex grow">
      <ErrorMessage className="text-xl font-semibold md:text-2xl">
        Sorry, page not found!
      </ErrorMessage>
    </section>
  );
};

export default ErrorPage;
