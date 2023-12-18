import darthLogo from "../../assets/darth.svg";
import Error from "../error/error";

interface MainProps {
  status: number;
  name: string;
}

const MainLayout: React.FC<MainProps> = ({ status, name }) => {
  const errorMsg =
    status !== 200 && status != 0 ? <Error status={status} /> : <></>;
  return (
    <>
      <div>
        <a href="https://www.starwars.com/databank/darth-vader" target="_blank">
          <img src={darthLogo} className="logo react" alt="Darth logo" />
        </a>
      </div>
      <h1>Testing API calls in React with the Star Wars API </h1>
      <div className="card"></div>
      <p>{name}</p>
      {errorMsg}
    </>
  );
};

export default MainLayout;
