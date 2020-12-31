import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'


export default class modal extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
        }
        this.handleModal = this.handleModal.bind(this)
    }
    handleModal() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleModal}>
                    Login
                </Button>
                <Modal show={this.state.show} onHide={this.handleModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Anda Berhasil Login</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleModal}>
                        Save Username and Password
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
