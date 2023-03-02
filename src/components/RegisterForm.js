import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import { Link, animateScroll as scroll } from "react-scroll";
//const cryptoRandomString = require("crypto-random-string");

const RegisterForm = ({
  setShowQuestions,
  showQuestions,
  user,
  setUser,
  hidden,
  smokerSub,
  setSmokerSub,
  setNoSmokerSub,
}) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [tac, setTac] = useState(false)
  
  const handleTerms = (e) => {
    if (e.target.checked === true) {
      setTac(true)
  } else {
    setTac(false)
  }
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    console.log(user);
  };
  const {
    submissionType,
    firstName,
    lastName,
    age,
    city,
    state,
    zipCode,
    email,
    smoker,
  } = user;

  const click = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (
      tac  === false ||
      submissionType.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      age.trim() === "" ||
      city.trim() === "" ||
      state.trim() === "" ||
      zipCode.trim() === "" ||
      email.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    setShowQuestions(false);
    scroll.scrollToBottom();
  };
  return (
    <div
      hidden={hidden}
      className={"container"}
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <h1>Register</h1>
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
          <Form.Group controlId="submissionType">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Do You Want Your Submission</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="select"
                name="submissionType"
                onChange={handleChange}
                required
              >
                <option></option>
                <option>
                  Public: the material is published on the internet whit your
                  name{" "}
                </option>
                <option>
                  Name-whith held: the material is published on the inter
                  without your name
                </option>
                <option>
                  Confidential: the material is not published onn the internet
                  and kept confidential by the Committee
                </option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please choose a Type of Submission.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="Name"
              name="firstName"
              onChange={handleChange}
              required
              autoFocus={true}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Control
              type="text"
              placeholder="LastName"
              name="lastName"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="age">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Age</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type={"number"}
                placeholder="Age"
                name="age"
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="state">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>State</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="select"
                placeholder="State"
                name="state"
                onChange={handleChange}
                required
              >
                <option>Choose...</option>
                <option>New South Wales</option>
                <option>Victoria</option>
                <option>Queensland</option>
                <option>Tasmania</option>
                <option>Western Australia</option>
                <option>South Australia</option>
                <option> Australian Capital Territory</option>
                <option> Northern Territory</option>
              </Form.Control>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="cp">
            <Form.Control
              type="text"
              placeholder="Code Postal"
              name="zipCode"
              onChange={handleChange}
              required
              maxLength="4"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group style={{textAlign: "justify"}} controlId="conditions">
                <Form.Check
                  name="conditions"
                  onClick={handleTerms}
                  required
                  label={
                    <a target={"_blank"} rel={"noreferrer"} href="https://www.overton.solutions/terms-conditions"> Accept Terms and conditions</a>
                  }
                />
              </Form.Group>
          <Form.Group>
            <Button size={"lg"} onClick={click} className={"u-full-width"}>
              Save
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default RegisterForm;
