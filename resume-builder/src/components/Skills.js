import React, { useEffect, useState } from "react";
import { Row, Col, Select } from 'antd';
import { useDispatch,useSelector } from "react-redux";
import {updateHardSkill,updateSoftSkill,updateLanguageSkill} from '../redux/Slices/SkillSlice';
import {previousStep,nextStep} from '../redux/Slices/StepSlice';
function Skills() {
  const hardSkills=useSelector((state)=>state.skills.hardSkills);
  const softSkills=useSelector((state)=>state.skills.softSkills);
  const languageSkills=useSelector((state)=>state.skills.languageSkills);
  const[allowNext,setAllowNext]=useState(false);
  const[flag,setFlag]=useState(false);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(softSkills.length>0&&hardSkills.length>0&&languageSkills.length>0)
      setAllowNext(true)
    else
      setAllowNext(false);
    // eslint-disable-next-line
  },[flag])
  return (
    <>
      <Row>
        <Col span={20} offset={2} className='mt-3 mb-3'>
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Enter your hard skills ( upto 15 )"
            onChange={(value)=>{
              setFlag(!flag);
              if(hardSkills.length<15||value.length<hardSkills.length){
                dispatch(updateHardSkill({data:value}));
              }
            }}
            size='large'
            defaultValue={hardSkills}
          />
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} className='mt-3 mb-3'>
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Enter your soft skills ( upto 15 )"
            onChange={(value)=>{
              setFlag(!flag);
              if(softSkills.length<15||value.length<softSkills.length){
                dispatch(updateSoftSkill({data:value}));
              }
            }}
            size='large'
            defaultValue={softSkills}
          />
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} className='mt-3 mb-3'>
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Enter your Language skills"
            onChange={(value)=>{
              setFlag(!flag);
              if(languageSkills.length<15||value.length<languageSkills.length){
                dispatch(updateLanguageSkill({data:value}));
              }
            }}
            size='large'
            defaultValue={languageSkills}
          />
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
export default Skills;