import './styles.css'

export default function Header() {
  function handleLogout() {
    console.log("logout");
  }

  return (
    <div className="navbar">
      <h1 className="logo">ManyRepo</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
