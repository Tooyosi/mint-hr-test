import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/globals/Header';
import Sidebar from '../../components/globals/Sidebar';
import Main from '../../components/globals/Main';
import { MainStyle, WhiteBackground } from '../../styles/style';
import { Container, Row, Col, Image, FormControl, Button, ButtonToolbar, ButtonGroup, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import ChartImage from '../../../assets/vectors/chart.png'
import Graph from './components/graph';
import Orders from './components/orders';
import Payments from './components/payments';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June'],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }
    ]
}


const legend = {
    display: false
};

const options = {
    title: {
        display: false,
        text: "Chart Title"
    },
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem) {
                return tooltipItem.yLabel;
            }
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        ]
    }
};

class Landing extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Main>
                    <Container fluid>
                        <Row>
                            <Col md={3}>
                                <WhiteBackground>
                                    <Container fluid>
                                        <Row>
                                            <Col sm={8}>
                                                <div>
                                                    <small className="text-muted">Daily Transaction Volume</small>
                                                </div>
                                                <p>2,342</p>
                                            </Col>
                                            <Col sm={4}>
                                                <Image src={ChartImage} height="40" />

                                            </Col>
                                        </Row>
                                    </Container>
                                </WhiteBackground>
                            </Col>
                            <Col md={3}>
                                <WhiteBackground>
                                    <Container fluid>
                                        <Row>
                                            <Col sm={8}>
                                                <div>
                                                    <small className="text-muted">Daily Transaction Value</small>
                                                </div>
                                                <p>₦4,000,000</p>
                                            </Col>
                                            <Col sm={4}>
                                                <Image src={ChartImage} height="40" />

                                            </Col>
                                        </Row>
                                    </Container>

                                </WhiteBackground>
                            </Col>
                            <Col md={3}>
                                <WhiteBackground>
                                    <Container fluid>
                                        <Row>
                                            <Col sm={8}>
                                                <div>
                                                    <small className="text-muted">Total Transaction Volume</small>
                                                </div>
                                                <p>452,000</p>
                                            </Col>
                                            <Col sm={4}>
                                                <Image src={ChartImage} height="40" />

                                            </Col>
                                        </Row>
                                    </Container>
                                </WhiteBackground>
                            </Col>
                            <Col md={3}>
                                <WhiteBackground>
                                    <Container fluid>
                                        <Row>
                                            <Col sm={8}>
                                                <div>
                                                    <small className="text-muted">Total Transaction Value</small>
                                                </div>
                                                <p>₦4,000,000</p>
                                            </Col>
                                            <Col sm={4}>
                                                <Image src={ChartImage} height="40" />

                                            </Col>
                                        </Row>
                                    </Container>
                                </WhiteBackground>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={8}>
                                <Graph state={state} legend={legend} options={options}/>
                            </Col>
                            <Col md={4}>
                                <Orders />  
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Payments />
                        </Row>
                    </Container>
                </Main>
            </div>
        );
    }
}


export default Landing;