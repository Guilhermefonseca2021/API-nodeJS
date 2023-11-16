import { useState } from "react";
import Header from "../../components/Header/Header";
import "./style.css";
import Repository from "../../components/Repository";
import CreateRepo from "../../components/CreateRepo";

export default function Homepage() {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    console.log(event.target.value);
    setSearch('')
  }

  return (
    <div id="main">
      <Header />
      <div className="search">
        <label htmlFor="query">All repos:</label>
        <div>
          <input
            type="search"
            name="query"
            id="query"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleSearch(search)}>Procurar</button>
        </div>
      </div>

      <div className="repositories">
        <Repository />
        <CreateRepo />
      </div>
    </div>
  );
}
