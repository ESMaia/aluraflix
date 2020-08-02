import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import './formStyle.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState(['']);

  function handleValues(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  useEffect(()=>{
    console.log("oi");
    const url = window.location.hostname.includes('localhos')
    ? 'http://localhost:8080/categorias'
    : 'https://aluraflixm.herokuapp.com/categorias';  
    fetch(url).then(async(response) => {
      const resp = await response.json();
      console.log(resp);
      setCategorias([
        ...resp
      ]);
    });
  },[values]);


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

      {categorias.length > 0 && (
        
        <table key={`key${categorias.length + 1}`}>
            <thead key={`key${categorias.length + 2}`}>
              <tr key={`key${categorias.length + 3}`}>
                <th key={`key${categorias.length + 4}`}>Categoria</th>
                {/* <th>Descrição</th>
                <th>Cor</th> */}
              </tr>
            </thead>
            <tbody key={`key${categorias.length + 5}`}>
              {categorias.map( (categoria, index) => {
                return(
                  <tr key={`key${categoria.length}`}>
                    <td key={`${index}${categoria.nome}`}>{categoria.nome}</td>
                    {/* <td key={`${index}${categoria.descricao}`}>{categoria.descricao}</td>
                    <td key={`${index}${categoria.cor}`}>{categoria.cor}</td> */}
                  </tr>
                  );
                })}
            </tbody>
        </table>
                
      )

      }


      <Link className="btn" to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;