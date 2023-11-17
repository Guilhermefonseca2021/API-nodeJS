import "./styles.css";
import axios from "axios";

export const userId = "6532ec44d633ce07376c9368";

const apiUrl = `http://localhost:3333/users/${userId}/repositories`;

export default function Repository({ name, url }) {
  function handleDeleteRepo() {
    const url = (`${apiUrl}/${name}`);
    axios.delete(url);
    console.log(url)
  }

  return (
    <li className="item">
      <div className="info">
        <div className="owner">{name}</div>
        <div className="name">{url}</div>
      </div>
      <button onClick={handleDeleteRepo}>Apagar</button>
    </li>
  );
}
