import React, {Component} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Button, Navbar, NavbarBrand, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from "react-redux";

class Toolbar extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <Navbar color="light" light expand="md" style={{display: 'flex', justifyContent: 'space-between'}}>
                <NavbarBrand tag={RouterNavLink} to="/">Главная</NavbarBrand>
                <div>
                    {!this.props.login ? <div>
                            <Button color="danger" onClick={this.toggle}>Войти</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="login">Login</Label>
                                            <Input type="text" name="login" id="login" placeholder="Enter login" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="password" id="password" placeholder="Enter password" />
                                        </FormGroup>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                        </ModalFooter>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </div> :
                        null}
                </div>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    login: state.users.login
});

export default connect(mapStateToProps)(Toolbar);