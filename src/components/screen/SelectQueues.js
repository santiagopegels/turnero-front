import React, { useState, useEffect } from 'react'
import { Transfer } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues';


export const SelectQueues = () => {
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [data, setData] = useState([]);
    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])

    useEffect(() => {
        const data = queues.map(({_id:key, name:title, description}) =>(
            {key,title,description}
        ))
        setData(data)
    }, [queues])

    console.log(queues)


    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    return (
        <Transfer
            dataSource={data}
            titles={['Source', 'Target']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            render={item => `${item.title}-${item.description}`}
        />
    )
}
