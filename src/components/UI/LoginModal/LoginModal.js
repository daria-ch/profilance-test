import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from "react-redux";
import {loginUser, userIsAdmin} from "../../../store/actions/usersActions";

class LoginModal extends Component {

    state = {
        modal: false,
        username: '',
        password: '',
        userUsername: 'user',
        userPassword: 'user123',
        adminUsername: 'admin',
        adminPassword: 'admin123',
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    checkLogin = async (loginData) => {
        if (loginData.username === this.state.userUsername && loginData.password === this.state.userPassword) {
            this.props.loginUser(loginData);

        } else if (loginData.username === this.state.adminUsername && loginData.password === this.state.adminPassword) {
            this.props.loginUser(loginData);
            this.props.userIsAdmin();

        } else {
            alert('Login or password incorrect')
        }
    };

    submitFormHandler = async event => {
        event.preventDefault();

        const login = {
            username: this.state.username,
            password: this.state.password
        };

        await this.checkLogin(login);
    };

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}>Войти</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitFormHandler}>
                            <FormGroup>
                                <Label for="username">Login</Label>
                                <Input type="text" name="username" id="username" placeholder="Enter username"
                                       value={this.state.username}
                                       onChange={this.inputChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Enter password"
                                       value={this.state.password}
                                       onChange={this.inputChangeHandler}/>
                            </FormGroup>
                            <ModalFooter>
                                <Button color="primary" onClick={this.submitFormHandler}>Login</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.users.login,
    error: state.users.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: (userData) => dispatch(loginUser(userData)),
    userIsAdmin: () => dispatch(userIsAdmin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);