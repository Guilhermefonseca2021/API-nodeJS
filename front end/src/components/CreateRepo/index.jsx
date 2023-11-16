import "./styles.css";

export default function CreateRepo() {
  return (
    <div className="new">
      <label htmlFor="">Novo Repo: </label>
      <input type="url" name="new-repo" id="new-repo" />
      <button> Adicionar </button>
    </div>
  );
}
