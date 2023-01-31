import { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { setGithubUser } = useContext(GithubContext);
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
      <button onClick={() => setGithubUser("dion")}>Change user to Dion</button>
    </main>
  );
};

export default Dashboard;
