import React, { useState, useEffect } from 'react';
import { Row, Col, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../redux/Slices/StepSlice';
import axios from 'axios';
function DownLoadPage() {
    const theme = useSelector((state) => state.step.theme);
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);
    const [allowNext, setAllowNext] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        if (theme !== "") {
            setAllowNext(true);
        }
        else
            setAllowNext(false);
        // eslint-disable-next-line
    }, [flag])
    const downLoadResume = async () => {
        try {
            await axios.post('https://cdn-skillcert.onrender.com/create-pdf', { data }).then((response) => {
                var a = document.createElement("a");
                a.href = 'https://cdn-skillcert.onrender.com/resume';
                a.download = "Resume.pdf";
                document.body.append(a);
                a.click();
                a.remove();
                messageApi.open({
                    type: 'success',
                    content: 'Thanks for using skillcert',
                    duration:5
                });

            })
        } catch (error) {
            console.log(error);
        }
    }
    let themeColor = ["#4200FF", '#3190EE', '#61B6BB', '#C84141', '#000000']
    return (
        <>
            {contextHolder}
            <Row>
                <Col span={20} offset={2} className='d-flex flex-wrap justify-content-around' >
                    {
                        themeColor.map((value, index) => {
                            return (
                                <div className='resumeTheme' style={theme === value ? { border: "5px solid #2cd701" } : null} key={index} onClick={() => {
                                    dispatch(updateTheme({ data: value }))
                                    setFlag(!flag);
                                }}></div>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }}>
                </Col>
                <Col span={16} offset={4}>
                    <button className="primary-btn" style={{ width: "100%" }} disabled={!allowNext} onClick={() => {
                        downLoadResume()
                    }}>Download Resume</button>
                </Col>
                <Col span={16} offset={4} className="mt-3 mb-4">
                    <button className="primary-outlined-btn fw-bold" style={{ width: "100%" }} onClick={() => {
                        window.open('/','_self');
                    }}>Go Back</button>
                </Col>
            </Row>
        </>
    )
}
export default DownLoadPage;