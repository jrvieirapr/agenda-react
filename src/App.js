import React from "react";
import Navbar from "./components/navbar/Navbar";
import Tipo from "./components/tipo/Tipo";

function App() {
  return (
    <div className="container">
      <header>
        {/* Menus */}
        <Navbar />
      </header>
      <main>
        {/* Conteudo principal */}
        <Tipo />
      </main>
      <footer>{/* Rodape */}</footer>
    </div>
  );
}

export default App;
