import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Card,Checkbox,Form,Button,Input,Layout,Avatar,Image,Typography,Modal} from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../media/logo.png'
import background from '../../media/fondo.jpg'
import { useHistory } from "react-router-dom";
import {login,LogOut} from '../../redux/actions'

const { Title,Text } = Typography;

const style = {
  form : {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  },
  tailLayout : {
    wrapperCol: {
      offset: 1,
      span: 1,
    },
  },
  layout : {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    'background':`url(${background}) no-repeat fixed center/200%`,
  },
  input:{
    height:'8vh',
    fontSize:'20px',
    borderRadius:'10px'
  }
  
}


export const LoginForm = (props) => {
	let history = useHistory();
  const dispatch = useDispatch()
  const {user,loading} = useSelector(state => state.data)


	const onFinish = values => {
    dispatch(login(values))
		
	};

  const onFinishFailed = () => {}
	
  useEffect(() => {
    if(user && loading){
      sessionStorage.setItem('role',user.role)
      history.push('/home/list')
    } else if(!user && loading){
      Modal.error({
        title: 'Fail',
        content: 'email or password incorrect',
      });
      dispatch(LogOut())
    }
  },[user,loading])

	return (
		<>
      <Layout style={style.layout}>
        <Card 
          style={{borderRadius:'10px',backgroundColor:'hsla(0, 0%, 0%, 0.2)',width:'35%',height:'auto'}}
        >
          <Avatar
            src={<Image src={logo} preview={false}/>}
            size= {{ xs: 100, sm: 100, md: 170, lg: 170, xl: 170, xxl: 170}}
          />
          <Title level={3}>Ingreso</Title>
          <Form
          style={style.form}
          name="login-form"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={<Text level={3}>Email</Text>}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              { 
                type: 'email',
                message: 'Please enter a validate email!'
              }
            ]}
          >
            <Input prefix={<MailOutlined className="text-primary" />} style={style.input}/>
          </Form.Item>

          <Form.Item
            label={<Text level={3}>Password</Text>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="text-primary" />} style={style.input}/>
          </Form.Item>

          <Form.Item style={style.tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item style={style.tailLayout}>
            <Button style={{backgroundColor:'#91d5ff',color:'black'}} size='middle' htmlType="submit" shape="round">
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Card>

      </Layout>
      
			
		</>
	)
}




export default LoginForm
