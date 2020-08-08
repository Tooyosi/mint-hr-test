import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { MainStyle, WhiteBackground } from '../../styles/style';
import { Container, Row, Col, Image, FormControl, Button, ButtonToolbar, ButtonGroup, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import ChartImage from '../../../assets/vectors/Chart.png'

function Main(props) {

    return (
        <>
            <Header />
            <Sidebar />
            <MainStyle className="pt-3">
                {props.children}
            </MainStyle>
        </>
    );
}

export default Main;