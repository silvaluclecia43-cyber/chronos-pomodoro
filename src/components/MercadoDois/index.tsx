import React, { useState } from 'react';
import './styles.css';

type produto = {
  nome: string;
  preco: number;
};

export function MeuMercadoDois() {
  // Estado dos inputs
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<string>('');

  // lista de produtos (array)
  const [produtos, setProdutos] = useState<produto[]>([]);

  function adicionarProduto(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (!nome || !preco) return;

    const novoProduto: produto = {
      nome: nome,
      preco: Number(preco),
    };

    // adicionar o produto na lista
    setProdutos([...produtos, novoProduto]);

    // limpa os inputs
    setNome('');
    setPreco('');
  }

  function excluirProduto(index: number) {
    const novaLista = produtos.filter((_, i) => i !== index);
    setProdutos(novaLista);
  }

  // Cálculo do total
  const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);

  return (
    <div className='container'>
      <h2>Mercado </h2>

      <form onSubmit={adicionarProduto}>
        <input
          type='text'
          placeholder='Nome do produto'
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input
          type='number'
          placeholder='preço'
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />

        <button type='submit'>Adicionar</button>
      </form>

      <div className='lista'>
        <h3>intes no carrinho:</h3>

        {produtos.map((produtos, index) => (
          <div key={index} className='item'>
            <span>{produtos.nome}</span>
            <span>R$ {produtos.preco.toFixed(2)}</span>
            <span>
              <button onClick={() => excluirProduto(index)}>x</button>
            </span>
          </div>
        ))}

        {produtos.length > 0 && (
          <div className='total'>Total: R$ {total.toFixed(2)}</div>
        )}
      </div>
    </div>
  );
}
