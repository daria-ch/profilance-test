import React, {Component} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';

class Toolbar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md" style={{display: 'flex', justifyContent: 'space-between'}}>
                <NavbarBrand tag={RouterNavLink} to="/">Главная</NavbarBrand>
            </Navbar>
        );
    }
}

export default Toolbar;