import { useState } from "react";
import "./styles.css";
import axios from "axios";

export const userId = "6532ec44d633ce07376c9368";

const apiUrl = `http://localhost:3333/users/${userId}/repositories`;

export default function CreateRepo() {
  const [newRepo, setNewRepo] = useState("");

  function extractRepoName(githubUrl) {
      const regex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/(?:[a-zA-Z0-9-]+\/)?([a-zA-Z0-9_.-]+)(?:\.git)?$/;
      const match = githubUrl.match(regex);
  
      const repositoryName = match[1];
      return repositoryName
  }
  
  async function handleCreateNewRepo() {
    const formatName = await extractRepoName(newRepo);

    const postData = {
      name: formatName,
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
        required
        id="new-repo"
        placeholder="type a link here..."
        onChange={(e) => setNewRepo(e.target.value)}
      />
      <button type="submit"> Adicionar </button>
    </form>
  );
}
