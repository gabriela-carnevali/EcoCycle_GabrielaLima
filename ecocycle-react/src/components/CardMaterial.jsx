// TODO T9: importe o useState de "react"
// TODO T9: crie a constante KG_MAXIMO = 20

// |   T10: dica   |   T11: onRegistrar
function CardMaterial({ nome, lixeira, precoKg, perigoso }) {
  const precoFormatado = precoKg.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  // TODO T8: crie let kg = 1 e as funções diminuir() e aumentar() que mudam kg e fazem console.log
  // TODO T9: troque o let pelo estado const [kg, setKg] = useState(1) e respeite os limites (1 e KG_MAXIMO)
  // TODO T10: crie o estado mostrarDica (começa em false)
  // TODO T11: crie a função registrar(): chama onRegistrar(kg, precoKg) e volta kg para 1

  return (
    <article className="card">
      <span className="lixeira">Lixeira {lixeira}</span>
      <h2>
        {perigoso ? "⚠" : ""}
        {nome}
      </h2>
      <p className="preco">{precoFormatado} por kg</p>
      {/* TODO T10: {mostrarDica && <p className="dica">{dica}</p>} e o botão Ver dica / Esconder dica */}
      {/* TODO T8: <div className="quantidade"> com botão −, <span>{kg} kg</span> e botão + */}
      {/* TODO T11: botão "Registrar coleta" com className="btn-principal" e onClick={registrar} */}
    </article>
  );
}

export default CardMaterial;
