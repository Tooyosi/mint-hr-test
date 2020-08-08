import React from 'react';
import { Col, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { StyledSelect, StyledSearch, StyledShowSelect, StyledTable } from '../../../styles/style';
import Icofont from 'react-icofont';
import { GREY } from '../../../styles/colors';

function Payments(props) {
    const data = [{
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "pending"
    }, {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "reconcilled"
    }, {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "un-reconcilled"
    }, {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "pending"
    }, {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "reconcilled"
    }]
    return (
        <>
            <Col sm={12} className="mt-2">
                <h4>Payments</h4>
            </Col>

            <Col md={3} className="mt-2">
                <small>Showing</small>
                <StyledSelect>
                    <option>20</option>
                    <option>19</option>
                </StyledSelect>
                <small>out of 500 payments</small>
            </Col>
            <Col md={6} className="mt-2">

                <StyledSearch>
                    <Icofont icon="search-1" className="mt-1" />
                    <input type="search" placeholder="Search payments" />
                </StyledSearch>
            </Col>
            <Col md={3} className="mt-2">
                <small>Show</small>
                <StyledShowSelect as="select" className="w-75 form-control ml-1 d-inline">
                    <option className="option">All</option>
                    <option className="option">Reconcilled</option>
                    <option className="option">Settled</option>
                    <option className="option">Unsettled</option>
                </StyledShowSelect>
            </Col>
            <Col lg={12} sm={12} md={12}>
                <div className="table-responsive">
                    <StyledTable>
                        <thead>
                            <tr>
                                <td>Item Type</td>
                                <td></td>
                                <td>Price</td>
                                <td>Transaction No</td>
                                <td>Time</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, id) => (
                                <tr key={id}>
                                    <td><span className="ball">VW</span></td>
                                    <td>{item.type}</td>
                                    <td>{item.price}</td>
                                    <td>{item.transNo}</td>
                                    <td>{item.time}</td>
                                    <td>
                                        <div className={`status-div text-center  ${item.status}`}>
                                            <span className={`icon mr-2 ${item.status}`}></span>
                                            {item.status}
                                        </div>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </StyledTable>
                </div>
                <small className="float-left">Showing 1 to 10 of 500 entries</small>
                <div className="float-right">

                    <ButtonToolbar className="light-btns" aria-label="Toolbar with button groups">
                        <ButtonGroup aria-label="First group">
                            <Button variant="light">Previous</Button>
                        </ButtonGroup>
                        <ButtonGroup  aria-label="Second group">
                            <Button variant="primary">1</Button>
                        </ButtonGroup>
                        <ButtonGroup  aria-label="Second group">
                            <Button variant="light">2</Button>
                            <Button variant="light">Next</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </Col>
        </>
    );
}

export default Payments;