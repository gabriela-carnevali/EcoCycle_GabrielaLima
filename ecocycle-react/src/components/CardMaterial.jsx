import { useState } from "react"

const KG_MAXIMO = 20

function CardMaterial({ nome, lixeira, precoKg, perigoso, dica, onRegistrar}) {
  const precoFormatado = precoKg.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  const [kg, setKg] = useState(1)

  const [mostrarDica, setMostrarDica] = useState(false);

  function diminuir() {
    if (kg > 1) {
      setKg(kg - 1)
    }
  }

  function aumentar() {
    if (kg < KG_MAXIMO) {
      setKg(kg + 1)
    }
  }


  function registrar() {
    onRegistrar(kg, precoKg)
    setKg(1)
  }

  return (
    <article className="card">
      <span className="lixeira">Lixeira {lixeira}</span>
      <h2>
        {perigoso ? "⚠" : ""}
        {nome}
      </h2>
      <p className="preco">{precoFormatado} por kg</p>
      {mostrarDica && <p className="dica">{dica}</p>}
      <button type="button" className="btn-secundario" onClick={() => setMostrarDica(!mostrarDica)}>
        {mostrarDica ? "Esconder dica" : "Ver dica"}
      </button>
      <div className="quantidade">
        <button type="button" onClick={diminuir}>
          -
        </button>
        <span>{kg} kg</span>
        <button type="button" onClick={aumentar}>
          +
        </button>
      </div>
      
      <button type="button" className="btn-principal" onClick={registrar}>
        Registrar coleta
      </button>
    </article>
  );
}

export default CardMaterial;
