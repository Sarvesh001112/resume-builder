import React, { useEffect, useState } from "react";
import { Row, Col, Input, DatePicker,Avatar } from 'antd';
import { updateFirstName, updateLastName, updateFatherName, updateNationality, updateOccupation, updateProfilePicture, updateMaritalStatus, updateDateOfBirth, updateBasicSummary } from '../redux/Slices/PersonalInfoSlice';
import { nextStep } from '../redux/Slices/StepSlice';
import { useDispatch, useSelector } from 'react-redux';
const { TextArea } = Input
function PersonalInfo() {
    const firstName = useSelector((state) => state.personalInfo?.firstName);
    const lastName = useSelector((state) => state.personalInfo?.lastName);
    const fatherName = useSelector((state) => state.personalInfo?.fatherName);
    const nationality = useSelector((state) => state.personalInfo?.nationality);
    const occupation = useSelector((state) => state.personalInfo?.occupation);
    const maritalStatus = useSelector((state) => state.personalInfo?.maritalStatus);
    const dateOfBirth = useSelector((state) => state.personalInfo?.dateOfBirth);
    const basicSummary = useSelector((state) => state.personalInfo?.basicSummary);
    const imageUrl = useSelector((state) => state.personalInfo?.imageUrl);

    const dispatch = useDispatch();
    const[flag,setFlag]=useState(false);
    const[allowNext,setAllowNext]=useState(false);
    useEffect(()=>{
        if(firstName&&lastName&&fatherName&&nationality&&occupation&&maritalStatus&&dateOfBirth!==null&&basicSummary&&imageUrl){
            setAllowNext(true);
        }
        else
            setAllowNext(false);
        // eslint-disable-next-line
    },[flag])
    return (
        <>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <Input placeholder="First Name" size="large" required={true} value={firstName} onChange={(e) => {
                        dispatch(updateFirstName({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <Input placeholder="Last Name" size="large" value={lastName} required={true} onChange={(e) => {
                        dispatch(updateLastName({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <Input placeholder="Father's Name" size="large" required={true} value={fatherName} onChange={(e) => {
                        dispatch(updateFatherName({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <Input placeholder="Nationality ( ex : indian )" size="large" value={nationality} required={true} onChange={(e) => {
                        dispatch(updateNationality({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <Input placeholder="Occupation ( ex : student )" size="large" required={true} value={occupation} onChange={(e) => {
                        dispatch(updateOccupation({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <Input placeholder="Marital Status ( ex : married )" size="large" value={maritalStatus} required={true} onChange={(e) => {
                        dispatch(updateMaritalStatus({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <div className="w-100 h-100 d-flex flex-column align-items-center">
                        <DatePicker placeholder="Date of birth" size="large" defaultValue={dateOfBirth?.date} required={true} format={'DD/MM/YYYY'} onChange={(date, dateString) => {
                            dispatch(updateDateOfBirth({ data: {
                                date:date,
                                dateString
                            } }))
                            setFlag(!flag);
                        }} />
                        <div className="mb-3 mt-4">
                            <label htmlFor="profile-pic" style={{ margin: "5px" }}>Profile Picture</label>
                            <input type={'file'} name="profile-pic" placeholder="Choose Profile Picture" required={true} onChange={(e) => {
                                var reader = new FileReader();
                                reader.onloadend = function () {
                                    dispatch(updateProfilePicture({
                                        data:reader.result
                                    }))
                                    setFlag(!flag);
                                }
                                reader.readAsDataURL(e.target.files[0]);
                            }} />
                            {
                                imageUrl?<Avatar src={imageUrl} size={64}/>:""
                            }
                        </div>
                    </div>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mt-2 mb-3'>
                    <TextArea rows={4} placeholder='Basic Summary' showCount maxLength={1000} required={true} value={basicSummary} onChange={(e) => {
                        dispatch(updateBasicSummary({ data: e.target.value }))
                        setFlag(!flag);
                    }} />
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }}>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }}>
                    <button className="primary-btn" style={{ width: "100%" }} disabled={!allowNext} onClick={() => {
                        dispatch(nextStep())
                    }}>Next</button>
                </Col>
            </Row>
        </>
    )
}
export default PersonalInfo;