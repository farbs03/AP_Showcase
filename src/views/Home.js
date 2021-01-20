import React from 'react';
import { Card, Divider, Row, Col, Popover, Dropdown, Menu, List } from 'antd';
import Navbar from '../util/Navbar'
import {MailOutlined, LinkOutlined, GithubOutlined, InstagramOutlined, DownOutlined} from '@ant-design/icons'

import '../util/Navbar.js'

import sec1 from '../data/sectionOne.json'
import sec2 from '../data/sectionTwo.json'

function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}
sec1.sort(dynamicSort("Course"));
sec2.sort(dynamicSort("Course"));

var length1 = sec1.length;
var length2 = sec2.length;

for(var i = 0; i < length1; i++) {
    if(!(sec1[i].Email).includes("mailto:")) {
        sec1[i].Email = "mailto:" + sec1[i].Email;
    }
}
for(var i = 0; i < length2; i++) {
    if(!(sec2[i].Email).includes("mailto:")) {
        sec2[i].Email = "mailto:" + sec2[i].Email;
    }
}



const HSEApps = () => (
    <div style={{fontSize: "14px"}, {paddingBottom: "0px"}, {display: "inline-block"}}>
        <p style={{textAlign: 'center'}, {display: 'inline-block'}}>Made by HSE Apps</p>
        <a href='https://www.instagram.com/hseapps/' target='_blank' class="social"><InstagramOutlined/></a>
        <a href='https://github.com/HSE-Apps' target='_blank' class="social"><GithubOutlined/></a>
    </div>
)

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://flipgrid.com/harter9066" target='_blank'>Virtual Open House teacher videos (not live)</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="https://www.loom.com/share/d53eff425e654a0592f462588a6e6586" target='_blank'>Student Media</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="https://www.loom.com/share/909aa17f53284a6fa988ebadbc240853" target='_blank'>Digital Media</a>
        </Menu.Item>
        <Menu.Item key="3">
            <a href="https://www.youtube.com/watch?v=rfy3A5tRM-8" target='_blank'>Animal Science</a>
        </Menu.Item>
        <Menu.Item key="4">
            <a href="https://youtube.com/watch?v=LMJF5fqE3pY" target='_blank'>Advanced Life Science: Animals</a>
        </Menu.Item>
        <Menu.Item key="5">
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

                    <h2 class="ant-typography" style={{display: "inline-block"}}>HSE AP / Dual Credit & Academic Specialty Virtual Showcase - 1/21/21</h2><Divider type='vertical' style={{borderLeft: "1px solid rgb(0 0 0 / 15%)"}}/><HSEApps/>
                    <br></br>
                    <br></br>
                    <div class="overview">
                        <Card 
                        hoverable
                        title={<h3 style={{fontSize: "20px"}, {marginBottom: "0px"}}>Overview</h3>}
                        style={{borderRadius: "20px"}, {marginBottom: "20px"}, {width: "100%"}}>
                            <p>Welcome to Hamilton Southeastern High School’s AP/Dual Credit and Academic Specialty Virtual Showcase! Tonight’s program is designed to provide you with information about course offerings in Advanced Placement, Dual Credit, and Academic Specialty Program areas. You will get the opportunity to hear from and speak with several teachers of these classes and programs by participating in live Zoom sessions scheduled below. These live Zoom sessions will be offered in half-hour increments, starting at 6:30pm and ending at 8:30pm. In addition, links are provided below to a pre-recorded presentation, as well as a panel discussion, in which students and teachers involved in these types of classes and programs share their experiences and insights, along with representatives from IU-Bloomington, Ball State, Butler, and Ivy Tech Community College, who share information about their programs. Our goal is to equip you to make the best decisions as you plan for the future. We hope you enjoy the program. Have a great evening!</p>
                            <a href="https://youtu.be/Z9ZfmOA-JiQ">AP/Dual Credit & Academic Specialty Showcase Recorded Presentation <LinkOutlined /></a>
                            <br></br>
                            <a href="https://youtu.be/u_qeyd9WL48">AP/Dual Credit & Academic Specialty Showcase Recorded Panel Discussion <LinkOutlined /></a>
                        </Card>
                    </div>
                    <br></br>
                    <br></br>
                    <span class="ant-typography ant-typography-secondary" style={{fontSize: '20px'}}>Join live Zoom Q&A sessions below or</span>
                    <br></br>
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{fontSize: "16px"}}>
                            View pre-recorded/archived videos <DownOutlined />
                        </a>
                    </Dropdown>
                    <br></br>
                    <div class="slots">

                        <div class='time-slot' id="section1" style={{display: 'block'}}>
                            <Divider orientation='left' style={{borderTopColor: "rgb(0 0 0 / 15%);"}}><h2 style={{display: "inline-block"}}>6:30pm-7:30pm</h2><Divider type='vertical' style={{borderLeft: "1px solid rgb(0 0 0 / 15%)"}}/><a style={{display: "inline-block"}}href="#section2">Go to 7:30-8:30</a></Divider>
                            <span class="ant-typography ant-typography-secondary" style={{fontSize: '16px'}}>**If part of the course name is cut off, click on the title area to see the entire name</span>
                            <List 
                            grid = {{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 2,
                                xl: 3,
                                xxl: 3,
                            }}
                            dataSource={sec1}
                            renderItem={course => (
                                    <List.Item>
                                        <Card 
                                        hoverable
                                        extra={<a href={course.Zoom} target='_blank'>Zoom <LinkOutlined/></a>}
                                        title={<Popover content={HSEApps} title={course.Course}>{course.Course}</Popover>}
                                        style={{ borderRadius: "20px", marginBottom: "20px"}}>
                                            <p>{course.Time}</p>
                                            <p>Teacher: {course.Teacher}</p>
                                            <a href={course.Email}><MailOutlined/> {(course.Email).split("mailto:")}</a>
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </div>

                        <div class='time-slot' id="section2" style={{display: 'block'}}>
                            <Divider orientation='left' style={{borderTopColor: "rgb(0 0 0 / 15%);"}}><h2 style={{display: "inline-block"}}>7:30pm-8:30pm</h2><Divider type='vertical' style={{borderLeft: "1px solid rgb(0 0 0 / 15%)"}}/><a style={{display: "inline-block"}}href="#section1">Go back to 6:30-7:30</a></Divider>
                            <List 
                            grid = {{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 2,
                                xl: 3,
                                xxl: 3,
                            }}
                            dataSource={sec2}
                            renderItem={course => (
                                    <List.Item>
                                        <Card 
                                        hoverable
                                        extra={<a href={course.Zoom} target='_blank'>Zoom <LinkOutlined/></a>}
                                        title={<Popover content={HSEApps} title={course.Course}>{course.Course}</Popover>}
                                        style={{ borderRadius: "20px", marginBottom: "20px"}}>
                                            <p>{course.Time}</p>
                                            <p>Teacher: {course.Teacher}</p>
                                            <a href={course.Email}><MailOutlined/> {(course.Email).split("mailto:")}</a>
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}  

export default Home