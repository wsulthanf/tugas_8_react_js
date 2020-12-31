import React, { Component } from 'react'
import { Container, Row, Col, Breadcrumb, Carousel, Button, Jumbotron, Form, Figure, ListGroup, Dropdown, DropdownButton} from 'react-bootstrap'
import Modal from './elements/modal'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row className="header">
          <Col sm className="drop" >
            <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa" size="sm">
              <Dropdown.Item href="#/action-1">Inggris</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Indonesia</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col sm>
            <Figure>
              <Figure.Image
                width={50}
                height={50}
                alt="171x180"
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              />
              <Figure.Caption className="name">
                Alan Saputra
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col sm={2}></Col>
          <Col sm>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Berita
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>Neymar Bahas Kontrak baru di Paris-Saint-Germain</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h5>Inggris Mau Jadi Tim Terbaik di Dunia</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h5>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row className="space">
          <Col sm>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Liga 1 Indonesia
              </ListGroup.Item>
              <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item as="li">
                Divisi Primera
              </ListGroup.Item>
              <ListGroup.Item as="li">Serie A</ListGroup.Item>
              <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
              <ListGroup.Item as="li">Bundesliga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>
                Main untuk Catalunya, Gerard Pique Minta Dihormati
              </p>
              <p>
                <Button variant="primary">Read more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm>
            <Form>
              <center>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180"
                    src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                  />
                  <Figure.Caption>
                    <h4>Silakan Login</h4>
                  </Figure.Caption>
                </Figure>
              </center>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Masukkan Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Term and Condition" />
              </Form.Group>
              <Modal />
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
