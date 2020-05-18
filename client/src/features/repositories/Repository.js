import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Badge } from 'react-bootstrap';
import Menu from '../../components/horizontalScroll/Menu'
import '../../App.css'

import ScrollMenu from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import RepositoryList from './RepositoryList';
import Header from '../../components/Header/Index'

import Pagination from 'pagination-component'
import { css } from 'glamor'


const getRepositories = async (page) => {
  const response = await fetch(`http://localhost:4000/repositories?page=${page}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  
  return body;
}

const getLanguages = async () => {
  const response = await fetch('http://localhost:4000/languages');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  
  return body;
}

const findRepositoriesByLang = async (lang) => {
  const response = await fetch(`http://localhost:4000/repositories/${lang}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  
  return body;
}
 
const Arrow = ({ text, className }) => {
  return (
    <div className={className}>
    <Badge variant='light' style={{borderRadius: 50}}>
      <FontAwesomeIcon icon={ text === 'right' ? faChevronRight : faChevronLeft } />
    </Badge>
    </div>
  );
};
 
const ArrowLeft = Arrow({ text: 'left', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: 'right', className: 'arrow-next' });
 
const pageLink = css({
  margin: '2px',
  display: 'inline-block',
  padding: '2px',
  WebkitBorderRadius: '20px',
  MozBorderRadius: '20px',
  borderRadius: '20px'
})
 
const currentLink = css({
  backgroundColor: '#0074c2',
  display: 'inline-block',
  color: '#FFFFFF',
  'a:link': { color: '#FFFFFF' },
  'a:visited': { color: '#FFFFFF' },
  'a:active': { color: '#FFFFFF' }
})

const Repository = () => {
  
  const active = "Todas";
  const readAndSetRepositories = async (page) => {
    try {
      const response = await getRepositories(page)
      setRepositories(response.repositories)
    } catch (error) {
      console.log(error)
    }
  }
  
  const readAndSetLanguages = async () => {
    try {
      const response = await getLanguages()
      let allOptionsLangs = response.languages
      allOptionsLangs.unshift({"name": "Todas"})
      setList(allOptionsLangs)
    } catch (error) {
      console.log(error)
    }
  }
  const findAndSetRepositories = async (lang) => {
    try {
      setInLoading(true)
      const response = await findRepositoriesByLang(lang)
      setRepositories(response.repositories)
      setInLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onSelect = key => {
    setSelected(key)
    findAndSetRepositories(key)
  }

  const [repositories, setRepositories] = useState([])
  const [selected, setSelected] = useState(active)
  const [list, setList] = useState([])
  const [menuItems, setMenuItems] = useState(Menu(list, selected))
  const [inLoading, setInLoading] = useState(false)
  const [actualItems, setActualItems] = useState([])
  
  useEffect(() => {
    readAndSetRepositories()
    readAndSetLanguages()
  }, [])

  useEffect(() => {
    setMenuItems(Menu(list, selected))
  }, [list, selected])

  let menu = menuItems
  
  const styles = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, backgroundColor: '#282c34', borderBottomLeftRadius: '50% 20%', borderBottomRightRadius: '50% 20%'}
  const loading = () => {
    return(
      <div className='loader'>
      </div>
    )
  }

  function handlePageClick(page) {
    readAndSetRepositories(page)
  }

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

        <Pagination currentPage={0}
          pageCount={50}
          pageLinkClassName={pageLink}
          currentLinkClassName={currentLink}
          onPageClick={i => {
            handlePageClick(i)
          }} />
        
        {inLoading ? loading() : null}
        <RepositoryList repositories={repositories} />
      </Container>
    </>
  )
}

export default Repository