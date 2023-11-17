import "./styles.css";

export default function Repository({name, url}) {
  function handleDeleteRepo(repo) {
    console.log(repo)
  }

  return (
    <>
      <ul className="list">
        <li className="item">
          <div className="info">
            <div className="owner">{name}</div>
            <div className="name">{url}</div>
          </div>
          <button onClick={handleDeleteRepo}>Apagar</button>
        </li>
      </ul>
    </>
  );
}
