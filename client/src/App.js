import React, { useState, useEffect } from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

const callApi = async () => {
  const response = await fetch('http://localhost:4000/');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  
  return body;
}

function App() {

  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    callApi().then(res => setRepositories(res.repositories)).catch(err => console.log(err))
  })

  return (
    <div className="App">
      <Container>
        <Jumbotron>
        <h1 className="header">Lista de repositorios</h1>
          {repositories.map(repo =>{
            return <Toast show={true} onClose={() => console.log("fechou")}>
            <Toast.Header>
              <strong className="mr-auto">{repo.name}</strong>
            </Toast.Header>
            <Toast.Body>{repo.description}</Toast.Body>
          </Toast>
          })}
        </Jumbotron>
      </Container>
      {/* <div style={{borderBottom: '1px solid #333'}}></div> */}
      
    </div>
  );
}

export default App;
