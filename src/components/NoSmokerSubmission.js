import React, {Fragment, useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import {Link, animateScroll as scroll} from "react-scroll";

//const cryptoRandomString = require("crypto-random-string");

const NoSmokerSubmission = ({user,setAllDataIn, allDataIn, noSmokerSub, setDataNoSmokerSub, dataNoSmokerSub, setNoSmokerAnswers}) => {
    const [validated, setValidated] = useState(false);
    //const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
    dataNoSmokerSub.id = 'randomid';
    dataNoSmokerSub.userId = 'user.id'
    const [error, setError] = useState(false)
    const [firstCheckBoxData, setFirstCheckBoxData] = useState([])
    const [secondCheckBoxData, setSecondCheckBoxData] = useState([])
    const [thirdCheckBoxData, setThirdCheckBoxData] = useState([])
    const [fourthCheckBoxData, setFourthCheckBoxData] = useState([])
    const [fifthCheckBoxData, setFifthCheckBoxData] = useState([])
    const [sixCheckBoxData, setSixCheckBoxData] = useState([])
    const [sevenCheckBoxData, setSevenCheckBoxData] = useState([])
    const [eightCheckBoxData, setEightCheckBoxData] = useState([])
    const [nineCheckBoxData, setNineCheckBoxData] = useState([])
    const [thenCheckBoxData, setThenCheckBoxBoxData] = useState([])
    const [eleventCheckBoxData, setEleventCheckBoxData] = useState([])
    const [twelfthCheckBoxData, setTwelfthCheckBoxData] = useState([])
    const [thirteenthCheckBoxData, setThirteenthCheckBoxData] = useState([])
    const [fourteenthCheckBoxData, setFourteenthCheckBoxData] = useState([])
    const [fifteenthCheckBoxData, setFifteenthCheckBoxData] = useState([])
    const [sixteenthCheckBoxData, setSixteenthCheckBoxData] = useState([])
    const [radiosData, setRadiosData] = useState([])

    const firstCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setFirstCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setFirstCheckBoxData([])
            console.log(firstCheckBoxData)
        }
    }
    const secondCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setSecondCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setSecondCheckBoxData([])
            console.log(secondCheckBoxData)
        }
    }
    const thirdCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setThirdCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setThirdCheckBoxData([])
        }
    }
    const fourthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setFourthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setFourthCheckBoxData([])

        }
    }
    const fifthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setFifthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setFifthCheckBoxData([])

        }
    }
    const sixCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setSixCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setSixCheckBoxData([])
        }
    }
    const sevenCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setSevenCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setSevenCheckBoxData([])

        }
    }
    const eightCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setEightCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setEightCheckBoxData([])
        }
    }
    const nineCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setNineCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setNineCheckBoxData([])
        }
    }
    const thenCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setThenCheckBoxBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setThenCheckBoxBoxData([])
        }
    }
    const eleventCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setEleventCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setEleventCheckBoxData([])
        }
    }
    const twelfthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setTwelfthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setTwelfthCheckBoxData([])
        }
    }
    const thirteenthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setThirteenthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setThirteenthCheckBoxData([])
        }
    }
    const fourteenthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setFourteenthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setFourteenthCheckBoxData([])
        }
    }
    const fifteenthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setFifteenthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setFifteenthCheckBoxData([])
        }
    }
    const sixteenthCheckBox = e => {
        console.log(e.target.value)
        if (e.target.checked === true) {
            console.log('HERE!')
            setSixteenthCheckBoxData([
                e.target.value
            ])
        } else {
            console.log('HEREFalse!')
            setSixteenthCheckBoxData([])
        }
    }

    const handleRadios = e => {
        setRadiosData([
            ...radiosData,
            e.target.value
        ])
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            [e.target.name]: [
                ...radiosData,
                e.target.value].join(',')
        })
        console.log(e.target.value)
    }
    const handleText = e => {
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    const data = async () => {
        await setAllDataIn([
            ...firstCheckBoxData,
            ...secondCheckBoxData,
            ...thirdCheckBoxData,
            ...fourthCheckBoxData,
            ...fifthCheckBoxData,
            ...sixCheckBoxData,
            ...sevenCheckBoxData,
            ...eightCheckBoxData,
            ...nineCheckBoxData,
            ...thenCheckBoxData,
            ...eleventCheckBoxData,
            ...twelfthCheckBoxData,
            ...thirteenthCheckBoxData,
            ...fourteenthCheckBoxData,
            ...fifteenthCheckBoxData,
            ...sixteenthCheckBoxData,
        ])
    }
    useEffect(() => {
        console.log(dataNoSmokerSub)
    }, [dataNoSmokerSub])
    const {prescriptionSupport, personalStory} = dataNoSmokerSub;
    const click = e => {
        data().then()
        e.preventDefault();
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            relatives: allDataIn.join(',')
        })

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (prescriptionSupport.trim() === '' || personalStory.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setNoSmokerAnswers(false)
        scroll.scrollToBottom();
    }
    return (
        <div hidden={noSmokerSub} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h2>Create a Submission </h2>
                {error ? <Alert variant={'danger'}>
                    All fields are required!
                </Alert> : null}
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                </Link>
                <Form noValidate validated={validated}>
                    <Form.Group controlId="Husband">
                        <Form.Label>1) Who close to you has quit smoking by switching to vaping? (tick all that
                            apply):</Form.Label>
                        <Form.Check
                            name="Husband" onClick={firstCheckBox} value={' Husband'} label={' Husband'}
                            style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Wife">
                        <Form.Check name="Wife" onClick={secondCheckBox} value={' Wife'} label={' Wife'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Wife">
                        <Form.Check name="Daughter" onClick={thirdCheckBox} value={' Daughter'} label={' Daughter'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Mother">
                        <Form.Check name="Mother" onClick={fourthCheckBox} value={' Mother'} label={' Mother'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Father">
                        <Form.Check name="Father" onClick={fifthCheckBox} value={' Father'} label={' Father'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Son">
                        <Form.Check name="Son" onClick={sixCheckBox} value={' Son'} label={' Son'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Grandmother">
                        <Form.Check name="Grandmother" onClick={sevenCheckBox} value={' Grandmother'} label={' Grandmother'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Grandfather">
                        <Form.Check name="Grandfather" onClick={eightCheckBox} value={' Grandfather'} label={' Grandfather'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Aunt">
                        <Form.Check name="Aunt" onClick={nineCheckBox} value={' Aunt'} label={' Aunt'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Uncle">
                        <Form.Check name="Uncle" onClick={thenCheckBox} value={' Uncle'} label={' Uncle'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Cousin">
                        <Form.Check name="Cousin" onClick={eleventCheckBox} value={' Cousin'} label={' Cousin'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Nephew">
                        <Form.Check name="Nephew" onClick={twelfthCheckBox} value={' Nephew'} label={' Nephew'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Neighbour">
                        <Form.Check name="Neighbour" onClick={thirteenthCheckBox} value={' Neighbour'} label={' Neighbour'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Friend">
                        <Form.Check name="Friend" onClick={fourteenthCheckBox} value={' Friend'} label={' Friend'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Mentor">
                        <Form.Check name="Mentor" onClick={fifteenthCheckBox} value={' Mentor'} label={' Mentor'}
                                    style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="Mentee">
                        <Form.Check name="Mentee" onClick={sixteenthCheckBox} value={' Mentee'} label={' Mentee'}
                                    style={{padding: '3px'}}/>

                    </Form.Group>
                    <Form.Group controlId="prescriptionSupport">
                        <Form.Label>2) Do You Support a Prescription-Only Model to Obtain Liquid
                            Nicotine?: </Form.Label>
                        <Form.Text>
                            A prescription-only model would mean you must visit a GP for a nicotine prescription
                            and get it filled by a pharmacy. This could require several trips to the GP a year
                            and limited availability of nicotine options.
                        </Form.Text>
                        <Form.Check type={'radio'} name="prescriptionSupport" onChange={handleRadios} value={'Yes'}
                                    label={'Yes'}
                                    aria-label="Checkbox for following text input"/>
                        <Form.Check type={'radio'} name="prescriptionSupport" onChange={handleRadios} value={'No'} label={'No'}
                                    aria-label="Checkbox for following text input"/>
                    </Form.Group>
                    <Form.Group controlId="personalStory">
                        <Form.Label>3) In detail, please explain why you support vaping: </Form.Label>
                        <Form.Control as="textarea" value={personalStory} name={"personalStory"} onChange={handleText}
                                      required rows={3}/>
                    </Form.Group>
                    <Button
                        onClick={click}
                        className={'u-full-width'}
                    >
                        Next
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NoSmokerSubmission;




