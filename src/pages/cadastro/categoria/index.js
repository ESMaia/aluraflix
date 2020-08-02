import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/buttonLink';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import './tableStyle.css'

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
    link_ex: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_CATEGORIAS = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias';
    fetch(URL_CATEGORIAS)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        categoriasRepository.create({
          titulo: values.titulo,
          cor: values.cor,
          link_extra: {
            text: values.descricao,
            url: values.link_ex
          }    
        })
          .then(() => {
            history.push('/');
          });
        clearForm();
      }}
      >

        <FormField
          label="Título da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Link de referência para a categoria"
          type="input"
          name="link_ex"
          value={values.link_ex}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <ButtonLink type="submit">
          Cadastrar
        </ButtonLink>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <table>
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">Descrição</th>
          <th scope="col">Cor</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
        <tbody>
          {categorias.map((categoria,index) => (
          <tr  key={`key_${index}${categoria.titulo}`} >
              <td key={`${categoria.titulo}`}>
                {categoria.titulo}
              </td>
              {
                categoria.link_extra && (
                  <td key={`${categoria.titulo}${index}`}>
                    {categoria.link_extra.text}
                  </td>
                )
              }
              {
                categoria.link_extra === undefined && (
                  <td key={`${categoria.titulo}${index}`}>
                    Sem Descrição
                  </td>
                )
              }
              <td key={`${categoria.cor}`}>
                {categoria.cor}
              </td>
              <td key={`${index}`}>
                Ainda sendo desenvolvido
                {/* <Link to="/">Editar</Link>
                
                <Link to="/">Excluir</Link> */}
              </td>
              
          </tr>
          ))}
        </tbody>
      </table>

      <ButtonLink as={Link} to="/">
        Ir para home
      </ButtonLink>
    </PageDefault>
  );
}

export default CadastroCategoria;