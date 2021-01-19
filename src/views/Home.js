import React from 'react';
import { Card, Divider, Row, Col, Popover} from 'antd';
import Navbar from '../util/Navbar'
import {MailOutlined, LinkOutlined, GithubOutlined, InstagramOutlined} from '@ant-design/icons'

import '../util/Navbar.js'

import sec1 from '../data/sectionOne.json'
import sec2 from '../data/sectionTwo.json'

var length1 = sec1.length;
var length2 = sec2.length;

for(var i = 0; i < length1; i++) {
    sec1[i].Email = "mailto:" + sec1[i].Email;
}
for(var i = 0; i < length2; i++) {
    sec2[i].Email = "mailto:" + sec2[i].Email;
}
const HSEApps = (
    <div style={{fontSize: "14px"}}>
        <p style={{textAlign: 'center'}}>Made by HSE Apps</p>
        <div class="social-container">
            <a href='' class="social"><InstagramOutlined/></a>
            <a href='' class="social"><GithubOutlined/></a>
        </div>
    </div>
)
class Home extends React.Component {
    render () {
        return (
            <div className="App">
                <Navbar></Navbar>
                <div class="body">

                    <div style={{}}>
                        <h2 class="ant-typography">Browse Courses</h2>
                        <span class="ant-typography ant-typography-secondary" style={{fontSize: '18px'}}>See when each AP/Dual Credit class meets below</span>
                    </div>
                    <br></br>
                    <div class="slots">

                        <div class='time-slot' id="section1" style={{display: 'block'}}>
                            <Divider orientation='left'><h2 style={{display: "inline-block"}}>6:30pm-7:30pm</h2><Divider type='vertical'/><a style={{display: "inline-block"}}href="#section2">Go to 7:30-8:30</a></Divider>
                            <Row gutter={length1}>
                                {sec1.map((course) => {
                                    return <Col className="gutter-row" span={6}>
                                        <Popover content={HSEApps} title={course.Course} trigger="click">
                                            <Card 
                                            hoverable
                                            extra={<a href={course.Zoom}>Zoom <LinkOutlined/></a>}
                                            title={course.Course}
                                            style={{ borderRadius: "20px", marginBottom: "20px"}}>
                                                <p>{course.Time}</p>
                                                <p>Teacher: {course.Teacher}</p>
                                                <a href={course.Email}><MailOutlined/> {(course.Email).split("mailto:")}</a>
                                            </Card>
                                        </Popover>
                                    </Col>
                                })}
                            </Row>
                        </div>

                        <div class='time-slot' id="section2" style={{display: 'block'}}>
                            <Divider orientation='left'><h2 style={{display: "inline-block"}}>7:30pm-8:30pm</h2><Divider type='vertical'/><a style={{display: "inline-block"}}href="#section1">Go back to 6:30-7:30</a></Divider>
                            <Row gutter={length2}>
                                {sec2.map((course) => {
                                    return <Col className="gutter-row" span={6}>
                                        <Popover content={HSEApps} title={course.Course} trigger="click">
                                            <Card 
                                            hoverable
                                            extra={<a href={course.Zoom}>Zoom <LinkOutlined/></a>}
                                            title={course.Course}
                                            style={{ borderRadius: "20px", marginBottom: "20px"}}>
                                                <p>{course.Time}</p>
                                                <p>Teacher: {course.Teacher}</p>
                                                <a href="mailto:"><MailOutlined/> {(course.Email).split("mailto:")}</a>
                                            </Card>
                                        </Popover>
                                    </Col>
                                })}
                            </Row>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}  

export default Home