import React from "react";
import { useState, useEffect } from "react";
import api from "../conn/Api";
function Tipo() {
  const [descricao, setDescricao] = useState("");
  const [id, setId] = useState(0);
  const [dados, setDados] = useState([]);

  const criar = (e) => {
    e.preventDefault();
    const index = id + 1;
    const item = { index, descricao };
    setDados([...dados, item]);
    setId(index);
    setDescricao("");
  };

  useEffect(() => {
    pesquisarTudo();
  }, []);

  const pesquisarTudo = async () => {
    try {
      const response = await api.get("/situacoes");
      if (response.data) {
        setDados(response.data)
      }
    } catch (error) {
      console.log("Error ao pesquisar tudo: ", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Formulario</h1>
        <form className="" action="">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="descricao"
              placeholder="ex: Reunião"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <label htmlFor="descricao">Digite o tipo:</label>
          </div>
          <button onClick={criar} className="btn btn-success">
            Salvar
          </button>
        </form>
      </div>
      <div>
        <h1>Tabela</h1>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Criado em:</th>
                <th>Atualizado em:</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.nome}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Tipo;
