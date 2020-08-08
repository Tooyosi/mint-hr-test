import React from 'react';
import { Line } from 'react-chartjs-2';
import { WhiteBackground } from '../../../styles/style';
import { Container, Row, Col, FormControl, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

function Graph({state, legend, options}) {
    return (
        <WhiteBackground>
            <Container fluid className="my-4">
                <Row>
                    <Col sm={6}>
                        <h4>Today:5, Aug 2018</h4>
                    </Col>
                    <Col sm={3}>
                        <FormControl as="select" >
                            <option>1 Jan - 1 Jun</option>
                        </FormControl>

                    </Col>
                    <Col sm={3}>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button variant="light">&lt;</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2" aria-label="Second group">
                                <Button variant="light">&gt;</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
            <Line
                data={state}
                legend={legend}
                options={options}

            />
        </WhiteBackground>

    );
}

export default Graph;