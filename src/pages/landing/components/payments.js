import React from 'react';
import { Col, NavDropdown, FormControl, Table } from 'react-bootstrap';
import { StyledSelect, StyledSearch, StyledShowSelect, StyledTable } from '../../../styles/style';
import Icofont from 'react-icofont';
import { GREY } from '../../../styles/colors';

function Payments(props) {
    const data = [{
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "Pending"
    },{
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "Pending"
    },{
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "Pending"
    },{
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "Pending"
    },{
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: '$73430',
        transNo: '1234567890',
        time: '12:30',
        status: "Pending"
    }]
    return (
        <>
            <Col sm={12}>
                <h4>Payments</h4>
            </Col>

            <Col sm={3}>
                <small>Showing</small>
                <StyledSelect>
                    <option>20</option>
                    <option>19</option>
                </StyledSelect>
                <small>out of 500 payments</small>
            </Col>
            <Col sm={6}>

                <StyledSearch>
                    <Icofont icon="search-1" className="mt-1" />
                    <input type="search" placeholder="Search payments" />
                </StyledSearch>
            </Col>
            <Col sm={3}>
                <small>Show</small>
                <StyledShowSelect as="select" className="w-75 form-control ml-1 d-inline">
                    <option className="option">All</option>
                    <option className="option">Reconcilled</option>
                    <option className="option">Settled</option>
                    <option className="option">Unsettled</option>
                </StyledShowSelect>
            </Col>
            <Col sm={12}>
                <StyledTable >
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
                        {data.map((item, id)=>(
                        <tr key={id}>
                            <td><span className="ball">VW</span></td>
                        <td>{item.type}</td>
                        <td>{item.price}</td>
                        <td>{item.transNo}</td>
                        <td>{item.time}</td>
                        <td>{item.status}</td>
                        </tr>

                        ))}
                    </tbody>
                </StyledTable>
            </Col>
        </>
    );
}

export default Payments;