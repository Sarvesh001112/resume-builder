import React, { useState, useEffect } from "react";
import { Row, Col, Collapse, Input, DatePicker, Checkbox } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateEducation } from '../redux/Slices/EducationSlice';
import { previousStep, nextStep } from '../redux/Slices/StepSlice';
const { Panel } = Collapse;
function Education() {
    const education = useSelector((state) => state.educations.education);
    const [flag, setFlag] = useState(false);
    const [allowNext, setAllowNext] = useState(false);
    useEffect(() => {
        if (education.length > 0)
            setAllowNext(true)
        else
            setAllowNext(false);
        // eslint-disable-next-line
    }, [flag])
    const dispatch = useDispatch();
    const handleDelete = (index) => {
        let eduArray = [...education];
        eduArray.splice(index, 1);
        dispatch(updateEducation({ data: eduArray }));
        setFlag(!flag)
    }
    const updateEdu = (newEdu, index) => {
        let oldEduArray = [...education];
        oldEduArray.splice(index, 1, newEdu);
        dispatch(updateEducation({ data: oldEduArray }));
    }
    return (
        <>
            <Row>
                <Col span={20} offset={2} className='mt-2 mb-3'>
                    {
                        education.length > 0 ?
                            <Collapse expandIconPosition="end">
                                {
                                    education.map((value, index) => {
                                        return (
                                            <Panel header={"Education " + (index + 1)} key={index + 1} className='fw-bold' >
                                                <Row>
                                                    <Col span={24} className="mt-2 mb-3">
                                                        <Input type="text" placeholder="School (or) College name" size="large" value={education[index].collegeName} onChange={(e) => {
                                                            let oldEdu = education[index];
                                                            let newEdu = { ...oldEdu, collegeName: e.target.value }
                                                            updateEdu(newEdu, index);
                                                        }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }} className="mt-2 mb-3">
                                                        <Input type="text" placeholder="Degree ( ex : BE., )" size="large" value={education[index].degree} onChange={(e) => {
                                                            let oldEdu = education[index];
                                                            let newEdu = { ...oldEdu, degree: e.target.value }
                                                            updateEdu(newEdu, index);
                                                        }} />
                                                    </Col>
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11, offset: 2 }} lg={{ span: 11, offset: 2 }} className="mt-2 mb-3">
                                                        <Input type="text" placeholder="Area" size="large" value={education[index].area} onChange={(e) => {
                                                            let oldEdu = education[index];
                                                            let newEdu = { ...oldEdu, area: e.target.value }
                                                            updateEdu(newEdu, index);
                                                        }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} className="mt-2 mb-3">
                                                        <DatePicker size="large" className="w-100" placeholder="Start Date" defaultValue={education[index].startDate.date} onChange={(date, dateString) => {
                                                            let oldEdu = education[index];
                                                            let newEdu = { ...oldEdu, startDate: { date, dateString } }
                                                            updateEdu(newEdu, index);
                                                        }} />
                                                    </Col>
                                                    {
                                                        education[index].endDate.present ?
                                                            ""
                                                            :
                                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} className="mt-2 mb-3">
                                                                <DatePicker size="large" className="w-100" placeholder="End Date" defaultValue={education[index].endDate.date} onChange={(date, dateString) => {
                                                                    let oldEdu = education[index];
                                                                    let newEdu = { ...oldEdu, endDate: { ...oldEdu.endDate, date, dateString } }
                                                                    updateEdu(newEdu, index);
                                                                }} />
                                                            </Col>
                                                    }
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} className="mt-2 mb-3">
                                                        <Checkbox checked={education[index].endDate.present} onChange={(e) => {
                                                            let oldEdu = education[index];
                                                            let newEdu = { ...oldEdu, endDate: { ...oldEdu.endDate, present:e.target.checked } }
                                                            updateEdu(newEdu, index);
                                                        }} >Presently study here</Checkbox>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <button className="secondary-btn w-100 fw-bold mt-2 mb-2" onClick={() => {
                                                            handleDelete(index)
                                                        }}>Delete Experience</button>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                        )
                                    })
                                }
                            </Collapse>
                            :
                            ""
                    }
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 8, offset: 14 }} lg={{ span: 8, offset: 14 }}>
                    <button className="secondary-btn fs-6 w-100 d-flex align-items-center justify-content-center" onClick={() => {
                        let newEducation = { collegeName: "", degree: "", area: "", startDate: { date: "", dateString: "" }, endDate: { present: false, date: "", dateString: "" } };
                        let newEduArray = education;
                        newEduArray = [...newEduArray, newEducation];
                        dispatch(updateEducation({ data: newEduArray }));
                        setFlag(!flag)
                    }}><PlusCircleFilled /> Add New Education</button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mb-2 mt-2'>
                    <button className="primary-outlined-btn" style={{ width: "100%" }} onClick={() => {
                        dispatch(previousStep())
                    }}>Previous</button>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mb-2 mt-2'>
                    <button className="primary-btn" style={{ width: "100%" }} disabled={!allowNext} onClick={() => {
                        dispatch(nextStep())
                    }}>Next</button>
                </Col>
            </Row>
        </>
    )
}
export default Education;