import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Col, Row, Badge } from 'react-bootstrap';
import Menu from '../../components/horizontalScroll/Menu'
import '../../App.css'

import ScrollMenu from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import RepositoryList from './RepositoryList';
import Header from '../../components/Header/Index'


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
 
const Arrow = ({ text, className }) => {
  return (
    <div className={className}>
    <Badge variant='light' style={{borderRadius: 50}}>
      <FontAwesomeIcon icon={ text == 'right' ? faChevronRight : faChevronLeft } />
    </Badge>
    </div>
  );
};
 
const ArrowLeft = Arrow({ text: 'left', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: 'right', className: 'arrow-next' });
 
const active = 'item1';

const Repository = () => {

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
  
  const styles = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, backgroundColor: '#282c34', borderBottomLeftRadius: '50% 20%', borderBottomRightRadius: '50% 20%'}
  return (
    <>
      <Header />
      <Row className="mb-4 mr-0" style={styles}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 className="header" style={{color: '#eee', fontWeight: 700, fontSize: '3.2rem', margin: '2rem 0'}}>Lista de repositorios</h1>
            <h5 style={{color: '#eee', fontWeight: 500}}>Filtre os repositórios públicos do Github por linguagem através do filtro abaixo </h5>
        </div>
      </Row>
      <Container>
        <ScrollMenu data={menu} arrowLeft={ArrowLeft} arrowRight={ArrowRight}
                selected={selected}
                onSelect={onSelect} />
        
        <RepositoryList repositories={repositories} />
        
      </Container>
    </>
  )
}

export default Repository