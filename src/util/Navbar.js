import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import logo from '../static/hseapps.png'
import { Typography, Button, Avatar} from 'antd';
import { UserOutlined, HomeOutlined, CompassOutlined } from '@ant-design/icons';
import {motion} from 'framer-motion'

const {Title , Text} = Typography


const Navbar = () => {
  
  return (
    <div style={{backgroundColor: 'white', borderBottom: 'solid 1px rgba(0,0,0,0.1)'}}>
      <div style = {{padding: '10px', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        
        <div style={{display: "flex", alignItems: "center", width:"250px"}}>
          <Link to="/">
            <motion.img whileHover={{ scale: 1.05 }} src={logo} style={{height: "45px", marginRight:"4px", marginLeft:"10px"}}></motion.img>
          </Link>
          <Title level={3} style={{margin: "0px auto"}}>HSE AP Showcase</Title>
        </div>
      </div>

    </div>
  );
}

export default Navbar;