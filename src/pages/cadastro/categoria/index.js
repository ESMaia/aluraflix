import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  function handleValues(chave,valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState(['']);
  return (
    <PageDefault>
      <h1>Cadastro de Categoria {values.nome}</h1>
      <form onSubmit={ function handleSubmit(event){
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
      }}>

      <FormField
        tag="input"
        label="Nome da Categoria:"
        type="text" 
        value={values.nome} 
        onChange={(event) => {handleValues("nome", event.target.value)}}/>

      <FormField
        tag="textarea"
        label="Descrição da Categoria:"
        type="text" 
        value={values.descricao} 
        onChange={(event) => {handleValues("descricao", event.target.value)}}/>
      <FormField
        tag="input"
        label="Cor da Categoria:"
        type="color" 
        value={values.cor} 
        onChange={(event) => {handleValues("cor", event.target.value)}}/>
        
        <button>
          Cadastrar
        </button>
      </form>
          <ul>
            {categorias.map( (categoria, index) => {
              return(
                <li key={index}>Categoria:{categoria.nome}| Descrição: {categoria.descricao}| Cor:{categoria.cor}</li>
              );
            })}
          </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;