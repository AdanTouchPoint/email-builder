import React from "react";
import Button from "react-bootstrap/cjs/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const QuestionsView = ({
  questions,
  user,
  setShowThankYou,
  setHidden,
  setShowQuestions,
  showQuestionsView,
  setShowQuestionsView,
}) => {
  const { question1, question2, question3 } = questions;
  const { firstName, lastName } = user;

  const hoy = new Date();
  const today = hoy.toDateString();
  console.log(today);
  const click = async (e) => {
    e.preventDefault();
    setShowThankYou(false);
    setShowQuestions(true);
    setHidden(true);
    setShowQuestionsView(true);
    await axios
      .post(
        `https://payload-demo-tpm.herokuapp.com/email-builder?questions=${JSON.stringify(
          questions
        )}&user=${JSON.stringify(user)}`
      )
      .then((res) => {
        console.log(res.status);
      });
  };
  return (
    <div
      hidden={showQuestionsView}
      className={"container"}
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <h2> Review your Answers</h2>
        <p>
          Please review your answers carefully before submitting. Once you click
          send, your submission will be sent on your behalf to the Committee
          using the information you provided above.
        </p>
        <p>Your submission will be laid out as follows</p>
        <div style={{ textAlign: "left" }}>
          <Card body>
           <p> 
            {today} <br/>
            Committee Secretariat Government Committee<br/>
            Parliament Address Line 1 <br/>
            Parliament Address Line 2 <br/>
            Parliament Address Line 3<br/>
            </p>
            <p>
              Submission by {firstName} {lastName} - {today}
            </p>
            <p>{question1}</p>
            <p>{question2}</p>
            <p>{question3}</p>
            Sincerely,
            <p>
              {firstName} {lastName}
            </p>
          </Card>
        </div>
        <p>If you are happy with your submission, click "Send Now" below</p>
        <Button onClick={click} className={"u-full-width"}>
          Send Now!
        </Button>
      </div>
    </div>
  );
};

export default QuestionsView;
