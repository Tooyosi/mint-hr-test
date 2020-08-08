import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/globals/Header';

class Landing extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Header />
                    Landing Page
            </div>
        );
    }
}


export default Landing;