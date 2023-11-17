import { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import "./style.css";
import Repository from "../../components/Repository";
import CreateRepo from "../../components/CreateRepo";
import axios from "axios";

export const userId = "6532ec44d633ce07376c9368";

export default function Homepage() {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);

  function handleSearch(event) {
    event.preventDefault();
    console.log(search);
  }

  useEffect(() => {
    axios(`http://localhost:3333/users/${userId}/repositories`).then(
      (response) => setRepos(response.data)
    );
  }, []);
  
  return (
    <div id="main">
      <Header />
      <form onSubmit={handleSearch} className="search">
        <label htmlFor="search">All repos:</label>
        <div>
          <input
            type="search"
            name="query"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Procurar</button>
        </div>
      </form>

      <div className="repositories">
        <CreateRepo />
        <ul className="list">
          {repos.map((repo) => {
            return <Repository key={repo.id} id={repo.id} name={repo.name} url={repo.url} />;
          })}
        </ul>
      </div>
    </div>
  );
}
