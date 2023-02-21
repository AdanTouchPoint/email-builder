import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from 'react-bootstrap/Alert'
import {Link, animateScroll as scroll} from "react-scroll";

//const cryptoRandomString = require("crypto-random-string");

const SmokerSubmission = ({user,setDataSmokerSub, allDataIn, setAllDataIn, smokerSub, setSmokerAnswers, dataSmokerSub}) => {
    const [validated, setValidated] = useState(false)
    //const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
    dataSmokerSub.id = 'randomId';
    dataSmokerSub.userId = user.id

    const [firstCheckBoxData, setFirstCheckBoxData] = useState([])
    const [secondCheckBoxData, setSecondCheckBoxData] = useState([])
    const [thirdCheckBoxData, setThirdCheckBoxData] = useState([])
    const [fourthCheckBoxData, setFourthCheckBoxData] = useState([])
    const [fifthCheckBoxData, setFifthCheckBoxData] = useState([])
    const [sixCheckBoxData, setSixCheckBoxData] = useState([])
    const [sevenCheckBoxData, setSevenCheckBoxData] = useState([])
    const [eightCheckBoxData, setEightCheckBoxData] = useState([])
    const [nineCheckBoxData, setNineCheckBoxData] = useState([])
    const [error, setError] = useState(false)

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
    const handleText = e => {
        e.preventDefault();
        setDataSmokerSub({
            ...dataSmokerSub,
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
            ...nineCheckBoxData
        ])
    }

    const {smokedYears, tries, money, prescriptionSupport, personalStory, words} = dataSmokerSub;
    const click = e => {
        e.preventDefault();
        data().then()
        // setDataSmokerSub({
        //     ...dataSmokerSub,
        //     products: allDataIn.join(',')
        // })

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        if (smokedYears.trim() === '' || tries.trim() === '' ||
             money.trim() === '' || prescriptionSupport.trim() === '' || personalStory.trim() === '' || words.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setSmokerAnswers(false)
        scroll.scrollToBottom();

    }

    useEffect(() => {
        console.log(secondCheckBoxData)
    }, [secondCheckBoxData])
    useEffect(() => {
        console.log(dataSmokerSub)
    }, [dataSmokerSub])

    return (
        <div  hidden={smokerSub} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
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
                    <Form.Group controlId="smokedYears">
                        <Form.Label>1) How many years did you smoke?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Choose..."
                            name="smokedYears"
                            onChange={handleText}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="tries">
                        <Form.Label>2) How many times did you try to quit smoking?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Choose..."
                            name="tries"
                            onChange={handleText}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="champix">
                        <Form.Label>3) Which Products Have You Used To Try To Quit Smoking (tick all that
                            apply):</Form.Label>
                        <Form.Check
                            style={{padding: '3px'}}
                            label={'Prescription Medicine (eg Champix)'}
                            name="champix"
                            onClick={firstCheckBox}
                            value={'Prescription Medicine (eg Champix)'}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Cold Turkey"}>
                        <Form.Check
                            style={{padding: '3px'}}
                            name="Cold Turkey"
                            onClick={secondCheckBox}
                            label={"Cold Turkey"}
                            value={"Cold Turkey"}
                        />
                    </Form.Group>
                    <Form.Group controlId={" Nicotine Patches"}>
                        <Form.Check
                            name="Nicotine Patches"
                            onClick={thirdCheckBox}
                            value={" Nicotine Patches"}
                            label={" Nicotine Patches"}
                            style={{padding: '3px'}}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Nicotine Gum"}>
                        <Form.Check
                            name="Nicotine Gum"
                            onClick={fourthCheckBox}
                            value={"Nicotine Gum"}
                            label={"Nicotine Gum"}
                            style={{padding: '3px'}}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Nicotine Sprays"}>
                        <Form.Check
                            name="Nicotine Sprays"
                            onClick={fifthCheckBox}
                            value={"Nicotine Sprays"}
                            label={"Nicotine Sprays"}
                            style={{padding: '3px'}}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Nicotine Lozenges"}>
                        <Form.Check
                            name="Nicotine Lozenges"
                            onClick={sixCheckBox}
                            value={"Nicotine Lozenges"}
                            label={"Nicotine Lozenges"}
                            style={{padding: '3px'}}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Hypnotherapy"}>
                        <Form.Check
                            name="Hypnotherapy"
                            onClick={sevenCheckBox}
                            value={"Hypnotherapy"}
                            label={"Hypnotherapy"}
                            style={{padding: '3px'}}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Acupuncture"}>
                        <Form.Check
                            name="Acupuncture"
                            onClick={eightCheckBox}
                            value={"Acupuncture"}
                            label={"Acupuncture"}
                            style={{padding: '3px'}}
                        />
                    </Form.Group>
                    <Form.Group controlId={"Mobile App"}>
                        <Form.Check
                            name="Mobile App"
                            onClick={nineCheckBox}
                            value={"Mobile App"}
                            label={"Mobile App"}
                            style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="money">
                        <Form.Label> 4) How much money did you save on a yearly basis by switching to
                            vaping?</Form.Label>
                        <Form.Control
                            as="select"
                            name="money"
                            onChange={handleText}
                            placeholer={'Choose...'}
                            required
                        >
                            <option>$0 - $2500</option>
                            <option>$2501 - $5000</option>
                            <option>$5001 - $7500</option>
                            <option>$7501 - $10,000</option>
                            <option>$10,001 - $12,500</option>
                            <option>$12,500 - $15,000</option>
                            <option>$15,000 +</option>
                        </Form.Control>

                    </Form.Group>
                    <Form.Group controlId="prescriptionSupport">
                        <Form.Label>5) Do You Support a Prescription-Only Model to Obtain Liquid
                            Nicotine?: </Form.Label>
                        <Form.Text>
                            A prescription-only model would mean you must visit a GP for a nicotine prescription
                            and get it filled by a pharmacy. This could require severalx trips to the GP a year
                            and limited availability of nicotine options.
                        </Form.Text>
                        <Form.Check
                            type={'radio'}
                            name="prescriptionSupport"
                            onChange={handleText}
                            value={'Yes'}
                            label={'Yes'}
                        />
                        <Form.Check
                            type={'radio'}
                            name="prescriptionSupport"
                            onChange={handleText}
                            value={'No'}
                            label={'No'}

                        />
                    </Form.Group>
                    <Form.Group controlId="personalStory">
                        <Form.Label>6) In detail, please write your personal quit story: </Form.Label>
                        <Form.Control required as="textarea" value={personalStory} name={'personalStory'} onChange={handleText}
                                      rows={3}/>
                    </Form.Group>
                    <Form.Group controlId="words">
                        <Form.Label>7) In 10 words or more, what would you do if vaping was regulated as a prescription
                            only product. </Form.Label>
                        <Form.Control required as="textarea" onChange={handleText} value={words} name={'words'}
                                      rows={3}/>
                    </Form.Group>
                    <Button
                        onClick={click}
                    >
                        Next
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SmokerSubmission;




