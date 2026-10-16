// TODO T11: importe o useState de "react"
import Header from "./components/Header"
import Rodape from "./components/Rodape"
import CardMaterial from "./components/CardMaterial"
// TODO T7: importe a lista { materiais } de "./data/materiais"
import "./App.css";

// TODO T7: recorte esta lista daqui e cole em src/data/materiais.js
const materiais = [
  { id: 1, nome: "Papel", lixeira: "Azul", precoKg: 0.5, perigoso: false, dica: "Dobre as caixas e não deixe o papel molhar." },
  { id: 2, nome: "Plástico", lixeira: "Vermelha", precoKg: 1.2, perigoso: false, dica: "Lave as embalagens e amasse as garrafas." },
  { id: 3, nome: "Vidro", lixeira: "Verde", precoKg: 0.15, perigoso: false, dica: "Embrulhe vidro quebrado em jornal antes de descartar." },
  { id: 4, nome: "Alumínio", lixeira: "Amarela", precoKg: 5.0, perigoso: false, dica: "Amasse as latinhas para ocupar menos espaço." },
  { id: 5, nome: "Pilhas e baterias", lixeira: "Laranja", precoKg: 0, perigoso: true, dica: "Nunca jogue no lixo comum: leve a um ponto de coleta." },
];

function App() {
  const cidade = "Salto/SP"

  // TODO T11: crie os estados totalKg e totalValor (os dois começam em 0)
  // TODO T11: crie a função registrarColeta(kg, precoKg) que soma nos dois totais
  // TODO T12 (desafio): crie a função limparColeta que volta os dois totais para 0

  return (
    <main className="app">
      <Header/>
      <p className="subtitulo"> Coleta seletiva em {cidade}</p>
      <p>Projeto rodando! Agora siga o guia.</p>

      {/* TODO T6: <p className="contador"> com o total de materiais (materiais.length) */}

      <section className="lista">
        {materiais.map((material) => (
          <CardMaterial 
          key={material.id}
          nome={material.nome}
          lixeira={material.lixeira}
          precoKg={material.precoKg}
          perigoso={material.perigoso}
          />
        ))}
      </section>

      <Rodape/>
    </main>
  );
}

export default App;
