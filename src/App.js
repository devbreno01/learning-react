import Idade from "./components/Idade";
import {useState} from 'react'; 

import React from "react";
function App() {
  //useState é um hook para adicionar dinamismo na app 
  const [name,setNome] = useState('Breno Guimarães');

  function changeNameHook(name){
      setNome(name)
  }
  
  //sempre que utilizamos useState passamos a variavel e o evento que iramos setar essa variavel 
  // o evento que que vamos chamar essa variavel sempre  definimos atraves de uma função 
  // essa função é chamada dentro de um evento onLoad 
  //sempre que queremos acessar o JS dentro do return utilizamos '{}'
  return (
    <div className="App">
      <h1>TESTE REACT CARALHO</h1>
      <Nome nome="Pedro"/>
      <br/>
      <Idade idade="20" ano_nascimento={2005}/>
       <br/>
      <Idade idade="21" ano_nascimento={2004}/>
      <br/>
      <h2>Property Hook, Name - {name} </h2>
      <button onClick={() => changeNameHook('Lucas Ryan Gomes')}>
        Mudar Estado
      </button>
    </div>
  );
}

export default App;

//COMPONENTE SEMPRE TEM QUE TER LETRA MAISCULA NO INICIO 
//como chamamos na mesma app n precisamos utilizar o export default 
function Nome(){
  return(
    <span>Nome é Breno</span>
  );
}
