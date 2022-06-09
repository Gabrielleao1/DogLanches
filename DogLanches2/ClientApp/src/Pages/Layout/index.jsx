import * as React from 'react';
import { Container } from 'reactstrap';
import { Component } from 'react';
import NavMenu from '../../components/NavMenu/index';
import './style.css';

export default class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <React.Fragment>
                <NavMenu />
                <Container className='container'>
                    {this.props.children}
                </Container>
            </React.Fragment>
        );
    }
}