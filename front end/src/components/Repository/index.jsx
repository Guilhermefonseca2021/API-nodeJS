import './styles.css'

export default function Repository() {
  function handleDeleteRepo() {
    console.log("repo deletado");
  }

  return (
    <>
      <ul className="list">
        <li className="item">
          <div className="info">
            <div className="owner">facebook</div>
            <div className="name">react</div>
          </div>
          <button onClick={handleDeleteRepo}>Apagar</button>
        </li>
      </ul>
    </>
  );
}
