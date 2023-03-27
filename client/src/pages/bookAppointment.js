import React, { useState } from 'react'
import { MultiStepForm, Step } from 'react-multi-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookAppointment = () => {
    const patientDetails = {};
    const [mobileNumberValidate, setMobileNumberValidate] = useState({ className: '', text: '', disabled: true });
    let [activeStep, setActiveStep] = useState(1);
    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            patientDetails[key] = value;
        }
        setActiveStep(activeStep += 1)
    };
    const handleMobileNumberChange = (event) => {
        const mobileNumberValidate = {};
        const { value } = event.target;
        if (value.length < 10) {
            mobileNumberValidate.className = 'text-danger';
            mobileNumberValidate.text = 'Invalid Number';
            mobileNumberValidate.disabled = true;
        } else if (value.length > 10) {
            mobileNumberValidate.className = 'text-danger';
            mobileNumberValidate.text = 'Too Long';
            mobileNumberValidate.disabled = true;
        } else {
            mobileNumberValidate.className = 'text-success';
            mobileNumberValidate.text = 'Valid Number';
            mobileNumberValidate.disabled = false;
        }
        setMobileNumberValidate(mobileNumberValidate);
    }
    return (
        <div className='appointmentCard mt-5'>
            <MultiStepForm activeStep={activeStep}>
                <Step label="Mobile Verification">
                    <Form className='stepCard' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicMobile">
                            <Form.Label>Mobile Number</Form.Label>
                            <div className="d-flex">
                                <div style={{ width: '35rem' }}>
                                    <Form.Control type="number" name="mobileNumber" placeholder="Mobile Number" maxLength="10" onChange={handleMobileNumberChange} />
                                </div>
                                <div className={mobileNumberValidate.className ? `m-2 ${mobileNumberValidate.className}` : 'm-2'}>{mobileNumberValidate.text}</div>
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={mobileNumberValidate.disabled}>
                            Request OTP
                        </Button>
                    </Form>
                </Step>
                <Step label="Patient Information">
                    <p>Two</p>
                </Step>
                <Step label="Doctor Selection">
                    <p>Three</p>
                </Step>
            </MultiStepForm>
        </div>
    )
};

export default BookAppointment;