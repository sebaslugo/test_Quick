import { Card, Col, Row,Image,Typography,Modal,Button } from 'antd';
import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import Gold from '../../../../media/golden.png'
import Silver from '../../../../media/silver.png'
import Bronze from '../../../../media/bronze.png';
import {getData} from '../../../../redux/actions'

const { Title } = Typography;

const card = {
    borderRadius:'20px'
}

export default function Category () {
    const dispatch = useDispatch();
    const data = useSelector (store => store.data)
    const [state,setState] = useState({})

    useEffect(() => {
        if(!data){
            dispatch(getData())
        }
        
        
    },[])

    useEffect(()=> {
        setState({
            gold:data.gold,
            silver:data.silver,
            bronze:data.bronze
        })
    },[data.data])

    function countDown(key) {
        let secondsToGo = 3;
        const modal = Modal.success({
            centered:true,
            title: 'Info',
            content:state[key].message
        });
        const timer = setInterval(() => {
          secondsToGo -= 1;
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          modal.destroy();
        }, secondsToGo * 1000);
    }


    return (
        <div className="site-card-wrapper" style={{marginTop:'60px'}}>
          <Row gutter={16}>
            <Col span={8} >
                <div onClick={() => countDown('gold')}>
                    <Card 
                        title="ORO"
                        bordered={false} 
                        hoverable={true} 
                        style={{...card,backgroundColor:'#fff566'}}
                        cover={<Image alt="example" src={Gold} width={200} preview={false}/>}
                    >
                        <Title>{state.gold && state.gold.total}</Title>
                    </Card>
                </div>
              
            </Col>
            <Col span={8}>
                <div onClick={() => countDown('silver')}>
                    <Card 
                        title="PLATA" bordered={false}  
                        hoverable={true} 
                        style={{...card,backgroundColor:'#d9d9d9'}}
                        cover={<Image alt="example" src={Silver} width={200} preview={false}/>}
                    >
                        <Title>{state.silver && state.silver.total}</Title>
                    </Card>
                </div>
              
            </Col>
            <Col span={8}>
                <div onClick={() => countDown('bronze')}>
                    <Card 
                        title="BRONCE" 
                        bordered={false} 
                        hoverable={true} 
                        style={{...card,backgroundColor:'#ffc53d'}}
                        cover={<Image alt="example" src={Bronze} width={200} preview={false}/>}
                        >
                        <Title>{state.bronze && state.bronze.total}</Title>
                    </Card>
                </div>
              
            </Col>
          </Row>
        </div>
        
    )

}
