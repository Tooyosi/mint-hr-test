import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { MainStyle, WhiteBackground } from '../../styles/style';
import { Container, Row, Col, Image, FormControl, Button, ButtonToolbar, ButtonGroup, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

function Main(props) {
    const [isToggled, updateToggled] = useState(false)
    const setToggled = ()=>{
        updateToggled(!isToggled)
    }
    return (
        <>
            <Header setToggled={setToggled} isToggled={isToggled}/>
            <Sidebar isToggled={isToggled}/>
            <MainStyle isToggled={isToggled} className="pt-3">
                {props.children}
            </MainStyle>
        </>
    );
}

export default Main;