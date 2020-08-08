import React, { useState, useEffect } from 'react';
import { Col, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { StyledSelect, StyledSearch, StyledShowSelect, StyledTable } from '../../../styles/style';
import Icofont from 'react-icofont';
import { GREY } from '../../../styles/colors';

function Payments(props) {
    let [data, updateData] = useState(props.data)
    
    let [state, changeState] = useState({
        searchTerm: '',
        searchInput: ''
    })

    const setState = (newState) =>
    changeState((prevState) => ({
      ...prevState,
      ...newState,
    }))
    const handleSearch = ({target})=>{
        setState({[target.name]: target.value})
    }
    useEffect(()=>{
        if(state.searchTerm !== ''){
            let arrayFilter = props.data
            let newData = data.filter((a)=>{
                if(a.status == state.searchTerm.toLocaleLowerCase()){
                   return a
                }
            })
            updateData(state.searchTerm == "all"? props.data : newData)
        }

        if(state.searchInput !== ''){
            let {searchInput: filter} = state
            let newData = data
            let filteredArray = newData.filter((i) => {
                return (i.type.toLowerCase().indexOf(filter) !== -1 || i.price.toLowerCase().indexOf(filter) !== -1 || String(i.transNo).toLowerCase().indexOf(filter) !== -1 || i.time.toLowerCase().indexOf(filter) !== -1 || i.status.toLowerCase().indexOf(filter) !== -1)
            })
            if (filteredArray.length > 0) {
                updateData(filteredArray)
            } else {
                updateData(props.data)
            }

        }
    }, [state] )
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
                    <input type="search" value={state.searchInput} name="searchInput" onChange={handleSearch} placeholder="Search payments" />
                </StyledSearch>
            </Col>
            <Col md={3} className="mt-2">
                <small>Show</small>
                <StyledShowSelect as="select" onChange={handleSearch} name="searchTerm" value={state.searchTerm} className="w-75 form-control ml-1 d-inline">
                    <option className="option" value="all">All</option>
                    <option className="option" value="reconcilled">Reconcilled</option>
                    <option className="option" value="settled">Settled</option>
                    <option className="option" value="unsettled">Unsettled</option>
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
                        <ButtonGroup aria-label="Second group">
                            <Button variant="primary">1</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Second group">
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