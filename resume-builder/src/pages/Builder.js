import React, { useState,useEffect } from 'react';
import { Row, Col, Progress } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import ContactDetails from '../components/ContactDetails';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import DownloadPage from '../components/DownLoadPage';
import {useSelector} from 'react-redux';
import logo from '../assets/logo512.png';
function Builder() {
    let steps = ['Personal Information', 'Contact Details', 'Skills', 'Experience', 'Education','Select theme'];
    const current=useSelector((state)=>state.step.current);
    const [progress,setProgress]=useState(0);
    useEffect(()=>{
        current===0?setProgress(0):current===1?setProgress(20):current===2?setProgress(40):current===3?setProgress(60):current===4?setProgress(80):setProgress(100);
    },[current])
    const loadComponent=()=>{
        switch(current){
            case 0:
                return <PersonalInfo/>;
            case 1:
                return <ContactDetails/>;
            case 2:
                return <Skills/>;
            case 3:
                return <Experience/>;
            case 4:
                return <Education/>;
            default:
                return <DownloadPage/>;
        }
    }
    return (
        <div className='custom-container'>
            <Row className='mt-5'>
                <Col span={20} offset={2} style={{height:"100px"}} className='d-flex justify-content-center'>
                    <img src={logo} alt="logo" className='logo'/>
                </Col>
                <Col span={20} offset={2}>
                    <h1 className='txt-primary' style={{ fontFamily: 'DM Serif Display' }}>Let's Start Building Your Career</h1>
                </Col>
                <Col span={20} offset={2} className='mt-2'>
                    <Progress
                        percent={progress}
                        strokeColor={{
                            '0%': '#0016DF',
                            '100%': '#2cd701',
                        }}
                    />
                </Col>
                <Col span={20} offset={2}>
                    <p className='fs-5 fw-bold mb-3'>{steps[current]}</p>
                </Col>
            </Row>
            {
                loadComponent()
            }
        </div>
    )
}
export default Builder;