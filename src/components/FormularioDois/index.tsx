import React, { useState } from 'react';
import './styles.css';
/**
    *Meu primeiro Formulario
    *criado em 05/02
    *referente a aprendizagem
    *
    */  

export function FormularioDois() {
  //ESTADO PARA ARMAZENAR O NOME DIGITADO NO INPUT
  const [nome, setNome] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [enviarDados, setEnviarDados] = useState<{
    nome: string;
    email: string;
  } | null>(null);

  function enviarFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    setEnviarDados({
      nome: nome,
      email: email,
    });

    setNome('');

    setEmail('');
  }

  return (
    <div className='container'>
      {/*titulo do formulario*/}
      <h2>Cadastro simples</h2>

      {/*Formulario onde recebe também a fumncão enviarFormulario*/}
      <form onSubmit={enviarFormulario}>
        <input
          type='text' //TIPO DO INPUT
          placeholder='nome' // TEXTO EXIBIDO QUANDO ESTAR VAZIO
          value={nome} //VALOR CONTROLADO
          onChange={evento => setNome(evento.target.value)} //ATUALIZA O ESTADO
        />

        <input
          type='email' //TIPO DO INPUT email
          placeholder='E-mail' //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={email} //VALOR CONTROLADO
          onChange={evento => setEmail(evento.target.value)} //ATUALIZA O ESTADO
        />

        <button type='submit'>Enviar</button>
      </form>

      {/* Renderização condicional:
               só aparece se submittedData NÃO for null

               nota que uso o enviarDados para aparecer essa lista
              o enviarDados é um objeto que salva os valores dos dados dos inputs
              */}
      {enviarDados && (
        <div className='result'>
          <h3>Dados enviados:</h3>
          {/*Exibe o nome enviado*/}_
          <p>
            <strong>Nome:</strong> {enviarDados.nome}
          </p>
          {/*Exibe o email enviado*/}
          <p>
            <strong>Email:</strong> {enviarDados.email}
          </p>
        </div>
      )}
    </div>
  );
}
