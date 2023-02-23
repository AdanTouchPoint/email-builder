import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = ({ user, setUser, hidden, setHidden }) => {
  const handleClick = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setHidden(false);
    scroll.scrollToBottom();
    console.log(e.target.value);
    console.log(user);
    console.log(hidden);
  };
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
            ></Link>
            <div style={{ fontSize: "17px", textAlign: "justify" }}>
              <p>
                Making a submission can be a daunting task for many, so
                Overton's "Submission Builder" makes it easy for all interested
                parties to make their voice heard. By asking users a series of
                simple leading questions, our platform can use that information
                to assemble a perfectly structured and relevant submission
                adequate for any committee.
              </p>
              <p>
                Don't be ignored! Submissions are often rejected on trivial
                technicalities such as formatting errors. Similarly, a committee
                may reject bulk submissions that are too similar, even with
                slight variations. Instead, ensure your supporters' voices are
                heard by asking users to answer a series of questions in their
                own words and allowing our platform to assemble and send a
                properly-formatted submission on their behalf.<br/>
                See how our system works by clicking on the button below:<br/>
              </p>
            </div>
          </Col>
        </Row>
        <Row className={"Button1"}>
          <Col xs={12} xl={12}>
            <Button
              onClick={handleClick}
              size={"lg"}
              name={"smoker"}
              value={"1"}
              variant="primary"
            >
              Start Your Submission
            </Button>
          </Col>
          {/* <Col className={"Button2"} xs={6}>
                        <Button size={'lg'} onClick={handleClick} size={"lg"} name={'smoker'} value={'2'}
                                variant="info">I don´t vape, but am a supporter</Button>
                    </Col> */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
