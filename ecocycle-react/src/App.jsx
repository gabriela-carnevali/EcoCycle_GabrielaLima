import { useState } from "react";
import Header from "./components/Header"
import Rodape from "./components/Rodape"
import CardMaterial from "./components/CardMaterial"
import { materiais } from "./data/materiais";
import "./App.css";


function App() {
  const cidade = "Salto/SP"

  const [totalKg, setTotalKg] = useState(0)
  const [totalValor, setTotalValor] = useState(0)

  function registrarColeta(kg, precoKg) {
    setTotalKg(totalKg + kg)
    setTotalValor(totalValor + kg * precoKg)
  }
  // TODO T12 (desafio): crie a função limparColeta que volta os dois totais para 0

  return (
    <main className="app">
      <Header totalKg={totalKg} totalValor={totalValor}/>
      <p className="subtitulo"> Coleta seletiva em {cidade}</p>
      <p className="contador">{materiais.length} materiais cadastrados</p>

      <section className="lista">
        {materiais.map((material) => (
          <CardMaterial 
          key={material.id}
          nome={material.nome}
          lixeira={material.lixeira}
          precoKg={material.precoKg}
          perigoso={material.perigoso}
          dica={material.dica}
          onRegistrar={registrarColeta}
          />
        ))}
      </section>

      <Rodape/>
    </main>
  );
}

export default App;
