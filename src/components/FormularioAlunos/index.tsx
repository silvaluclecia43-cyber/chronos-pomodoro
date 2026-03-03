import React, { useState } from 'react';
import './styles.css';
/**
 *Meu primeiro Formulario
 *criado em 05/02
 *referente a aprendizagem
 *
 */

export function FormularioAlunos() {
  //ESTADO PARA ARMAZENAR O NOME DIGITADO NO INPUT
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [datadenascimento, setDatadeNascimento] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [endereço, setEndereço] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [nomeEscola, setNomeEscola] = useState<string>('');
  const [série, setSérie] = useState<string>('');
  const [turno, setTurno] = useState<string>('');
  const [matricula, setMatricula] = useState<string>('')
  const [coordenador,setCoordenador] = useState<string>('')

  const [email, setEmail] = useState<string>('');

  const [enviarDados, setEnviarDados] = useState<{
    nome: string;
    sobrenome: string;
    email: string;
    datadenascimento: string;
    idade: string;
    endereço: string;
    telefone: string;
    nomeEscola: string;
    série: string;
    turno: string;
    matricula: string
    coordenador: string
  } | null>(null);

  function enviarFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    setEnviarDados({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      datadenascimento: datadenascimento,
      idade: idade,
      endereço: endereço,
      telefone: telefone,
      nomeEscola: nomeEscola,
      série: série,
      turno: turno,
      matricula: matricula,
      coordenador: coordenador
    });

    //zerando costantes iniciais
    setNome('');
    setSobrenome('');
    setDatadeNascimento('');
    setIdade('');
    setEmail('');
    setEndereço('');
    setTelefone('');
    setNomeEscola('');
    setSérie('');
    setTurno('');
    setMatricula('');
   setCoordenador('')
  }

  return (
    <div className='container'>
      {/*titulo do formulario*/}
      <h2>Cadastro de alunos</h2>

      {/*Formulario onde recebe também a fumncão enviarFormulario*/}
      <form onSubmit={enviarFormulario}>
        <input
          type='text' //TIPO DO INPUT
          placeholder='nome' // TEXTO EXIBIDO QUANDO ESTAR VAZIO
          value={nome} //VALOR CONTROLADO
          onChange={evento => setNome(evento.target.value)} //ATUALIZA O ESTADO
        />

        <input
          type='text' //TIPO DO INPUT email
          placeholder='Seu Sobrenome' //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={sobrenome} //VALOR CONTROLADO
          onChange={evento => setSobrenome(evento.target.value)} //ATUALIZA O ESTADO
        />

        <input
          type='text' // TIPO DO INPUT
          placeholder='data de nascimento' //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={datadenascimento} //VALOR CONTROLADO
          onChange={evento => setDatadeNascimento(evento.target.value)}
        />

        <input
          type='text' // TIPO DO INPUT
          placeholder='idade' //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={idade} //VALOR CONTROLADO
          onChange={evento => setIdade(evento.target.value)}
        />

        <input
          type='text' // TIPO DO INPUT email
          placeholder='endereço' // TEXTO EXIBIDO QUANDO ESTA VAZIO
          value={endereço} // VALOR CONTROLADO
          onChange={evento => setEndereço(evento.target.value)}
        />

        <input
          type='text' //TIPO DE INPUT
          placeholder='telefone' // TEXTO EXIBIDO QUANDO ESTA VAZIO
          value={telefone} // VALOR CONTROLADO
          onChange={evento => setTelefone(evento.target.value)}
        />
        <input
          type='text' // TIPO DE INPUT
          placeholder='nomeEscola' // TEXTO EXIBIDO QUANDO ESTA VAZIO
          value={nomeEscola} // VALOR CONTROLADO
          onChange={evento => setNomeEscola(evento.target.value)}
        />

        <input
          type='text' // TIPO DE INPUT
          placeholder='série' //TEXTO EXIBIDO QUANDO ESTA VAZIO
          value={série} // VALOR CONTROLADO
          onChange={evento => setSérie(evento.target.value)}
        />

        <input
          type='tex' // TIPO DE INPUT
          placeholder ='turno'// TEXTO EXIBIDO QUANDO ESTA VAZIO
          value={turno} // VALOR CONTROLADO
          onChange={evento => setTurno(evento.target.value)}
        />

        <input
          type='text' // tipo de input
          placeholder='matricula' // TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={matricula} // VALOR CONTROLADO
          onChange={evento => setMatricula(evento.target.value)}
        />

        <input
          type='tex' // tipo de input
          placeholder='coordenado' // TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={coordenador} // VALOR CONTROLADO
          onChange={evento => setCoordenador(evento.target.value)}
        />

        <input
          type='text' // TIOI DE INPUT
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
          <p>
            <strong>Sobrenome:</strong> {enviarDados.sobrenome}
          </p>
          <p>
            <strong>Data de Nascimento:</strong> {enviarDados.datadenascimento}
          </p>
          <p>
            <strong>idade:</strong> {enviarDados.idade}
          </p>
          <p>
            <strong>endereço</strong> {enviarDados.endereço}
          </p>
          <p>
            <strong>telefone</strong> {enviarDados.telefone}
          </p>
          <p>
            <strong>nomeEscola</strong> {enviarDados.nomeEscola}
          </p>
          <p>
            <strong>série</strong> {enviarDados.série}
          </p>
          <p>
            <strong>turno</strong> {enviarDados.turno}
          </p>
          <p>
            <strong>matricula</strong> {enviarDados.matricula}
          </p>
          <p>
            <strong>coordenadou</strong>
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
