import { Layout, Menu,Typography,Image,Avatar,Card,Button } from 'antd';
import {TableOutlined,TrophyOutlined,UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import Logo from '../../media/logo.png'
import Pestañas from './Pestañas'
import {useDispatch,useSelector} from 'react-redux'
import {LogOut} from '../../redux/actions'
import React,{useEffect, useState} from 'react'
const { Header, Content} = Layout;
const {Title,Text} = Typography

const menuStyle = {
  width: '400px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '22px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default function List( ) {
  let history = useHistory();
  const dispatch = useDispatch()
  const {user} = useSelector(store => store.data)
  const  [profile,setProfile] = useState({})

  function logout () {
    sessionStorage.removeItem('role')
    dispatch(LogOut()) 
    history.push('/login')
  }

  useEffect(() => {
    if(!profile.name){
      setProfile(user)
    }
    
  })
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header" style={{display:'flex',justifyContent:'space-between',backgroundColor:'#91d5ff'}}>   
      
        <Image 
          src={Logo} 
          preview={false}
          size= 'auto'
          style={{width: '100px',cursor:'pointer'}}
          
        />
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button onClick={logout} shape='round' style={{backgroundColor:'white',color:'black',marginRight:'10px'}}>LogOut</Button>
          <Avatar style={{marginRight:'10px'}}><UserOutlined/></Avatar>
          <Text>{profile.name}</Text>
          <Text>{`(${profile.role})`}</Text>
        </div>
        
      </Header>
      <Layout>
        
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={menuStyle}
        >            
          <Menu.Item key="1" icon={<TableOutlined />} onClick={() => history.push('/home/list')}>
            Listado
          </Menu.Item>
          <Menu.Item key="2" icon={<TrophyOutlined />} onClick={() => history.push('/home/category')}>
            Medallas
          </Menu.Item>

        </Menu>
        
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Pestañas/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
} 
