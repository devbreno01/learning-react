import Idade from "./components/Idade";
import {useState} from 'react'; 

import React from "react";
function App() {
  //useState é um hook para adicionar dinamismo na app 
  const [name,setNome] = useState('Breno Guimarães');

  const[nameUser, setNameUser] = useState('') 
  const[emailUser, setEmailUser] = useState('')
  const[ageUser, setAgeUser] = useState(0)

  const [user, setUser] = useState({})

  function changeNameHook(name){
      setNome(name)
  }

  function handleUser(e){
      e.preventDefault() 

      alert("User Cadastrado com Sucesso")
      setUser({
        nome : nameUser, 
        email : emailUser, 
        age: ageUser
      })
  }
  
  //sempre que utilizamos useState passamos a variavel e o evento que iramos setar essa variavel 
  // o evento que que vamos chamar essa variavel sempre  definimos atraves de uma função 
  // essa função é chamada dentro de um evento onLoad 
  //sempre que queremos acessar o JS dentro do return utilizamos ''
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
      <br/>
      <br/>
      <br/>
      {/* forms  */}  

      <h2>CADASTRO DE USUÁRIO</h2>
      <form onSubmit={handleUser}>
          <label for="">Nome</label>
          <input type="text" 
            value={nameUser} 
            onChange={(e) => {setNameUser(e.target.value)}}></input>
          <br/>
          <label for="">email</label>
          <input type="email" value={emailUser} onChange={(e)=>{setEmailUser(e.target.value)}}></input>
          <br/>
           <label for="">Idade</label>
          <input type="number" 
            value={ageUser} 
            onChange={(e)=>{setAgeUser(e.target.value)}}>
            </input>
            <br/>
            <br/>
            <button type="submit">Cadastrar</button>
      </form>

        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <h2>Resultado</h2>
            <span>Nome é {user.nome}</span> <br/>
            <span>Email é {user.email}</span> <br/>
            <span>Idade é {user.age}</span> <br/>

        </div>
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
