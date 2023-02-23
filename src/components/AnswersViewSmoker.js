import React, {Fragment, useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const AnswersViewSmoker = ({allDataIn, user, setDataSmokerSub, dataSmokerSub, smokerAnswers, setShowThankYou, setSmokerAnswers, setHidden, setSmokerSub}) => {
    const {personalStory, prescriptionSupport, smokedYears, tries, money, words} = dataSmokerSub
    const {submissionType, firstName, lastName, age, city, state, cp, email, smoker} = user;
     dataSmokerSub.products = allDataIn.toString()
        const click = async e => {
        e.preventDefault();
        setShowThankYou(false)
        setSmokerSub(true)
        setHidden(true)
        setSmokerAnswers(true)
        await axios.post(`http://localhost:8080/email-builder?user=${JSON.stringify(user)}&dataSmokerSub=${JSON.stringify(dataSmokerSub)}&allDataIn=${JSON.stringify(allDataIn)}`)
        .then((res) => {
            console.log(res.status)
        })

    }
    return (
        <div hidden={smokerAnswers} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h2> Review your Answers</h2>
                <p>
                    Please review your answers carefully before submitting. Once you click send, your submission
                    will be
                    sent on your behalf to the Committee using the information you provided above.
                </p>
                <p>
                    Your submission will be laid out as follows
                </p>
                <Card body>
                    <p>
                        SUBJECT:{submissionType} - {firstName} {lastName} submission to the Tobacco Harm
                        Reduction Commitee
                    </p>
                    <p>
                        Department of the Senate
                        Select Commitee on Tobacco Harm Reducction
                        PO Box 6100
                        Parliament House
                        Canberra ACT 2600
                    </p>
                    <p>
                        Dear Commitee,
                        This submission is {submissionType}.
                        Thank you for the opportunity to provide a submission on this critical issue.
                        My name is {firstName} {lastName} from {city} {state}. I am {age} and i smoked for {smokedYears}.
                        I tried to quit smoking {tries}, using:
                    </p>
                    <p>
                        {allDataIn.map((product, index) => <li key={index}>{product}</li>)}
                        {console.log(allDataIn)}
                    </p>
                    But Vaping is the only method that worked for me. I have saved between {money} by
                    switching to vaping
                    I {prescriptionSupport} support a prescription-only model to obtain liquid nicotine
                    <p>
                        {personalStory}
                    </p>
                    <p>{words}</p>
                    Sincerely,
                    <p>{firstName} {lastName}</p>

                </Card>
                <p>
                    If you are happy with your submission, click "Send Now" below
                </p>
                <Button
                    onClick={click}
                    className={'u-full-width'}
                >
                    Send Now!
                </Button>
            </div>
        </div>
    )
}

export default AnswersViewSmoker;

