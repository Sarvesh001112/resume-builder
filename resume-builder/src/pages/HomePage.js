import React from 'react';
import { useNavigate } from 'react-router';
import { Row, Col } from 'antd';
import illustration from '../assets/homepage-illustration.jpg';
import logo from '../assets/logo512.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import bhsdev from '../assets/bhs-dev.jpeg';
import footerlogo from '../assets/footer-logo.png';
import {BsGithub,BsLinkedin,BsLink45Deg} from 'react-icons/bs';
function HomePage() {
    const navigate = useNavigate();
    return (
        <div className='custom-container'>
            <Row className='mt-2'>
                <Col span={24}>
                    <header className='d-flex justify-content-center align-items-center'>
                        <img src={logo} alt={"skillcert-logo"} className='logo' />
                    </header>
                </Col>
            </Row>
            <Row style={{ margin: "20px auto" }}>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }}>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                        <img src={illustration} alt='homepage-illustration' style={{ width: "70%", height: "auto" }} />
                    </div>
                </Col>
                <Col xs={{ span: 22, order: 2, offset: 1 }} sm={{ span: 22, order: 2, offset: 1 }} md={{ span: 10, order: 1, offset: 2 }} lg={{ span: 10, order: 1 }}>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
                        <h1 className='text-center txt-primary mb-4 mt-3' style={{ fontFamily: 'DM Serif Display' }}>Design a standout resume in minutes</h1>
                        <p className='fw-bold fs-6 mb-4 text-center'>Boost your chance to land that dream job</p>
                        <button className='primary-btn' onClick={() => {
                            navigate('/builder');
                        }}>Build resume now</button>
                        <p className='mt-3 mb-3 fw-light'>No registration needed</p>
                    </div>
                </Col>
            </Row>
            <Row className="features-container">
                <Col span={20} offset={2} style={{margin:"25px auto"}}>
                    <h1 className='text-center txt-primary mt-4' style={{ fontFamily: 'DM Serif Display',color:"white"}}>Why Skillcert..?</h1>
                </Col>
                <Col span={20} offset={2} className='d-flex flex-wrap justify-content-center' style={{marginBottom:"40px"}}>
                        <div className='features'>
                            <img src={img1} alt="skillcert-features" />
                            <p>Customized Templates</p>
                        </div>
                        <div className='features'>
                            <img src={img2} alt="skillcert-features" />
                            <p>Simple User Interface</p>
                        </div>
                        <div className='features'>
                            <img src={img3} alt="skillcert-features" />
                            <p>No Signup needed</p>
                        </div>
                        <div className='features'>
                            <img src={img4} alt="skillcert-features" />
                            <p>Your Data always secure</p>
                        </div>
                </Col>
            </Row>
            <Row style={{ margin: "60px auto" }}>
                <Col span={20} offset={2}>
                    <h1 className='text-center txt-primary mb-4' style={{ fontFamily: 'DM Serif Display' }}>Developed By</h1>
                </Col>
                <Col span={20} offset={2} className='d-flex justify-content-center'>
                    <div className='developer-info'>
                        <img src={bhsdev} alt='developer'/>
                        <h5>Balaharisankar L</h5>
                        <div className='d-flex justify-content-center align-items-center mb-4 mt-2 w-100'>
                            <BsGithub style={{fontSize:"25px",color:"#0016DF",margin:"auto 15px"}} title="Github" className='cursor-pointer' onClick={()=>{
                                window.open('https://github.com/BHS-Harish','_blank');
                            }}/>
                            <BsLinkedin style={{fontSize:"25px",color:"#0016DF",margin:"auto 15px"}} title="LinkedIn" className='cursor-pointer' onClick={()=>{
                                window.open('https://linkedin.com/in/balaharisankar','_blank');
                            }}/>
                            <BsLink45Deg style={{fontSize:"25px",color:"#0016DF",margin:"auto 15px"}} title="Personal Website" className='cursor-pointer' onClick={()=>{
                                window.open('https://bhstechie.netlify.app','_blank');
                            }}/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{backgroundColor:"#0016DF"}}>
                <Col span={20} offset={2} className='mt-5 mb-3'>
                        <img src={footerlogo} alt="skillcert-logo" style={{width:"250px"}}/>
                        <p className='fs-6 mt-3 fw-bold txt-secondary'>Build Your Resume to resume your career</p>
                </Col>
                <Col span={20} offset={2}>
                    <p className='text-center mb-4' style={{color:"white",fontWeight:"500"}}>{`Copyrights @ ${(new Date()).getFullYear()} Skillcert`}</p>
                </Col>
            </Row>
        </div>

    )
}
export default HomePage;