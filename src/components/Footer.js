import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class NavBar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-light px-sm-5">
              <center>
                  Made by Garima Singh
              </center>

            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    .nav-link {
        /* nusty - ok for demo */ 
        color: pink !important; 
        font-size: 1.05rem;
    }
`;