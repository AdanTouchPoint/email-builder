import React, {Fragment} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";


const ThankYou = ({showThankYou}) => {


    return (

        <div hidden={showThankYou} className={'container'} style={{justifyContent:'center', display:'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h1>Thank You!</h1>
                <h3>Your submission has been sent</h3>
            </div>
        </div>


    )
}

export default ThankYou;