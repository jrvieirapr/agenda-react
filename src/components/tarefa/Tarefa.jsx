import "./Tarefa.css";
import React from "react";
import tarefas from "../../dados/TarefasDB";

const Tarefa = () => {
  return (
    <div>
      <h1>Tarefas</h1>
      <div>
        <h2>Formulario</h2>
      </div>
      <div>
        <h2>Tabela</h2>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Descricao</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {tarefas.map((item, index) => (
                <tr key={index}>
                  <td>{item.index}</td>
                  <td>{item.descricao}</td>
                  <td>{item.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tarefa;
