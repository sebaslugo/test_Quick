import React, { useState,useEffect } from 'react';
import { Table} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {getData} from '../../../../redux/actions'





const List = () => {
    const dispatch = useDispatch();
    const info = useSelector(store => store.data.data)


    useEffect(() => {
      if(!info.length){
        console.log('ola')
        dispatch(getData())
      }    
    },[])

    


    const columns = [
        {
          title: 'Atleta',
          dataIndex: 'athlete',
        },
        {
          title: 'Edad',
          dataIndex: 'age',
          dataIndex: 'age',
          key: 'age',

        },
        {
          title: 'Pais',
          dataIndex: 'country',
        },
        {
          title: 'Año',
          dataIndex: 'year',
        },
        {
          title: 'Fecha',
          dataIndex: 'date',
        },
        {
          title: 'Deporte',
          dataIndex: 'sport',
        },
        {
          title: 'Oro',
          dataIndex: 'gold',
        },
        {
          title: 'Plata',
          dataIndex: 'silver',
        },
        {
          title: 'Bronce',
          dataIndex: 'bronze',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
      ];
  
    return (
        <div>
        <Table
            columns={columns}
            dataSource={info }
            scroll={{x:1000, y: 350 }}

        />
        </div>
    );
};

export default List;