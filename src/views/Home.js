import React from 'react';
import { Card, Divider, Row, Col, Popover, Dropdown, Menu} from 'antd';
import Navbar from '../util/Navbar'
import {MailOutlined, LinkOutlined, GithubOutlined, InstagramOutlined, DownOutlined} from '@ant-design/icons'

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
    <div style={{fontSize: "14px"}, {paddingBottom: "0px"}}>
        <p style={{textAlign: 'center'}, {display: 'inline-block'}}>Made by HSE Apps</p>
        <a href='https://www.instagram.com/hseapps/' target='_blank' class="social"><InstagramOutlined/></a>
        <a href='https://github.com/HSE-Apps' target='_blank' class="social"><GithubOutlined/></a>
    </div>
)

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.loom.com/share/d53eff425e654a0592f462588a6e6586" target='_blank'>Student Media</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.loom.com/share/909aa17f53284a6fa988ebadbc240853" target='_blank'>Digital Media</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="https://www.youtube.com/watch?v=rfy3A5tRM-8" target='_blank'>Animal Science</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="https://youtube.com/watch?v=LMJF5fqE3pY" target='_blank'>Advanced Life Science: Animals</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="https://www.youtube.com/watch?v=05wwOtZV6Y0" target='_blank'>Agriculture Power, Structure and Technology</a>
      </Menu.Item>
    </Menu>
);

class Home extends React.Component {
    render () {
        return (
            <div className="App">
                <Navbar></Navbar>
                <div class="body">

                    <div style={{}}>
                        <h2 class="ant-typography">HSE AP / Dual Credit & Academic Specialty Showcase - 1/21/21</h2>
                        <div style={{fontSize: "14px"}, {paddingBottom: "0px"}}>
                            <p style={{textAlign: 'center'}, {display: 'inline-block'}}>Made by HSE Apps</p>
                            <a href='https://www.instagram.com/hseapps/' target='_blank' class="social"><InstagramOutlined/></a>
                            <a href='https://github.com/HSE-Apps' target='_blank' class="social"><GithubOutlined/></a>
                        </div>
                        <span class="ant-typography ant-typography-secondary" style={{fontSize: '20px'}}>Join live Zoom Q&A sessions below or</span>
                        <br></br>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{fontSize: "16px"}}>
                                View pre-recorded/archived videos<DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
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