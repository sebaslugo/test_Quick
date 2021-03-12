import React, { useState,useEffect } from 'react';
import { Table} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {getData} from '../../../../redux/actions'





const List = () => {
    const dispatch = useDispatch();
    const info = useSelector(store => store.data)
    const [data,setData] = useState([])
    const [state,setState] = useState({
        sortedInfo: {},
    });
    useEffect(() => {
        dispatch(getData())
    },[])

    useEffect(() => {
        setData(info.data)
    },[info.data])

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters',sorter);
        setState({
          sortedInfo: sorter,
        });
    };
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
          sorter: (a, b) => a.age - b.age,
          sortOrder: state.sortedInfo.columnKey === 'age' && state.sortedInfo.order,
          ellipsis: true,

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
            onChange={handleChange}
            columns={columns}
            dataSource={data}
            scroll={{x:1000, y: 350 }}

        />
        </div>
    );
};

export default List;