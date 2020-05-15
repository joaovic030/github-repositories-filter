import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import { Col, Row, Navbar, Badge } from 'react-bootstrap';
import './App.css'

import ScrollMenu from 'react-horizontal-scrolling-menu';

const callApi = async () => {
  const response = await fetch('http://localhost:4000/');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  
  return body;
}

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  let status = selected ? 'primary' : 'dark'
  return <Badge variant={status}> {text} </Badge>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const active = 'item1';

function App() {

  const onSelect = key => {
    setSelected(key)
  }

  const [repositories, setRepositories] = useState([])
  const [selected, setSelected] = useState(active)
  const [menuItems, setMenuItems] = useState(Menu(list, selected))
  useEffect(() => {
    callApi().then(res => setRepositories(res.repositories)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setMenuItems(Menu(list, selected))
  }, [list])

  let menu = menuItems
  return (
<>
<Navbar bg="dark">
    <Navbar.Brand href="#home">
      GitHubFilter
    </Navbar.Brand>
  </Navbar>
<Container>
  <Row>
    <Col>
      <Jumbotron>
        <h1 className="header">Lista de repositorios</h1>
        <ScrollMenu data={menu} arrowLeft={ArrowLeft} arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect} />
      </Jumbotron>
    </Col>
    
  </Row>

  <Row className="justify-content-md-center">
    {repositories.map(repo =>{
            return <Col lg="4" className="mb-2">
                <Card>
                  <Card.Header>
                    <strong className="mr-auto">{repo.name}</strong>
                  </Card.Header>
                  <Card.Body>{repo.description}</Card.Body>
                </Card>
              </Col>
      })}
  </Row>
</Container>
</>
  );
}

export default App;
