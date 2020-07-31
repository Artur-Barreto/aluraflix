import React, { useState } from "react";
import PageDefault from "../../../pages/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../FormField";

function CadastroCategoria() {
  const valoresInicias = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(getAttribute("name"), value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form
        onSubmit={function handlerSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          console.log("Tá tentando enviar o form né?");
          setCategorias([...categorias, values]);
          setValue(valoresInicias);
        }}
      >
        <FormField label="Nome da Categoria" type="text" name="nome" values={values.nome} onChange={handleChange} />

        <FormField label="Descricao" type="textarea" name="descricao" values={values.descricao} onChange={handleChange} />

        <FormField label="Cor" type="color" name="color" values={values.cor} onChange={handleChange} />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categorias, indice) => {
          return <li key={`${categorias}${indice}`}>{categorias.nome}</li>;
        })};
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
