import React, { useEffect, useState } from "react";
import {Row,Col,Input} from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {updateCity,updatePhoneNumber,updateEmail,updateLinkedIn,updatePersonalWebsite} from '../redux/Slices/ContactSlice';
import {nextStep,previousStep} from '../redux/Slices/StepSlice';
function ContactDetails(){
    const city=useSelector((state)=>state.contactDetails.city);
    const phoneNumber=useSelector((state)=>state.contactDetails.phoneNumber);
    const email=useSelector((state)=>state.contactDetails.email);
    const linkedIn=useSelector((state)=>state.contactDetails.linkedIn);
    const personalWebsite=useSelector((state)=>state.contactDetails.personalWebsite);
    const[allowNext,setAllowNext]=useState(false);
    const[flag,setFlag]=useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(city&&phoneNumber&&email&&linkedIn)
            setAllowNext(true)
        else
            setAllowNext(false)
        // eslint-disable-next-line
    },[flag])
    return(
        <>
            <Row>
                <Col xs={{span:20,offset:2}} sm={{span:20,offset:2}} md={{span:6}} lg={{span:6}} className='mt-2 mb-3'>
                    <Input type="text" size="large" placeholder="City ( ex : madurai)" value={city} onChange={(e)=>{
                        dispatch(updateCity({data:e.target.value}))
                        setFlag(!flag);
                    }}/>
                </Col>
                <Col xs={{span:20,offset:2}} sm={{span:20,offset:2}} md={{span:6,offset:1}} lg={{span:6,offset:1}} className='mt-2 mb-3'>
                    <Input type={'tel'}  size="large" placeholder="Phone Number ( +91 9876543210 )" value={phoneNumber} onChange={(e)=>{
                        dispatch(updatePhoneNumber({data:e.target.value}))
                        setFlag(!flag);
                    }}/>
                </Col>
                <Col xs={{span:20,offset:2}} sm={{span:20,offset:2}} md={{span:6,offset:1}} lg={{span:6,offset:1}} className='mt-2 mb-3'>
                    <Input type={'email'}  size="large" placeholder="Email Address" value={email} onChange={(e)=>{
                        dispatch(updateEmail({data:e.target.value}))
                        setFlag(!flag);
                    }}/>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} className='mt-2 mb-3'>
                    <Input type="url" size="large" placeholder="linkedIn Profile URL" value={linkedIn} onChange={(e)=>{
                        dispatch(updateLinkedIn({data:e.target.value}))
                        setFlag(!flag);
                    }}/>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} className='mt-2 mb-3'>
                    <Input type="url" size="large" placeholder="Personal website ( Optional )" value={personalWebsite} onChange={(e)=>{
                        dispatch(updatePersonalWebsite({data:e.target.value}))
                        setFlag(!flag);
                    }}/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mb-2 mt-2'>
                <button className="primary-outlined-btn" style={{ width: "100%" }} onClick={()=>{
                    dispatch(previousStep())
                }}>Previous</button>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mb-5 mt-2'>
                    <button className="primary-btn" style={{ width: "100%" }} disabled={!allowNext} onClick={()=>{
                    dispatch(nextStep())
                }}>Next</button>
                </Col>
            </Row>
        </>
    )
}
export default ContactDetails;