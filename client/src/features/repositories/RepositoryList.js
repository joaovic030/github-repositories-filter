import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row, Badge } from 'react-bootstrap';
// import CenteredModal from './RepositoryShow'

function RepositoryList({repositories}) {
  const bgOptions = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  // const [modalShow, setModalShow] = useState(false);
  return (
    <Row className="justify-content-md-center mt-4">
      {repositories.map(repo =>{
              return <Col lg="4" className="mb-2 mt-2">
                  <Card>
                    <Card.Header>
                      <Row style={{alignItems: 'center'}}>
                        <Col lg="8">
                        <strong className="mr-auto">{repo.name}</strong></Col>
                        <Col lg="4">
                          <Badge pill variant={bgOptions[Math.floor(Math.random() * bgOptions.length)]} style={{float: 'right'}}> {repo.language} </Badge>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body style={{cursor: 'pointer'}} onClick={() => window.open(repo.html_url, '_blank')}>{repo.description}</Card.Body>
                  </Card>
                </Col>
        })}
    </Row>
  )
}

export default RepositoryList