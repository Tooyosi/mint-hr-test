import React from 'react';
import { WhiteBackground } from '../../../styles/style';
import {  Row, Col, ProgressBar } from 'react-bootstrap';


function Orders(props) {
    return (
        <Row>
        <Col sm={12}>
            <WhiteBackground className="p-3">
                <h5>Orders</h5>
                <ProgressBar variant="success" now={80} />
                <p className="orders-txt mt-2">
                    Pending Orders:<span className="yellow-color"> 20</span>
                </p>
                <p className="orders-txt">
                    Reconcilled Orders:<span className="green-color"> 80</span>
                </p>
                <p className="orders-txt">
                    Total Orders:<span className="blue-color"> 100</span>
                </p>
            </WhiteBackground>
        </Col>
        <Col sm={12} className="mt-2">
            <WhiteBackground className="p-3">
                <h5>Payments</h5>
                <ProgressBar variant="success" now={80} />
                <p className="orders-txt mt-2">
                    Un-reconcilled Payments:<span className="yellow-color"> 20</span>
                </p>
                <p className="orders-txt">
                    Reconcilled Payments:<span className="green-color"> 80</span>
                </p>
                <p className="orders-txt">
                    Total Payments:<span className="blue-color"> 100</span>
                </p>
            </WhiteBackground>
        </Col>
    </Row>
   
    );
}

export default Orders;