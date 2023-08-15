import React, {useState,useEffect } from "react";
import { Row, Col, Collapse, Input, DatePicker, Checkbox } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateExperience } from '../redux/Slices/ExperienceSlice';
import {previousStep,nextStep} from '../redux/Slices/StepSlice';
const { Panel } = Collapse;
function Experience() {
    const experience = useSelector((state) => state.experiences.experience);
    const[flag,setFlag]=useState(false);
    const [allowNext,setAllowNext]=useState(false);
    useEffect(()=>{
        if(experience.length>0)
            setAllowNext(true)
        else
            setAllowNext(false);
        // eslint-disable-next-line
    },[flag])
    const dispatch = useDispatch();
    const handleDelete = (index) => {
        let expArray = [...experience];
        expArray.splice(index, 1);
        dispatch(updateExperience({ data: expArray }));
        setFlag(!flag)
    }
    const updateExp = (newExp, index) => {
        let oldExpArray = [...experience];
        oldExpArray.splice(index, 1, newExp);
        dispatch(updateExperience({ data: oldExpArray }));
    }
    return (
        <>
            <Row>
                <Col span={20} offset={2} className='mt-2 mb-3'>
                    {
                        experience.length > 0 ?
                            <Collapse expandIconPosition="end">
                                {
                                    experience.map((value, index) => {
                                        return (
                                            <Panel header={"Experience " + (index + 1)} key={index + 1} className='fw-bold' >
                                                <Row>
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }} className="mt-2 mb-3">
                                                        <Input type="text" placeholder="Organization Name" size="large" value={experience[index].companyName} onChange={(e) => {
                                                            let oldExp = experience[index];
                                                            let newExp = { ...oldExp, companyName: e.target.value }
                                                            updateExp(newExp, index);
                                                        }} />
                                                    </Col>
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11, offset: 2 }} lg={{ span: 11, offset: 2 }} className="mt-2 mb-3">
                                                        <Input type="text" placeholder="Designation" size="large" value={experience[index].position} onChange={(e) => {
                                                            let oldExp = experience[index];
                                                            let newExp = { ...oldExp, position: e.target.value }
                                                            updateExp(newExp, index);
                                                        }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} className="mt-2 mb-3">
                                                        <DatePicker size="large" className="w-100" placeholder="Start Date" defaultValue={experience[index].startDate.date} onChange={(date, dateString) => {
                                                            let oldExp = experience[index];
                                                            let newExp = { ...oldExp, startDate: {date,dateString} }
                                                            updateExp(newExp, index);
                                                        }} />
                                                    </Col>
                                                    {
                                                        experience[index].endDate.present ?
                                                            ""
                                                            :
                                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} className="mt-2 mb-3">
                                                                <DatePicker size="large" className="w-100" placeholder="End Date" defaultValue={experience[index].endDate.date} onChange={(date,dateString)=>{
                                                            let oldExp = experience[index];
                                                            let newExp = { ...oldExp, endDate: {...oldExp.endDate,date,dateString}}
                                                            updateExp(newExp, index);
                                                        }}/>
                                                            </Col>
                                                    }
                                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} className="mt-2 mb-3">
                                                        <Checkbox checked={experience[index].endDate.present} onChange={(e)=>{
                                                            let oldExp = experience[index];
                                                            let newExp = { ...oldExp, endDate: {...oldExp.endDate,present:e.target.checked}}
                                                            updateExp(newExp, index);
                                                        }} >Present work here</Checkbox>
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
                        let newExperience = { companyName: "", position: "", startDate: { date: "", dateString: "" }, endDate: { present: false, date: "", dateString: "" } };
                        let newExpArray = experience;
                        newExpArray = [...newExpArray, newExperience];
                        dispatch(updateExperience({ data: newExpArray }));
                        setFlag(!flag)
                    }}><PlusCircleFilled /> Add New Experience</button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mb-2 mt-2'>
                <button className="primary-outlined-btn" style={{ width: "100%" }} onClick={()=>{
                    dispatch(previousStep())
                }}>Previous</button>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} className='mb-2 mt-2'>
                    <button className="primary-btn" style={{ width: "100%" }} disabled={!allowNext} onClick={()=>{
                    dispatch(nextStep())
                }}>Next</button>
                </Col>
            </Row>
        </>
    )
}
export default Experience;