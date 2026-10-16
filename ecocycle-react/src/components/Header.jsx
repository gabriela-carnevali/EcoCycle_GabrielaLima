// TODO T12 (desafio): receba também onLimpar
function Header({totalKg, totalValor}) {
  const valorFormatado = totalValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <header className="header">
      <h1>♻ EcoCycle</h1>
      <p>Coleta seletiva que vale a pena</p>
      <p>Coletado: {totalKg} kg · Valor: {valorFormatado}</p>
      {/* TODO T12 (desafio): botão "Zerar coleta" com className="btn-secundario" e onClick={onLimpar} */}
    </header>
  );
}

export default Header;
