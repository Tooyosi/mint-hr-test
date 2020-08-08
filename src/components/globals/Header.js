import React from 'react';
import { Navbar, Image, Container, Nav, InputGroup, FormControl } from 'react-bootstrap'
import Logo from '../../../assets/logo/TransMonitor.png'
import User from '../../../assets/logo/user.png'
import Icofont from 'react-icofont';
import { NavContainer } from '../../styles/style';
function Header(props) {
    return (
        <NavContainer>
            <Navbar expand="lg" variant="light" bg="white" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle  onClick={props.setToggled}/>
                    <Navbar.Collapse className="hidden">
                        <Nav className="mr-auto">

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <Icofont icon="search-1" className="mt-1" />

                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="search" className="search" placeholder="Search..." />

                            </InputGroup>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Support</Nav.Link>
                            <Nav.Link href="#">
                                FAQ
                        </Nav.Link>
                            <Nav.Link>
                                <Icofont icon="alarm">
                                    <span className="notification">8</span>

                                </Icofont>
                                {/* <Image src={Bell} width="10" fluid /> */}

                            </Nav.Link>
                            <Nav.Link>
                                <div className="small hello text-right">Hello</div>
                            Oluwaleke Ojo
                        </Nav.Link>
                            <Nav.Link>
                                <Image src={User} roundedCircle />

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavContainer>
    );
}

export default Header;