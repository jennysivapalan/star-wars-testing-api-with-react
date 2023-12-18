const Error: React.FC = ({ status }) => {
  const errorMessage =
    status === 418
      ? "418 I'm a tea pot 🫖, silly"
      : "Oops... something went wrong, try again 🤕";
  return (
    <>
      <h2>{errorMessage}</h2>
    </>
  );
};

export default Error;
