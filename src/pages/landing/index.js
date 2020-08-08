import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/globals/Header';
import Sidebar from '../../components/globals/Sidebar';

class Landing extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
            </div>
        );
    }
}


export default Landing;