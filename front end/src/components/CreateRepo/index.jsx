import { useState } from "react";
import "./styles.css";
import axios from "axios";
import { userId } from "../../pages/Homepage";

export default function CreateRepo() {
  const [newRepo, setNewRepo] = useState("");

  async function handleCreateNewRepo() {
    const apiUrl = `http://localhost:3333/users/${userId}/repositories`;

    function repositoryName(apiUrl) {
      const regex =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)/;
      // mall our string and return some part
      const match = apiUrl.match(regex);

      console.log("match", match);
      
      if (match[2]) {
        const values = match[2].split("/");

        console.log("values", values);
        return `${values[1]}/${values[2]}`;
      }
    }

    const postData = {
      name: newRepo,
      url: newRepo,
    };

    const response = await axios.post(apiUrl, postData);

    console.log("Dados da resposta:", response.data);
  }

  return (
    <form onSubmit={handleCreateNewRepo} className="new">
      <label htmlFor="new-repo">Novo Repo: </label>
      <input
        type="url"
        name="new-repo"
        id="new-repo"
        placeholder="type a link here..."
        onChange={(e) => setNewRepo(e.target.value)}
      />
      <button type="submit"> Adicionar </button>
    </form>
  );
}
