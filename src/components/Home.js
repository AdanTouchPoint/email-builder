import React, {Fragment, useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import {Link, animateScroll as scroll} from "react-scroll";

const Home = ({user, setUser, hidden, setHidden}) => {
    const handleClick = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setHidden(false
        )
        scroll.scrollToBottom();
        console.log(e.target.value)
        console.log(user)
        console.log(hidden)
    }
    return (
        <Fragment>
            <Container className={"containerText"}>
                <Row>
                    <Col>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                        >

                        </Link>
                        <div style={{fontSize: '17px', textAlign:'justify'}}>

                            <p>TouchPoint’s proprietary email building technology allows users to create a meaningful
                                email
                                by answering a few simple questions. The system then formats those responses into an
                                email
                                format and sends them to the relevant party.
                            </p>

                            <p> This platform was created to allow users to quickly develop a government committee
                                submission by answering a few simple questions, but it can be used to help citizens
                                build
                                coherent and impactful emails of any kind.
                            </p>
                            <p> Once the answers have been answered, the system will arrange these into an email format
                                that
                                can be delivered in one of three ways:
                            </p>
                            <ul>
                                <li> The submission is downloaded to the user’s computer in PDF form. Then a
                                    step-by-step guide is produced, instructing users on how to upload the file on the
                                    committee’s website (the website can be embedded into the platform using an iframe).
                                </li>
                                <li>The submission is shown on the user’s screen in the form of an email, including a
                                    subject line and the email address of the committee’s secretariat. The user is
                                    subsequently told to copy/paste this information into an email and send it to the
                                    committee as a submission.
                                </li>
                                <li>Using our “Email Gold” service, emails will arrive in the recipient’s inbox as if
                                    they’d been sent from the user’s personal email address.
                                </li>
                            </ul>

                        </div>
                    </Col>
                </Row>
                <Row className={"Button1"}>
                    <Col xs={6} xl={6}>
                        <Button onClick={handleClick} size={"lg"} name={'smoker'} value={'1'} variant="primary">Im quit
                            smoking by vaping</Button>
                    </Col>
                    <Col className={"Button2"} xs={6}>
                        <Button size={'lg'} onClick={handleClick} size={"lg"} name={'smoker'} value={'2'}
                                variant="info">I don´t vape, but am a supporter</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home;