import React, {Component} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Button, Navbar, NavbarBrand} from 'reactstrap';
import {connect} from "react-redux";
import LoginModal from "../LoginModal/LoginModal";
import {logoutUser} from "../../../store/actions/usersActions";

class Toolbar extends Component {

    onButtonClick = () => {
        this.props.logoutUser()
    }

    render() {
        return (
            <Navbar color="light" light expand="md" style={{display: 'flex', justifyContent: 'space-between'}}>
                <NavbarBrand tag={RouterNavLink} to="/">Главная</NavbarBrand>
                <NavbarBrand tag={RouterNavLink} to="/news">Новости</NavbarBrand>
                <div>
                    {!this.props.login ? <LoginModal/> :
                        <Button color="secondary" onClick={this.onButtonClick}>Выйти</Button>}
                </div>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    login: state.users.login
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);