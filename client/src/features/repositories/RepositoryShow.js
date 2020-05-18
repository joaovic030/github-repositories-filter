import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Row, Col, Button } from 'react-bootstrap'

function CenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {props.repository.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                    <h4> Dono do repositório </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={props.repository.owner.avatar_url} alt="Dono do repositório" 
                        style={{borderRadius:50, width: 30, height: 30 }} />
                    <h5> Nome do cara </h5>
                </Col>
            </Row>
            <p>
                <a href={props.repository.html_url}>
                    {props.repository.description}
                </a>
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default CenteredModal
