import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import { Link, animateScroll as scroll } from "react-scroll";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//const cryptoRandomString = require("crypto-random-string");

const Questions = ({
  user,
  showQuestions,
  setShowQuestions,
  questions,
  setQuestions,
  setSmokerAnswers,
  setShowQuestionsView,
}) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const handleText = (e) => {
    setQuestions({
      ...questions,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  const click = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    const { question1, question2, question3 } = questions;
    setValidated(true);
    if (
      question1.trim() === "" ||
      question2.trim() === "" ||
      question3.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    setShowQuestionsView(false);
    scroll.scrollToBottom();
  };
  useEffect(() => {
    return console.log(questions);
  }, [questions]);
  return (
    <div
      hidden={showQuestions}
      className={"container"}
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <h2>Create a Submission </h2>
        {error ? (
          <Alert variant={"danger"}>All fields are required!</Alert>
        ) : null}
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ></Link>
        <Form noValidate validated={validated}>
          <Form.Group controlId="question1">
            <Form.Label>
              1.- Introduce yourself to the committee by stating your name,
              location and occupation. For example, "Hi, I'm Adam, I live in
              Perth, and I own a pastry shop in Kwinana."
            </Form.Label>
            <Form.Control
              required
              as="textarea"
              name={"question1"}
              onChange={handleText}
              rows={3}
            />
          </Form.Group>
          <Form.Group controlId="question2">
            <Form.Label>
              2.- In your own words, tell the committee that you support this
              legislation and that you believe it is important to achieve
            </Form.Label>
            <Form.Control
              required
              as="textarea"
              onChange={handleText}
              name={"question2"}
              rows={3}
            />
          </Form.Group>
          <Row className="mb-3">
            
              3.- Tell the committee that you fear that opposing
              
              <Col >
                <Form.Control plaintext 
                onChange={handleText}
                name={"question3"}
                placeholder={"type here"}
                />
              </Col>
              legislation will lead to
              <Col>
                <Form.Control  plaintext
                onChange={handleText}
                name={"question31"}
                placeholder={"type here"}
                />
              </Col>
              as well as any other concerns you have.
          </Row>
          <Button onClick={click}>Next</Button>
        </Form>
      </div>
    </div>
  );
};

export default Questions;
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>State</Form.Label>
    <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
    </Form.Select>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Zip</Form.Label>
    <Form.Control />
  </Form.Group>
</Row>;
