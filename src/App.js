import Idade from "./components/Idade";
import {useState, useEffect} from 'react'; 

import React from "react";
function App() {
  //useState é um hook para adicionar dinamismo na app 
  const [name,setNome] = useState('Breno Guimarães');

  const[nameUser, setNameUser] = useState('') 
  const[emailUser, setEmailUser] = useState('')
  const[ageUser, setAgeUser] = useState(0)

  //listas de tarefas 
  const [task, setTask] = useState([])
  const [input,setInput] = useState('')
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
  
  function handleTask(e){
    e.preventDefault()
    
    //  alert("Entrou no handle task")
    
    setTask([...task, input])
    //console.log(task)
  }

  //useEffect = "faça isso quando algo mudar", no caso o array .
   useEffect(() => {
    console.log("Tasks atualizadas:", task);
  }, [task]);

  //quando a pagina carregar 
  useEffect(()=>{
     let  getTask = localStorage.getItem("@task")
     if(getTask)
     {
        setTask(JSON.parse(getTask))
     }

  }, [])

  //salvar no localStorage 

   useEffect(()=>{
      localStorage.setItem("@task", JSON.stringify(task))
  }, [task])

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

        <br/> <br/>
        <h3>Lista de Tarefas</h3>
        <form onSubmit={handleTask}>
          <label>Atribua uma tarefa para lista</label>
          <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text"/>
          <button type="submit">Enviar</button>
         
        </form>
         <button onClick={() => setTask(task.slice(0, -1))}>
            Remove
          </button>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
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
