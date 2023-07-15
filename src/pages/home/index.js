import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Meu Projeto - Frontend</h1>
      </header>
      <section className="intro">
        <h2>Seja bem-vindo(a) ao Meu frontend</h2>
        <p>
          Essa é a página inicial do projeto do mini projeto de visualização de
          transferências bancarias, ao prosseguir, você poderá acessar a tela
          principal do projeto, onde 3 filtros, um de data limitante inferior e
          outro superior, além disso um filtro de número de conta bancaria, além
          disso, um botão pesquisar, que ao apertado trará resultados dessa
          consulta!
        </p>
      </section>
      <section className="image-section">
        <p>
          <a href="https://www.supera.com.br/">
            <img
              style={{ width: "40%", borderRadius: "15px" }}
              src="https://media.licdn.com/dms/image/C561BAQGvFtripFd2gw/company-background_10000/0/1570804565166?e=1690038000&v=beta&t=2h1b7caH626w1g0588INyzkULz6jDhrgFazpl5sKfzo"
              alt="supera"
            />
          </a>
        </p>
      </section>
      <div>
        <button onClick={() => navigate("/main")}> Prosseguir </button>
      </div>
      <footer>
        <p>15/07/2023</p>
        <p>Denis Zickuhr - Teste Técnico Supera</p>
      </footer>
    </>
  );
};
